import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userInfo = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null;
    setUser(userInfo);
  }, []);

  const login = async (email, password) => {
    // Simulate API call - in real app, this would call your backend
    console.log("email ", email, password);

    try {
      const response = await fetch("https://restapi.munaa.dev/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const responseData = await response.json();
      // console.log("responsedata", responseData);
      if ((responseData.status = "success")) {
        setUser(responseData.data.user);
        localStorage.setItem("user", JSON.stringify(responseData.data.user));
        localStorage.setItem("e_token", responseData.token);
      }
    } catch (err) {
      console.log("error login", err);
    }
  };

  const register = async (name, email, password) => {
    // Simulate API call - in real app, this would call your backend

    try {
      const response = await fetch(
        "https://restapi.munaa.dev/api/v1/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        },
      );

      const responseData = await response.json();
      if ((responseData.status = "success")) {
        setUser(responseData.data.user);

        localStorage.setItem("user", JSON.stringify(responseData.data.user));
        localStorage.setItem("e_token", responseData.token);
      }
    } catch (err) {
      console.log("error register", err);
    }
  };

  const logout = async () => {
    const response = await fetch("https://restapi.munaa.dev/api/v1/auth/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("e_token");
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
