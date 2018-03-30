<template>
  <div class="fractionWrapper">
    <div v-if="remove" class="remove" title="удалить дробь" @click="REMOVE_FRACTION(data.index)">×</div>
    <div>
      <div class="inputWrapper">
        <input
                name="numeral"
                placeholder="enter the number"
                @input="handleChange"
                @keypress.46.prevent
                @keypress.32.prevent
                :invalid="isNaN(data.numeral)"
                :value="data.numeral"/>
      </div>
      <div class="divider"></div>
      <div class="inputWrapper">
        <input
              name="significant"
              placeholder="enter the number"
              @input="handleChange"
              @keypress.46.prevent
              @keypress.32.prevent
              :invalid="isNaN(data.significant)"
              :value="data.significant"/>
      </div>
    </div>
  </div>
</template>

<script>

import Operator from './Operator.vue';
import Result from './Result.vue';
import { mapMutations } from 'vuex';

export default {
  name: 'Fraction',
  components: {
    Operator,
    Result,
  },
  computed: {
    remove() {
      return this.$store.state.items.length > 3;
    },
    numeral() {
      return {
        value: this.data.numeral,
      };
    },
    significant() {
      return {
        value: this.data.significant,
      };
    }
  },
  methods: {
    handleChange(e) {
      const value = e.target.value;
      const name = e.target.name;
      const { data } = this;
      data[name] = value;
      const { index, numeral, significant } = data;
      const valid = numeral !== '' && significant !== '' && !isNaN(numeral) && !isNaN(significant);
      this.CHANGE_FRACTION({
        index,
        value: {
          [name]: value,
          valid,
        },
      });
    },
    ...mapMutations([
      'CHANGE_FRACTION',
      'REMOVE_FRACTION',
    ]),
  },
  props: {
    data: {
      index: Number,
      numeral: String,
      significant: String,
      valid: Boolean,
    },
  },
};

</script>

<style scoped>
  .fractionWrapper {
    position: relative;
    display: flex;
    align-items: center;
    flex-basis: 100px;
    flex-shrink: 0;
  }
  .remove {
    display: none;
    position: absolute;
    right: -10px;
    top: 0;
    cursor: pointer;
  }
  .fractionWrapper:hover .remove {
    display: block;
  }
  .inputWrapper {
    margin: 2px;
  }
  .divider {
    border-bottom: 2px solid #e8e8e8;
    margin-bottom: 4px;
    margin-top: 4px;
  }
</style>
<style>
  input {
    width: 100%;
    padding: 4px;
    box-sizing: border-box;
    border: 1px solid #c1c1c1;
    border-radius: 2px;
  }

  input::placeholder {
    font-size: 11px;
    color: #dadada;
    text-align: center;
  }
  input:focus::placeholder {
    opacity: 0;
  }
  input[invalid] {
    border-color: #ff000a;
    box-shadow: 0 0 1px #ff000a;
  }
  input[invalid]:focus {
    box-shadow: none;
    outline: none;
  }
</style>
