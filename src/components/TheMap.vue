<template>
  <div id="map" />
</template>

<script>
import MapBoxgl from "mapbox-gl";

export default {
  name: "TheMap",
  props: { features: { default: null, type: Array } },
  computed: {
    center: function() {
      // Set the first feature's coordinate as center
      if (this.features) {
        return this.features[0].geometry.coordinates;
      }

      return [0, 0];
    }
  },
  watch: {
    features: function() {
      this.setMap();
    }
  },
  mounted() {
    this.initiateMap();
  },
  methods: {
    initiateMap() {
      MapBoxgl.accessToken = process.env.VUE_APP_MAPBOX_TOKEN;
      this.map = new MapBoxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: this.center,
        zoom: 13
      });

      const geoJson = {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: this.features
        }
      };

      this.map.on("load", () => {
        this.map.addSource("points", geoJson);
        this.map.addLayer({
          id: "layer-id",
          type: "circle",
          source: "points",
          paint: {
            "circle-radius": 6,
            "circle-color": ["get", "color"]
          },
          filter: ["==", "$type", "Point"]
        });
      });

      this.map.on("click", event => {
        const features = this.map.queryRenderedFeatures(event.point, {
          layers: ["layer-id"]
        });

        if (!features.length) {
          return;
        }

        const feature = features[0];
        // Library converts this nested "project" to string
        const project = JSON.parse(feature.properties.project);

        new MapBoxgl.Popup({ offset: [0, 0] })
          .setLngLat(feature.geometry.coordinates)
          .setHTML(
            `<p class="font-weight-bold">${project.Title}</p><p>${project.Description}</p>`
          )
          .addTo(this.map);
      });
    },
    setMap() {
      this.map
        .getSource("points")
        .setData({ type: "FeatureCollection", features: this.features });
    }
  }
};
</script>

<style>
.mapboxgl-canvas-container {
  height: 100vh;
}
</style>
