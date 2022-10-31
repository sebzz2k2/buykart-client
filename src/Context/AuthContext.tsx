import React, { createContext, useState } from "react";

type AuthUser = {
  isLoggedin: Boolean;
  userName: String;
};
type AuthContextProviderType = {
  children: React.ReactNode;
};
type AuthContextType = {
  user: AuthUser | null;
  login: (userName: String) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider = ({ children }: AuthContextProviderType) => {
  const [user, setUser] = useState<AuthUser | null>(null);

  const login = (userName: String) => {
    setUser({ isLoggedin: true, userName });
  };
  const logout = () => {
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthContextProvider");
  }
  return context;
};
