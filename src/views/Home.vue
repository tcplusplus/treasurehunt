<template>
  <div id="app" class="app">
    <div :style="backgroundStyle" class="background" />
    <div v-if="started">
      <div v-if="config !== null">
        <div class="heading" v-if="!popupImage">
          {{ name }} <br />Ga naar punt {{ index + 1 }}
        </div>
        <div class="heading" v-else-if="isCheckpoint">Goed bezig!</div>
        <div class="heading" v-else-if="sad">Verkeerd, probeer opnieuw!</div>
        <div class="heading" v-else-if="thumb">Correct!</div>

        <audio v-if="audioUrl" autoplay>
          <source :src="audioUrl" type="audio/mpeg" />
        </audio>
        <div class="hints" v-if="hintsAvailable">
          <b-button
            pill
            id="popover-target-1"
            style="padding: 0px"
            :variant="availableHints.length > 0 ? 'success' : 'secondary'"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Questionmark.svg/1200px-Questionmark.svg.png"
              width="100%"
            />
          </b-button>
          {{ nextHint }}
          <b-popover target="popover-target-1" triggers="hover" placement="top">
            <template v-slot:title>
              Hints
            </template>
            <div v-if="availableHints.length === 0">
              Nog geen hints beschikbaar
            </div>
            <ul v-else>
              <li
                v-for="(hint, index) in availableHints"
                :key="index"
                v-html="hint"
              />
            </ul>
          </b-popover>
        </div>

        <!-- compass -->
        <img
          v-if="!popupImage"
          :src="require('@/assets/compass.png')"
          class="compassloc"
          :style="{
            opacity: 0.3,
            transform: `rotate(${compass}deg)`
          }"
        />
        <img
          v-if="!popupImage"
          :src="require('@/assets/arrow.png')"
          class="compassloc"
          :style="{
            transform: `rotate(${compass + dir}deg)`
          }"
        />
        <!-- compass -->
        <img :src="popupImage" v-if="popupImage" class="imageloc" />

        <div class="distance" v-if="!popupImage">
          {{ distance }} m <br />
          <i style="font-size: small"
            >{{ Math.floor(accuracy) }} m nauwkeurig</i
          >
        </div>

        <div class="answer" v-if="!popupImage && !isCheckpoint">
          <div v-if="index < numRiddles - 1 && closeEnough">
            {{ currentQuestion }} <br />
            <b-form-input
              type="text"
              v-model="answer"
              placeholder="jou antwoord"
            />
            <b-button @click="checkAnswer">OK</b-button><br />
            {{ message }}
          </div>
          <p v-else-if="index >= numRiddles - 1">
            Je bent er bijna, ga naar het laatste punt en vind de schat.
          </p>
        </div>
        <b-button
          variant="outline-primary"
          @click="restart"
          style="position: fixed; right: 0%; bottom: 0%"
        >
          Restart
        </b-button>
        <b-button
          variant="outline-primary"
          @click="openMaps"
          style="position: fixed; left: 0%; bottom: 0%"
          v-if="replay"
        >
          Maps
        </b-button>
      </div>
      <div v-else-if="name === 'debug'">
        <div
          :style="{
            position: 'fixed',
            width: '100%',
            fontSize: 'large',
            bottom: '30%'
          }"
        >
          latitude: {{ lat }} <br />
          longitude: {{ lon }} <br />
          naam: <input type="text" v-model="qname" placeholder="name" /><br />
          vraag:
          <input type="text" v-model="question" placeholder="question" /><br />
          antwoord:
          <input
            type="text"
            v-model="answer"
            placeholder="jou antwoord"
          /><br /><br />
          <i style="font-size: small">{{ Math.floor(accuracy) }} m nauwkeurig</i
          ><br />
          <button @click="copyToClipboard">COPY</button><br />
        </div>
      </div>
      <div v-else>
        <div class="errorling">Onbekende link</div>
      </div>
    </div>
    <div v-else style="position: fixed; width: 100%; top: 30%;">
      Zet je geluid aan voor extra effect!<br />
      Ben je er klaar voor?
      <br />
      <b-button @click="startTheGame" variant="success">KLAAR !</b-button><br />
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import Vue from "vue";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import { headingDistanceTo } from "geolocation-utils";
import { getConfig, TreasureConfig, Riddle } from "@/configs";
import VueUid from 'vue-uid';
import db from '@/classes/firebase'
import Cookies from "js-cookie";
const accents = require('remove-accents');

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './Home.scss'

Vue.use(VueUid);

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

export default Vue.extend({
  name: "Game",
  data: () => ({
    lat: 0,
    lon: 0,
    started: false,
    compass: 0,
    absolute: false,
    dir: 0,
    distance: 0,
    index: 0,
    accuracy: 0,
    thumb: false,
    sad: false,
    answer: "",
    message: "",
    question: "",
    name: "",
    qname: "",
    time: 0,
    timeCloseEnough: 0,
    replay: false,
    config: null as null | TreasureConfig,
  }),
  mounted() {
    navigator.geolocation.watchPosition(this.updatePosition, this.geofailure, {
      enableHighAccuracy: true,
      maximumAge: 30000,
      timeout: 20000,
    });
    setInterval(() => {
      this.time += 1;
      if (this.closeEnough) {
        this.timeCloseEnough += 1;
      }
    }, 1000);
    const level: string | undefined = Cookies.get("level");
    if (level) {
      this.index = parseInt(level);
    }
    if (this.$route.query.name) {
      const name = "" + this.$route.query.name;
      this.replay = this.$route.query.replay === 'true';
      this.config = getConfig(name);
      if (this.config !== null) {
        this.name = this.config.name;
      }
      if (name === "debug") {
        this.name = "debug";
      }
    }
    if (this.replay) {
      setTimeout(() => {
        if (this.config !== null) {
          this.config.minDistance = 20000
        }
      }, 10000)
    }
    this.log('start')
  },
  watch: {
    closeEnough(newVal: boolean) {
      if (newVal && this.isCheckpoint) {
        this.checkAnswer()
      }
      if (newVal) {
        this.log('in de buurt van volgend waypoint')
      }
    },
    index() {
      this.log('naar een nieuw waypoint')
      this.timeCloseEnough = 0
      if (this.config !== null && this.replay) {
        this.config.minDistance = 20
        setTimeout(() => {
          if (this.config !== null) {
            this.config.minDistance = 20000
          }
        }, 5000)
      }
    }
  },
  computed: {
    currentRiddle(): Riddle | undefined {
      if (this.config) {
        return this.config.riddles[this.index];
      }
      return undefined;
    },
    nextHint(): string {
      if (this.currentRiddle === undefined || this.currentRiddle.hints === undefined) {
        return ''
      }
      let timeleft = 3600
      for (const hint of this.currentRiddle.hints) {
        const hinttimeleft = hint.timeout - this.timeCloseEnough
        if (hinttimeleft > 0 && hinttimeleft < timeleft) {
          timeleft = hinttimeleft
        }
      }
      if (timeleft === 3600) {
        return ''
      }
      const minutes = Math.floor(timeleft / 60)
      const seconds = timeleft - minutes * 60
      if (seconds < 10) {
        return `${minutes}:0${seconds}`
      }
      return `${minutes}:${seconds}`
    },
    availableHints(): string[] {
      if (this.currentRiddle === undefined || this.currentRiddle.hints === undefined) {
        return []
      }
      const hints: string[] = []
      for (const hint of this.currentRiddle.hints) {
        const hinttimeleft = hint.timeout - this.timeCloseEnough
        if (hinttimeleft < 0 || this.replay) {
          hints.push(hint.text)
        }
      }
      return hints
    },
    hintsAvailable() : boolean {
      return this.closeEnough && this.currentRiddle !== undefined && this.currentRiddle.hints !== undefined && !this.popupImage
    },
    popupImage(): string {
      if (this.sad) {
        if (this.currentRiddle && this.currentRiddle.wrongImage) {
          return this.currentRiddle.wrongImage;
        }
        return require("@/assets/sad.png");
      }
      if (this.thumb) {
        if (this.currentRiddle && this.currentRiddle.correctImage) {
          return this.currentRiddle.correctImage;
        }
        return require("@/assets/thumbsup.png");
      }
      if (this.config && this.config.startPopup && this.time < 8) {
        return this.config.startPopup;
      }
      return "";
    },
    target(): number[] {
      if (this.config === null) {
        return [0, 0];
      }
      return [
        this.config.riddles[this.index].latitude,
        this.config.riddles[this.index].longitude,
      ];
    },
    currentQuestion(): string {
      if (this.config === null) {
        return "";
      }
      const q = this.config.riddles[this.index].question;
      if (q === "") {
        return "Vind de puzzel en los hem op";
      }
      return q;
    },
    numRiddles(): number {
      if (this.config === null) {
        return 0;
      }
      return this.config.riddles.length;
    },
    closeEnough(): boolean {
      if (this.config === null) {
        return false;
      }
      const minDist = this.config.minDistance || 80;
      return this.distance < minDist;
    },
    isCheckpoint(): boolean {
      if (this.currentRiddle && this.currentRiddle.checkpoint) {
        return true;
      }
      return false;
    },
    audioUrl (): string {
      if (this.config && this.config.introAudio && this.index === 0) {
        return this.config.introAudio;
      }
      if (this.currentRiddle && this.currentRiddle.closeAudio && this.closeEnough) {
        return this.currentRiddle.closeAudio
      }
      return ''
    },
    backgroundStyle(): Partial<CSSStyleDeclaration> {
      let background = require("@/assets/background.jpg");
      if (
        this.closeEnough &&
        this.currentRiddle &&
        this.currentRiddle.closeImage
      ) {
        background = this.currentRiddle.closeImage;
      } else if (this.currentRiddle && this.currentRiddle.backgroundImage) {
        background = this.currentRiddle.backgroundImage;
      }
      return {
        backgroundImage: `url(${background})`,
      };
    },
    mapsLink(): string {
      if (this.config === null) {
        return ''
      }
      let link = 'https://www.google.be/maps/dir/'
      this.config.riddles.forEach(riddle => {
        link += riddle.latitude + ',' + riddle.longitude + '/'
      })
      link += '@50.7607571,5.4540458,15.75z/data=!4m2!4m1!3e2'
      return link
    }
  },
  methods: {
    checkAnswer(): void {
      if (this.config === null) {
        return;
      }
      let answer = this.answer.toLowerCase();
      answer = answer.trim();
      answer = accents.remove(answer);
      if (this.isCheckpoint || this.config.riddles[this.index].answer === answer) {
        this.message = "Proficiat, het is je gelukt";
        this.thumb = true;
        setTimeout(() => {
          this.message = "";
          this.answer = "";
          this.thumb = false;
          this.index++;
          Cookies.set("level", "" + this.index);
        }, 10000);
      } else {
        this.message = "Helaas, dit is niet juist";
        this.sad = true;
        setTimeout(() => {
          this.message = "";
          this.sad = false;
        }, 5000);
      }
    },
    updatePosition(event: any) {
      this.lat = event.coords.latitude;
      this.lon = event.coords.longitude;
      this.accuracy = event.coords.accuracy;
      this.compass = -event.coords.heading % 360;
      const heading = headingDistanceTo(
        { lat: this.lat, lon: this.lon },
        { lat: this.target[0], lon: this.target[1] }
      );
      this.dir = heading.heading;
      this.distance = Math.floor(heading.distance);
    },
    updateOrientation(event: any) {
      this.absolute = event.absolute;
      this.dir = event.alpha;
    },
    geofailure(event: any) {
      console.log("GEO failure ", event);
    },
    restart() {
      let r = confirm("Wil je opnieuw beginnen?");
      if (r == true) {
        Cookies.set("level", "0");
        this.index = 0;
        this.time = 0;
      }
    },
    log (message: string) {
      console.log(message)
      if (typeof this.$route.query.name === 'string') {
        const timestamp = '' + (new Date()).getTime()
        db.collection('history').doc(this.$route.query.name).set({ points: {
          [timestamp]: {
            wp: this.index,
            lat: this.lat,
            lon: this.lon,
            message
          }
        }}, { merge: true })
      }

    },
    copyToClipboard() {
      const el = document.createElement("textarea");
      el.value = "{\n";
      el.value += ` name: "${this.qname}",\n`;
      el.value += ` question: "${this.question}",\n`;
      el.value += ` answer: "${this.answer}",\n`;
      el.value += ` latitude: ${this.lat},\n`;
      el.value += ` longitude: ${this.lon}\n`;
      el.value += "}";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    },
    openMaps () {
      window.open(this.mapsLink, '_blank')
    },
    startTheGame () {
      console.log('Starting')
      this.started = true;
      this.time = 0;
    }
  },
});
</script>

<style></style>
