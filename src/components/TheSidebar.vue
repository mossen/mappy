<template>
  <transition name="fade">
    <b-nav vertical class="col-3 bg-dark">
      <b-nav-item active>Active</b-nav-item>
      <b-nav-item>Link</b-nav-item>
      <b-nav-item>Another Link</b-nav-item>
      <b-nav-item disabled>Disabled</b-nav-item>

      <b-list-group-item>
        <router-link to="/">Home</router-link>
      </b-list-group-item>
      <b-list-group-item>
        <router-link to="/about">About</router-link>
      </b-list-group-item>
    </b-nav>
  </transition>
</template>

<script>
export default {
  name: "TheSidebar"
};
</script>
