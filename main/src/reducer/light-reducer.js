const initialState = [];

export default (state = initialState, {type, payload}) => {

  // const light = payload;

  switch(type) {
    case 'UPDATE_LIGHT':
      return [...state, payload];
    default:
      return state;
  }
};
