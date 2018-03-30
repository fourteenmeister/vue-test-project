<template>
  <div>
    <div class="buttonsWrapper">
      <button @click="ADD_FRACTION">Add Fraction</button>
      <button @click="CLEAR_FRACTIONS">Clear</button>
    </div>
    <div class="fractionsWrapper">
      <template v-for="(item, key) in items">
        <Fraction
                v-if="isFraction(item.type)"
                :key="item.id"
                :data="getFraction(item, key)"/>
        <Operator
                v-else
                :index="key"
                :key="item.id"
                :selected="item.value"/>
      </template>
    </div>
    <div>
      <Result/>
    </div>
  </div>
</template>

<script>

  import Fraction from '../components/Fraction';
  import Operator from '../components/Operator';
  import Result from '../components/Result';
  import { mapMutations } from 'vuex';
  import { TYPE_FRACTION } from '../store';

  export default {
    name: 'calcView',
    components: {
      Fraction,
      Operator,
      Result,
    },
    computed: {
      items() {
        return this.$store.state.items;
      },
    },
    methods: {
      getFraction(item, index) {
        return {
          index,
          numeral: item.value.numeral,
          significant: item.value.significant,
          valid: item.value.valid,
        };
      },
      ...mapMutations([
        'ADD_FRACTION',
        'CLEAR_FRACTIONS'
      ]),
      isFraction(type) {
        return type === TYPE_FRACTION;
      },
    }
  };
</script>


<style scoped>

  .buttonsWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 10px;
    border-bottom: 1px solid #c1c1c1;
    margin: 10px;
  }

  .fractionsWrapper {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
  }

</style>
