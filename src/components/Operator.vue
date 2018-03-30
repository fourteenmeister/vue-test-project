<template>
  <select
          :value="selected"
          @change="onChange"
          title="select the operator">
    <option value="+">+</option>
    <option value="-">−</option>
    <option value="*">×</option>
    <option value="/">÷</option>
  </select>
</template>

<script>

import { mapMutations } from 'vuex';

export default {
  name: 'Operator',
  methods: {
    onChange(e) {
      const { value } = e.target;
      this.SET_OPERATOR({
        index: this.index,
        operator: value,
      });
    },
    ...mapMutations([
      'SET_OPERATOR',
    ]),
  },
  props: {
    index: Number,
    selected: String,
  },
};
</script>

<style scoped>
  select {
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    line-height: 20px;
    height: 20px;
  }
  option {
    font-size: 15px;
    font-weight: bold;
    text-align: center;
  }
</style>
