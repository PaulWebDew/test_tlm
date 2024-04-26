import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/use-auth.ts";
import { route } from "./route.ts";

export const UserPrivateRoute = () => {
  const { isAuth } = useAuth();
  const isUser = isAuth();
  return !isUser ? <Outlet /> : <Navigate to={route.main} />;
};
