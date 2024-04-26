import { ReactNode } from "react";
import { Button } from "../../ui";
import useAuth from "../../hooks/use-auth.ts";
import { useLocation, useNavigate } from "react-router";
import { Route, route } from "../../routes/route.ts";
import clsx from "clsx";

export const Layout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { logout, isAuth } = useAuth();
  const isUser = isAuth();

  const exit = () => {
    logout();
    navigate(route.main);
  };

  const routeArr = Object.keys(route);

  return (
    <section>
      <div className={"flex justify-between"}>
        <nav>
          <ul className={"flex gap-5 text-green-500 text-3xl p-4"}>
            {routeArr.map((item, index) => (
              <li key={index}>
                <a
                  className={clsx(
                    pathname === route[item as Route] && "underline font-bold",
                  )}
                  href={route[item as Route]}
                >
                  {item.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {isUser && (
          <Button className={"m-5"} onClick={exit}>
            Log Out
          </Button>
        )}
      </div>
      <main>{children}</main>
    </section>
  );
};
