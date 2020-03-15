<template>
  <transition name="fade">
    <b-nav vertical class="col-3 bg-dark">
      <b-list-group-item class="d-flex justify-content-between">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </b-list-group-item>

      <br />

      <div v-if="$route.path === '/'">
        <TheSlider label="Set value" commitName="setValue" />

        <TheSearchBox
          :options="$store.state.features"
          label="Search an address"
          commitName="setKeyword"
        />
      </div>
    </b-nav>
  </transition>
</template>

<script>
import TheSlider from "@/components/TheSlider";
import TheSearchBox from "@/components/TheSearchBox";

export default {
  name: "TheSidebar",
  components: {
    TheSearchBox,
    TheSlider
  },
  mounted() {
    console.log(this.$route);
  }
};
</script>

<style lang="scss" scoped>
.nav {
  padding: 0.5rem;
}
</style>
