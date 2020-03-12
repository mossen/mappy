<template>
  <div ref="searchBox" class="d-flex flex-column">
    <b-input-group class="mt-3">
      <template v-slot:append>
        <b-input-group-text><b-icon icon="search"/></b-input-group-text>
      </template>
      <b-form-input
        v-model="keyword"
        type="text"
        class="form-control"
        :placeholder="placeholder"
        autocomplete="off"
        @input="search"
      />
    </b-input-group>

    <div v-if="!hideResults && options.length > 0" class="results">
      <p
        v-for="(result, key) in options"
        :key="key"
        class="result"
        @click="handleAddItem(result, 'addItem')"
      >
        <span class="result-fields">
          <span>
            {{ result.properties.project.Address }}
          </span>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
// import { replace } from "lodash";

export default {
  name: "TheAutoComplete",
  props: {
    label: { default: null, type: [Node, String] },
    options: { default: null, type: [Object, Array] },
    placeholder: null
  },
  data() {
    return {
      source: null,
      sizes: ["Small", "Medium", "Large", "Extra Large"],
      results: { ...this.options },
      hideResults: true,
      keyword: ""
    };
  },
  created() {
    document.addEventListener("click", this.outsideClicked, false);
  },
  destroyed() {
    document.removeEventListener("click", this.outsideClicked);
  },
  methods: {
    handleChange(value) {
      this.$store.commit({
        type: "handelAutoCompleteChange",
        value
      });
    },
    outsideClicked(e) {
      const el = this.$refs.searchBox;
      const target = e.target;
      if (el !== target && !el.contains(target)) {
        // this.clear();
      }
    },
    handleAddItem(result) {
      this.result = result;
    },
    search() {
      console.log("search", this.keyword);
    }
  }
};
</script>

<style lang="scss" scoped>
.results {
  max-height: 300px;
  overflow: scroll;
  background: gray;
  font-size: 11px;
}
</style>
