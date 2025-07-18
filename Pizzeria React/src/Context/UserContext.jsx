
import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(false); // Simulando un usuario autenticado

  const login = () => setToken(true);
  const logout = () => setToken(false);

  return (
    <UserContext.Provider value={{ token, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContext;