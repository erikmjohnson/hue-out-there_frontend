import superagent from 'superagent';


export const updateLight = (lightId, status) => {
  return {
    type: 'UPDATE_LIGHT',
    payload: {
      lightId,
      status
    }
  }
};

const API_URL = 'http://localhost:3001/';

export const light = (id, command) => store => {
  return superagent.get(`${API_URL}${LIGHT}${id}/${command}`)
      .then((results) => {
        // return store.dispatch(
        //     updateLight(
        //         id,
        //         true
        //     )
        // )
        console.log(results);
      })
      .catch(err => console.log(err));
};
