export type Route = "main" | "dashboard" | "login";

export const route: Record<Route, string> = {
  main: "/",
  dashboard: "/dashboard",
  login: "/login",
};
