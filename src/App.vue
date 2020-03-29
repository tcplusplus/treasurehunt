<template>
  <div id="app">
    <div
      :style="{
        backgroundImage: 'url(' + require('@/assets/background.jpg') + ')',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',
        top: '0%',
        left: '0%',
        position: 'fixed',
        opacity: 0.2
      }"
    />
    <div
      :style="{
        position: 'fixed',
        width: '100%',
        fontSize: 'xx-large',
        top: '5%'
      }"
    >
      Ga naar punt {{ index + 1 }}
    </div>

    <img
      v-if="!sad && !thumb"
      :src="require('@/assets/compass.png')"
      class="imageloc"
      :style="{
        opacity: 0.3,
        transform: `rotate(${compass}deg)`
      }"
    />

    <img
      v-if="!sad && !thumb"
      :src="require('@/assets/arrow.png')"
      class="imageloc"
      :style="{
        transform: `rotate(${compass + dir}deg)`
      }"
    />

    <img
      :src="require('@/assets/thumbsup.png')"
      v-if="thumb"
      class="imageloc"
    />
    <img :src="require('@/assets/sad.png')" v-if="sad" class="imageloc" />

    <div
      :style="{
        position: 'fixed',
        width: '100%',
        fontSize: 'xx-large',
        bottom: '30%'
      }"
    >
      {{ distance }} m <br>
      <i style="font-size: small">{{ Math.floor(accuracy) }} m nauwkeurig</i>
    </div>

    <div
      :style="{
        position: 'fixed',
        width: '100%',
        fontSize: 'larger',
        bottom: '15%'
      }"
    >
      <div v-if="index < numRiddles - 1">
        Vind de puzzel en los hem op:<br />
        <input type="text" v-model="answer" placeholder="jou antwoord" /><br />
        <button @click="checkAnswer">OK</button><br />
        {{ message }}
      </div>
      <p v-else>
        Je bent er bijna, ga naar het laatste punt en vind de schat.
      </p>
    </div>
    <button @click="restart" style="position: fixed; right: 0%; bottom: 0%">
      Restart
    </button>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import Vue from "vue"
import { headingDistanceTo } from 'geolocation-utils'
import config from '@/configs/kirsten'
import Cookies from 'js-cookie'

export default Vue.extend({
  name: "App",
  data: () => ({
    lat: 0,
    lon: 0,
    compass: 0,
    absolute: false,
    dir: 0,
    distance: 0,
    index: 0,
    accuracy: 0,
    thumb: false,
    sad: false,
    answer: '',
    message: ''
  }),
  mounted() {
    navigator.geolocation.watchPosition(
        this.updatePosition,
        this.geofailure,
        {
            enableHighAccuracy: true,
            maximumAge: 30000,
            timeout: 20000
        }
    );
    const level: string | undefined = Cookies.get('level')
    if (level) {
      this.index = parseInt(level)
    }
  },
  computed: {
    target(): number[] {
      return [config.riddles[this.index].latutide, config.riddles[this.index].longitude]
    },
    numRiddles(): number {
      return config.riddles.length
    }
  },
  methods: {
    checkAnswer () {
      if (config.riddles[this.index].answer === this.answer.toLowerCase()) {
        this.message = 'Proficiat, het is je gelukt'
        this.thumb = true
        setTimeout(() => {
          this.message = ''
          this.answer = ''
          this.thumb = false
          this.index++
          Cookies.set('level', '' + this.index)
        }, 5000)
      } else {
        this.message = 'Helaas, dit is niet juist';
        this.sad = true
        setTimeout(() => {
          this.message = ''
          this.sad = false
        }, 5000)
      }
    },
    updatePosition (event: any) {
      this.lat = event.coords.latitude
      this.lon = event.coords.longitude
      this.accuracy = event.coords.accuracy
      this.compass = (-event.coords.heading) % 360
      const heading = headingDistanceTo({ lat: this.lat, lon: this.lon}, { lat: this.target[0], lon: this.target[1] })
      this.dir = heading.heading
      this.distance = Math.floor(heading.distance)
    },
    updateOrientation(event: any) {
      this.absolute = event.absolute
      this.dir = event.alpha
    },
    geofailure(event: any) {
      console.log('GEO failure ', event)
    },
    restart() {
      let r = confirm("Wil je opnieuw beginnen?");
      if (r == true) {
        Cookies.set('level', '0')
        this.index = 0
      }
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.imageloc {
  width: 80%;
  left: 10%;
  top: 15%;
  position: fixed;
}
</style>
