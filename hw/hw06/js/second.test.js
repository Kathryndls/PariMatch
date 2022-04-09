const redCirclePromise = require("./second.test");
const blueCirclePromise = require("./second.test");
const greenCirclePromise = require("./second.test");

describe('Testing Promises', () => {
  test('should exist', () => {
    expect(redCirclePromise).toBeDefined();
    expect(blueCirclePromise).toBeDefined();
    expect(greenCirclePromise).toBeDefined();
  });

  test('should to be typeof object', () => {
    expect(typeof redCirclePromise).toBe('object');
    expect(typeof blueCirclePromise).toBe('object');
    expect(typeof greenCirclePromise).toBe('object');
  });

  // test('resolve should to equal "Red circle works!"', () => {
  //   return new Promise((res, rej) => {
  //     redCirclePromise
  //       .then(resolve => {
  //         expect(resolve).toEqual('Red circle works!');
  //       })
  //   })
  // });

  // test('promise should have method then', () => {
  //   expect(redCirclePromise.then).toBeDefined();
  //   expect(blueCirclePromise.then).toBeDefined()
  //   expect(greenCirclePromise.then).toBeDefined()
  // });

  // test('promise should have method catch', () => {
  //   expect(redCirclePromise.catch).toBeDefined()
  //   expect(blueCirclePromise.catch).toBeDefined()
  //   expect(greenCirclePromise.catch).toBeDefined()
  // });
});