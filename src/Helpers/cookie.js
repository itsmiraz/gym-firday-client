import Cookies from 'js-cookie';

export const setTokenCookie = (token) => {
  Cookies.set('jwtToken', token, { expires: 7 }); // Set the token with a 7-day expiration (modify as needed)
};

export const getTokenCookie = () => {
  return Cookies.get('jwtToken');
};

export const removeTokenCookie = () => {
  Cookies.remove('jwtToken');
};
