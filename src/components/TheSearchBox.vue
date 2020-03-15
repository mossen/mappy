<template>
  <div ref="searchBox" class="d-flex flex-column">
    <label v-if="label" class="text-white">{{ label }}</label>
    <b-input-group>
      <template v-slot:append>
        <b-input-group-text>
          <b-icon icon="search" />
        </b-input-group-text>
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

    <div v-if="showResults && options.length > 0" class="results">
      <p
        v-for="(result, key) in options"
        :key="key"
        class="result"
        @click="handleSelectItem(result)"
      >
        <span class="result-fields">
          <span class="d-flex">
            {{ result.properties.project.Title }}
          </span>
          <!-- eslint-disable-next-line prettier/prettier -->
          <span v-html="result.properties.project.BoldedText || result.properties.project.Address" />
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheSearchBox",
  props: {
    placeholder: { default: null, type: String },
    label: { default: null, type: [Node, String] },
    options: { default: null, type: [Object, Array] },
    commitName: { default: null, type: String }
  },
  data() {
    return {
      showResults: false,
      keyword: ""
    };
  },
  created() {
    // Hide results when input is empty and clicked away
    document.addEventListener("click", this.outsideClicked, false);
  },
  destroyed() {
    document.removeEventListener("click", this.outsideClicked);
  },
  methods: {
    outsideClicked(e) {
      const el = this.$refs.searchBox;

      const target = e.target;
      if (el !== target && !el.contains(target)) {
        this.showResults = false;
      }
    },
    handleSelectItem(result) {
      this.keyword = result.properties.project.Address;
      this.search(false);
    },
    search(showResults = true) {
      this.showResults = showResults;
      this.$store.commit(this.commitName, this.keyword);
    }
  }
};
</script>

<style lang="scss" scoped>
.results {
  max-height: 300px;
  overflow: scroll;
  background: white;
  font-size: 11px;

  .result {
    padding: 5px;

    &:hover {
      cursor: pointer;
    }
  }
}
</style>
