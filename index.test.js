const reversString = require('./index.js');

test('revers string', () => {
  expect(reversString('12345')).toBe('54321');
});