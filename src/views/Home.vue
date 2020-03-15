<template>
  <div class="home flex-fill">
    <TheMap :features="$store.state.features" />
  </div>
</template>

<script>
import TheMap from "@/components/TheMap";

export default {
  name: "App",
  components: {
    TheMap
  },
};
</script>
