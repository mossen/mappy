<template>
  <transition name="fade">
    <b-nav vertical class="col-3 bg-dark">
      <TheAutoComplete :options="options" label="Search for a location" />

      <b-nav-item>
        <router-link to="/">Home</router-link>
      </b-nav-item>

      <b-list-group-item>
        <router-link to="/about">About</router-link>
      </b-list-group-item>
    </b-nav>
  </transition>
</template>

<script>
import TheAutoComplete from "@/components/TheAutoComplete";
import GEO_JSON from "@/data/GeoJson";

export default {
  name: "TheSidebar",
  components: {
    TheAutoComplete
  },
  data() {
    return {
      options: GEO_JSON.features
    };
  }
};
</script>

<style lang="scss" scoped>
.nav {
  padding: 0.5rem;
}
</style>
