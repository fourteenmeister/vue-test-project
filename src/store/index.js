import Vue from 'vue';
import Vuex from 'vuex';
import { mutations } from './mutations';

export const TYPE_FRACTION = 'fraction';
export const TYPE_OPERATOR = 'operator';

export const getItem = (type) => {
  if (type === TYPE_FRACTION) {
    return {
      type: TYPE_FRACTION,
      value: {
        numeral: '',
        significant: '',
        valid: false,
      },
    };
  } else {
    return {
      type: TYPE_OPERATOR,
      value: '+',
    };
  }
};

export const initialFractions = () => {
  return {
    items: [
      getItem(TYPE_FRACTION),
      getItem(TYPE_OPERATOR),
      getItem(TYPE_FRACTION),
    ],
  };
};

export const initialComments = () => {
  return {
    comments: [
      {
        removed: false,
        text: 'Тестовый коммент 1',
      },
      {
        removed: false,
        text: 'Это шедевр',
      },
      {
        removed: false,
        text: 'Это прекрасно',
      },
      {
        removed: false,
        text: 'Лучшее что я видел',
      },
      {
        removed: false,
        text: 'Два чая этому автору',
      },
    ],
  };
};

export const initialRequests = () => {
  return {
    requests: [],
  };
};

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ...initialFractions(),
    ...initialComments(),
    ...initialRequests(),
  },
  mutations,
});
