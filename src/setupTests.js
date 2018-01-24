const localStorageMock = {
  getItem: () => {
    return "{}";
  },
  setItem: jest.fn(),
  clear: jest.fn()
};
global.localStorage = localStorageMock;

global.requestAnimationFrame = function(cb) {
  return setTimeout(cb, 0);
};
