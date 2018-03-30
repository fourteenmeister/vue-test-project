<template>
  <div class="resultWrapper">
    <div class="result" v-if="isValid()">
      <div class="operator">
        <span>{{ operator }}</span>
      </div>
      <div class="wrapper">
        <div>{{ numeral }}</div>
        <div class="divider"></div>
        <div>{{ significant }}</div>
      </div>
    </div>
    <span v-else>All fields are required</span>
  </div>
</template>

<script>

import { TYPE_FRACTION } from '../store';
import * as Fraction from 'fraction.js';

export default {
  name: 'Result',
  computed: {
    items() {
      return this.$store.state.items;
    },
    numeral() {
      const fraction = this.result;
      return Math.abs(fraction.s * fraction.n);
    },
    significant() {
      return Math.abs(+this.result.d);
    },
    operator() {
      const fraction = this.result;
      return fraction.s < 0 ? '–' : '';
    },
    result() {
      if (!this.isValid()) return null;
      const { items } = this.$store.state;
      let formula = '';
      items.every((item) => {
        if (item.type === TYPE_FRACTION) {
          formula += `(${item.value.numeral}/${item.value.significant})`;
        } else {
          formula += item.value;
        }
        return true;
      });
      return new Fraction(eval(formula));
    },
  },
  methods: {
    isValid() {
      return this.items.filter(item => {
        return item.type === TYPE_FRACTION && !item.value.valid;
      }).length === 0;
    },
  },
};
</script>

<style scoped>
  .resultWrapper {
    background: beige;
    padding: 10px;
    border: 2px solid #c1c1c1;
    border-radius: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
  }

  .result {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
  }

  .wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-left: 15px;
  }

  .divider {
    border: 1px solid #818181;
    height: 1px;
    width: calc(100% + 10px);
    box-sizing: border-box;
  }

  .operator {
    height: 26px;
  }
</style>
