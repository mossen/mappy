<template>
  <div class="home flex-fill">
    <TheMap :geoJson="geoJson" />
  </div>
</template>

<script>
import TheMap from "@/components/TheMap";
import GEO_JSON from "@/data/GeoJson";

export default {
  name: "App",
  components: {
    TheMap
  },
  data() {
    return {
      geoJson: GEO_JSON
    };
  }
};
</script>
