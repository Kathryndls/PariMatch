const renderUser = require('./');
const renderFollower = require('./');
const renderRepos = require('./');
const hideExtraInfo = require('./');
const debounce = require('./');
const getUser = require('./');
const fetchUser = require('./');
const searchUser = require('./');

describe('Testing', () => {
  test('should exist', () => {
    expect(renderUser).toBeDefined();
    expect(renderFollower).toBeDefined();
    expect(renderRepos).toBeDefined();
    expect(hideExtraInfo).toBeDefined();
    expect(debounce).toBeDefined();
    expect(getUser).toBeDefined();
    expect(fetchUser).toBeDefined();
    expect(searchUser).toBeDefined();
  });

  test('should to be typeof object', () => {
    expect(typeof renderUser).toBe('object');
    expect(typeof renderFollower).toBe('object');
    expect(typeof renderRepos).toBe('object');
    expect(typeof hideExtraInfo).toBe('object');
    expect(typeof debounce).toBe('object');
    expect(typeof getUser).toBe('object');
    expect(typeof fetchUser).toBeDefined();
    expect(typeof searchUser).toBe('object');
  });

  // test('test renderRepos', () => {
  //   return renderRepos('https://api.github.com/users/s/repos')
  //     .then(data => {
  //       expect(typeof data).toBe('array');
  //     })
  // })
})