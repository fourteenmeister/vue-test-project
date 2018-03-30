const events = ['onopen', 'onerror', 'onclose', 'onmessage'];

export default {
  install(Vue, connectionUrl, store) {
    this.connectionUrl = connectionUrl;
    this.store = store;
    this.Vue = Vue;
    this.connect();
    Vue.prototype.$socket = this.webSocket;
    this.handleEvents();
  },
  connect() {
    this.webSocket = new WebSocket(this.connectionUrl);
  },
  reconnect() {
    clearTimeout(this.reconnectTimeoutId);
    this.reconnectTimeoutId = setTimeout(() => {
      if (this.store) {
        this.store.commit('SOCKET_RECONNECT');
      }
      this.connect();
      this.handleEvents();
      this.Vue.prototype.$socket = this.webSocket;
    }, 1000);
  },
  handleEvents() {
    if (!this.webSocket) return;
    events.forEach(eventType => {
      this.webSocket[eventType] = (event) => {
        const eventName = `SOCKET_${eventType.toUpperCase()}`;
        if (this.store) {
          this.store.commit(eventName, event.data)
        }
        if (eventType === 'onclose') {
          this.reconnect();
        }
      }
    });
  }
}