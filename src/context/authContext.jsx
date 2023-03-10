import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [userAuth, setUserAuth] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  );

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(userAuth));
  }, [userAuth]);

  const login = () => {
    // TODO: Implement login
    setUserAuth({
      id: 1,
      name: 'John Danny',
      email: 'kenaa@example.com',
      password: '123456',
    });
  };

  return (
    <AuthContext.Provider value={{ userAuth, login }}>
      {children}
    </AuthContext.Provider>
  );
};
