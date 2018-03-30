import Vue from 'vue';
import { initialFractions, getItem, TYPE_FRACTION, TYPE_OPERATOR } from '../store';

export const mutations = {
  SOCKET_ONOPEN() {
    console.info('open connection');
  },
  SOCKET_ONCLOSE() {
    console.info('close connection');
  },
  SOCKET_ONERROR(state, event) {
    console.log(event);
  },
  SOCKET_ONMESSAGE(state, requestIndex) {
    const { index: commentIndex } = state.requests[requestIndex];
    state.requests[requestIndex].success = true;
    Vue.set(state.comments[commentIndex], 'removed', true);
  },
  SOCKET_RECONNECT() {
    console.log('trying reconnect');
  },
  ADD_COMMENT(state, text) {
    Vue.set(state.comments, state.comments.length, {
      removed: false,
      text,
    });
  },
  ADD_REQUEST(state, request) {
    state.requests.push(request);
  },
  ADD_FRACTION(state) {
    state.items.unshift(getItem(TYPE_FRACTION), getItem(TYPE_OPERATOR));
  },
  CLEAR_FRACTIONS(state) {
    state.items = initialFractions().items;
  },
  REMOVE_FRACTION(state, index) {
    state.items.splice(index, 2);
  },
  CHANGE_FRACTION(state, payload) {
    const { index, value: newValue } = payload;
    const { value } = state.items[index];
    Vue.set(state.items[index], 'value', { ...value, ...newValue });
  },
  SET_OPERATOR(state, payload) {
    const { index, operator } = payload;
    Vue.set(state.items[index], 'value', operator);
  },
};
