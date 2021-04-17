const existStorage = (storage) => !!localStorage.getItem(storage);
const cleanStorage = (storage) => localStorage.removeItem(storage);
const createStogareState = (storage, state) =>
  localStorage.setItem(storage, state);

export { existStorage, createStogareState, cleanStorage };
