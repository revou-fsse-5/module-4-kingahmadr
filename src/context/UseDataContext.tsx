import React, { createContext, useState, useContext, ReactNode } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  checked?: boolean;
  handleCheckboxChange?: () => void;
}

const DataContext = createContext<AuthContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return !!localStorage.getItem("accessToken");
  });
  const [checked, setChecked] = useState<boolean>(false);
  // const { userLoginData } = useFetchData();
  const handleCheckboxChange = () => {
    setChecked(!checked);
    // localStorage.setItem("email", userLoginData.email);
    localStorage.setItem("key", "remember me");
  };
  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("accessToken");
  };

  return (
    <DataContext.Provider
      value={{
        isAuthenticated,
        checked,
        login,
        logout,
        handleCheckboxChange,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};
