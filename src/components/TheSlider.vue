<template>
  <div class="mb-1">
    <label v-if="label" class="d-flex text-white">{{ label }}</label>
    <VueSlider v-model="value" v-bind="options" class="mx-2" />
  </div>
</template>

<script>
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";

export default {
  name: "TheSidebar",
  components: {
    VueSlider
  },
  props: {
    label: { default: null, type: String },
    options: {
      default: () => ({
        min: 0,
        max: 9999999
      }),
      type: Object
    },
    initialValue: {
      default: 9999999,
      type: Number
    },
    commitName: { default: null, type: String },
    placeholder: { default: null, type: String }
  },
  watch: {
    // Call the function only on the last change
    value: function(value, oldValue) {
      if (value != oldValue) {
        const lastValue = this.value;

        setTimeout(() => {
          if (lastValue == this.value) this.handleChange();
        }, 800);
      }
    }
  },
  data() {
    return {
      value: this.initialValue
    };
  },
  methods: {
    handleChange() {
      this.$store.commit(this.commitName, this.value);
    }
  }
};
</script>
