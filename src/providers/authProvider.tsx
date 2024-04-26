import { createContext, type ReactNode, useState } from "react";

export type MeResponse = {
  name: string;
  role: string;
  token: string;
};

interface ProviderAuthContext {
  user: MeResponse | null;
  setUser: (MeResponse: any) => void;
  logout: () => void;
  isAuth: () => boolean;
}

export const AuthContext = createContext<ProviderAuthContext>(null!);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUserState] = useState<MeResponse | null>(null);

  function logout() {
    setUser(null);
    localStorage.removeItem("accessToken");
  }

  function setUser(user: MeResponse | null) {
    setUserState(user);
    if (user?.token) {
      localStorage.setItem("accessToken", user.token);
    } else {
      localStorage.removeItem("accessToken");
    }
  }

  function isAuth() {
    const token = localStorage.getItem("accessToken");
    return !!token;
  }

  const value: ProviderAuthContext = {
    user: user || null,
    setUser,
    isAuth,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
