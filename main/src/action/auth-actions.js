import superagent from 'superagent';

export const set = token => ({
  type: 'TOKEN_SET',
  payload: token,
});

export const remove = () => ({
  type:'TOKEN_REMOVE',
});

const API_URL = 'http://localhost:3001/';
const SIGNUP_ROUTE = 'signup';
const SIGNIN_ROUTE = 'signin';

export const signupRequest = user => store => {
  return superagent.post(`${API_URL}${SIGNUP_ROUTE}`)
    .send(user)
    .then(response => {
      return store.dispatch(set(response.text));
    }).catch(console.log);
};

export const signinRequest = (username, password) => store => {
  return superagent.post(`${API_URL}${SIGNIN_ROUTE}`)
    .auth(username, password)
    .then(response => {
      return store.dispatch(set(response.text));
    }).catch(console.log);
};
