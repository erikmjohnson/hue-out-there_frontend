export default (state = [], { type, payload }) => {

  switch(type) {
    case 'UPDATE_LIGHT':
      return [...state, payload];
    default:
      return state;
  }
};
