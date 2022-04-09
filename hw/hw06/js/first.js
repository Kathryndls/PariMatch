class EventBus {
  constructor() {
    this.listeners = {};
  }

  on(event, listener) {
    this.listeners[event] = this.listeners[event] || [];
    this.listeners[event].push(listener);
  }

  emit(event, data) {
    if (!this.listeners[event]) return;

    for (let listener of this.listeners[event]) {
      listener(data);
    }
  }
}

const eventBus = new EventBus();

eventBus.on('stateUpdated', (state) => {
  console.log('first state listener');
  console.log(state);
});

eventBus.on('stateUpdated', (state) => {
  console.log('second state listener');
  console.log(state);
});

eventBus.on('requestFulfilled', (data) => {
  console.log('first request listener');
  console.log(data);
});

eventBus.on('foo', () => {
  console.log("this message won't be shown");
});

eventBus.emit('stateUpdated', { newState: 'is here' });
eventBus.emit('requestFulfilled', { request: 'data' });
eventBus.emit('bar', { foo: 'bar' });

module.exports = EventBus;