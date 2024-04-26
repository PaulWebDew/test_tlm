import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet } from "react-router-dom";
import AuthProvider from "./providers/authProvider.tsx";
import "./index.css";
import { Dashboard, Home, Login } from "./pages";
import { PrivateRoute } from "./routes/privateRoute.tsx";
import { UserPrivateRoute } from "./routes/userPrivateRoute.tsx";
import { RouterProvider } from "react-router";
import { Layout } from "./pages/layout";
import { route } from "./routes/route.ts";
import { NotFound } from "./pages/notFound";

const router = createBrowserRouter([
  {
    children: [
      {
        path: route.dashboard,
        element: <Dashboard />,
      },
    ],
    element: (
      <Layout>
        <PrivateRoute />
      </Layout>
    ),
  },
  {
    children: [
      {
        path: route.login,
        element: <Login />,
      },
    ],
    element: (
      <Layout>
        <UserPrivateRoute />
      </Layout>
    ),
  },
  {
    children: [
      {
        path: route.main,
        element: (
          <Layout>
            <Home />
          </Layout>
        ),
      },
      {
        path: "*",
        element: (
          <Layout>
            <NotFound />
          </Layout>
        ),
      },
    ],
    element: <Outlet />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>,
);
