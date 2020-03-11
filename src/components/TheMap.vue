<template>
  <div id="map" />
</template>

<script>
import MapBoxgl from "mapbox-gl";

export default {
  name: "TheMap",
  props: {
    geoJson: { default: null, type: Object }
  },
  computed: {
    center: function() {
      // Set the first coordinate as center
      if (this.geoJson) {
        return this.geoJson.features[0].geometry.coordinates;
      }
      console.log(this.geoJson);
      return [0, 0];
    }
  },
  mounted() {
    this.initiateMap();
  },
  methods: {
    initiateMap() {
      MapBoxgl.accessToken = process.env.VUE_APP_MAPBOX_TOKEN;
      const map = new MapBoxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: this.center,
        zoom: 13
      });

      const geoJson = {
        type: "geojson",
        data: this.geoJson
      };

      map.on("load", function() {
        map.addSource("points", geoJson);
        map.addLayer({
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

      map.on("click", function(e) {
        const features = map.queryRenderedFeatures(e.point, {
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
          .setHTML(`<h3>${project.Title}</h3><p>${project.Description}</p>`)
          .addTo(map);
      });
    }
  }
};
</script>

<style>
.mapboxgl-canvas-container {
  height: 100vh;
}
</style>
