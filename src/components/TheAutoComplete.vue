<template>
  <label>
    {{ label }}
    <b-form-input list="my-list-id" v-model="value" @input="handleChange" />
    <datalist id="my-list-id">
      <option v-for="(size, key) in sizes" :key="key">{{ size }}</option>
    </datalist>
  </label>
</template>

<script>
export default {
  props: {
    label: { default: null, type: [Node, String] },
    options: { default: null, type: Object }
  },
  data() {
    return {
      value: null,
      sizes: ["Small", "Medium", "Large", "Extra Large"]
    };
  },
  methods: {
    handleChange(e) {
        console.log('d', e, this.sizes);
    }
  }
};
</script>
