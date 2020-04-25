<template>
  <div id="app" class="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import Vue from "vue";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VueLayers from 'vuelayers';
import 'vuelayers/lib/style.css' // needs css-loader


Vue.use(VueLayers)

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

export default Vue.extend({
  name: "App"
});
</script>

<style></style>
