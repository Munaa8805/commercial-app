import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    // Simulate API call - in real app, this would call your backend
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email && password) {
          const userData = {
            email,
            name: email.split("@")[0],
          };
          setUser(userData);
          localStorage.setItem("user", JSON.stringify(userData));
          resolve(userData);
        } else {
          reject(new Error("Invalid credentials"));
        }
      }, 1000);
    });
  };

  const register = (name, email, password) => {
    // Simulate API call - in real app, this would call your backend
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (name && email && password) {
          const userData = {
            email,
            name,
          };
          setUser(userData);
          localStorage.setItem("user", JSON.stringify(userData));
          resolve(userData);
        } else {
          reject(new Error("Registration failed"));
        }
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const updateUser = (userData) => {
    const updatedUser = { ...user, ...userData };
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
  };

  // Check for existing session on mount
  React.useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        updateUser,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
