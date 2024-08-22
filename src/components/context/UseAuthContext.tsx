// src/context/AuthContext.tsx
import React, { createContext, useState, useContext, ReactNode } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  displayPut: boolean;
  displayPost: boolean;
  login: () => void;
  logout: () => void;
  register: (email: string, password: string) => void; // Add register function
  displayPutFalse: () => void;
  displayPutTrue: () => void;
  displayPostFalse: () => void;
  displayPostTrue: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return !!localStorage.getItem("accessToken");
  });
  const [displayPut, setDisplayPut] = useState<boolean>(false);
  const [displayPost, setDisplayPost] = useState<boolean>(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("accessToken");
  };

  const register = (email: string, password: string) => {
    const userData = { email, password };
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("authToken", "some-auth-token"); // Fake auth token for demonstration
    login();
  };

  const displayPutFalse = () => {
    setDisplayPut(false);

    console.log("Toggle put bool: ", displayPut);
  };
  const displayPutTrue = () => {
    setDisplayPut(true);
  };
  const displayPostFalse = () => {
    setDisplayPost(false);
  };
  const displayPostTrue = () => {
    setDisplayPost(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        displayPut,
        displayPost,
        login,
        logout,
        register,
        displayPutFalse,
        displayPutTrue,
        displayPostFalse,
        displayPostTrue,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
