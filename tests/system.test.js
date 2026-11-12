const { SystemManager } = require('../src/core/system');

test('System Manager exists', () => {
  const sm = new SystemManager();
  expect(sm).toBeDefined();
});