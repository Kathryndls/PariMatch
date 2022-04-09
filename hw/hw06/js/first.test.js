const EventBus = require("./first");

describe('Testing Promises', () => {
  let eventBusInstance;

  beforeEach(() => {
    eventBusInstance = new EventBus();
  })

  test('should exist', () => {
    expect(EventBus).toBeDefined();
  });

  test('should to be typeof object', () => {
    expect(typeof EventBus).toBe('function');
  });

  test('should have methods on and emit', () => {
    expect(eventBusInstance.on).toBeDefined();
    expect(eventBusInstance.emit).toBeDefined();
  });

  test('should have methods - type function and listeners - object', () => {
    expect(typeof eventBusInstance.on).toBe('function');
    expect(typeof eventBusInstance.emit).toBe('function');
    expect(typeof eventBusInstance.listeners).toBe('object');
  });

  test('method on should work correctly', () => {
    const eventMock = 'event';
    const cbMock = jest.fn();

    eventBusInstance.on(eventMock, cbMock);
    expect(eventBusInstance.listeners[eventMock]).toEqual([cbMock]);
  });

  test('method emit should work correctly', () => {
    const eventMock = 'event';
    const cbMock = jest.fn();

    eventBusInstance.emit(eventMock);
    expect(cbMock).toHaveBeenCalledTimes(0);
  });
});