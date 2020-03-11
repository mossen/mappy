<template>
  <transition name="fade">
    <b-nav vertical class="col-3 bg-dark">
      <TheAutoComplete />

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

export default {
  name: "TheSidebar",
  components: {
    TheAutoComplete
  }
};
</script>

<style lang="scss" scoped>
.nav {
  padding: 0.5rem;
}
</style>
