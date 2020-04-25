<template>
  <div>
    <Maps :location="[longitude, latitude]" />
    <table border="1">
      <tr>
        <th>Tijd</th>
        <th>Waypoint</th>
        <th>Bericht</th>
      </tr>
      <tr v-for="(point, index) in history" :key="index">
        <td>{{ timeToString(point.timestamp) }}</td>
        <td>{{ point.wp }}</td>
        <td>{{ point.message }}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import db from "@/classes/firebase";
import { HistoryStep } from "@/configs";
import Maps from "@/components/Maps.vue";

export default Vue.extend({
  name: "history",
  data: () => ({
    history: [] as HistoryStep[]
  }),
  mounted() {
    if (typeof this.$route.query.name === "string") {
      db.collection("history")
        .doc(this.$route.query.name)
        .onSnapshot(snap => {
          const data = snap.data();
          if (data) {
            const points = data.points;
            const timestamps = Object.keys(points).sort();
            timestamps.reverse();
            this.history = [];
            for (const timestamp of timestamps) {
              const point = points[timestamp];
              this.history.push({
                timestamp: parseInt(timestamp),
                latitude: point.lat,
                longitude: point.lon,
                wp: point.wp,
                message: point.message
              });
            }
          }
        });
    }
  },
  computed: {
    latitude(): number {
      if (this.history.length > 0) {
        return this.history[0].latitude;
      }
      return 0;
    },
    longitude(): number {
      if (this.history.length > 0) {
        return this.history[0].longitude;
      }
      return 0;
    }
  },
  methods: {
    timeToString(timestamp: number) {
      const date = new Date(timestamp);
      const hours = date.getHours();
      const minutes = "0" + date.getMinutes();
      const seconds = "0" + date.getSeconds();
      return hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
    }
  },
  components: {
    Maps
  }
});
</script>
