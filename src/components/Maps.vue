<template>
  <div>
    <vl-map
      :load-tiles-while-animating="true"
      :load-tiles-while-interacting="true"
      data-projection="EPSG:4326"
      style="height: 400px"
    >
      <vl-view
        :zoom.sync="zoom"
        :center.sync="center"
        :rotation.sync="rotation"
      ></vl-view>

      <!-- 
        <vl-geoloc @update:position="geolocPosition = $event">
          <template slot-scope="geoloc">
            <vl-feature v-if="geoloc.position" id="position-feature">
              <vl-geom-point :coordinates="geoloc.position"></vl-geom-point>
              <vl-style-box>
                <vl-style-icon src="https://www.embregts-theunis.com/wp-content/uploads/2016/04/google-maps-marker-for-residencelamontagne-hi-188x300.png" :scale="0.4" :anchor="[0.5, 1]"></vl-style-icon>
              </vl-style-box>
            </vl-feature>
          </template>
        </vl-geoloc>
        -->

      <vl-feature id="point" :properties="{ prop: 'value', prop2: 'value' }">
        <vl-geom-point :coordinates="location"></vl-geom-point>
      </vl-feature>

      <vl-layer-tile id="osm">
        <vl-source-osm></vl-source-osm>
      </vl-layer-tile>
    </vl-map>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Maps",
  props: {
    location: {
      type: Array as () => number[],
      required: true
    }
  },
  data: () => ({
    zoom: 13,
    center: [0, 0],
    rotation: 0,
    geolocPosition: undefined
  }),
  mounted() {
    this.center = this.location;
  },
  watch: {
    location(newVal) {
      this.center = newVal;
    }
  }
});
</script>
