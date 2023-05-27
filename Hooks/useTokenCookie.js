import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export const useTokenCookie = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    const cookieToken = Cookies.get('jwtToken');
    if (cookieToken) {
      setToken(cookieToken);
    }
  }, []);

  const setTokenCookie = (newToken) => {
    Cookies.set('jwtToken', newToken, { expires: 7 });
    setToken(newToken);
  };

  const removeTokenCookie = () => {
    Cookies.remove('jwtToken');
    setToken('');
  };

  return [token, setTokenCookie, removeTokenCookie];
};
