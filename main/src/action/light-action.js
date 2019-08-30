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

// export const allLights = (command) => store => {
//   return superagent.get(`${API_URL}${GROUP}${command}`)
//       .then()
//       .catch(err => console.log(err));
// };

export const light = () => store => {
  return superagent.get(`${API_URL}status`)
    .then(results => {
      return results.body.forEach(current =>
        store.dispatch(
          updateLight(
            current.id,
            current.status
          )
        )
      )
    })
    .catch(err => console.log(err));
};
