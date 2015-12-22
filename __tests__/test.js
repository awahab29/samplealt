// __tests__/sum-test.js
jest.dontMock('../src/js/stores/TestStore');

describe('TestStore', function() {
 it('adds 2 to given number', function() {
   var store = require('../src/js/stores/TestStore');
   expect(store.makeSquare(3)).toBe(9);
 });
});