<template>
  <div class="wrapper">
    <TheSidebar />

    <router-view />
  </div>
</template>

<script>
import TheSidebar from "@/components/TheSidebar";

export default {
  name: "App",
  components: {
    TheSidebar
  }
};
</script>
