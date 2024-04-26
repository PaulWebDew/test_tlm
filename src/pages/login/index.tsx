import { Button, Input } from "../../ui";
import { useForm, type SubmitHandler } from "react-hook-form";
import Error from "../../ui/input/error";
import { login } from "../../store/api/auth.api.ts";
import useAuth from "../../hooks/use-auth.ts";
import { useNavigate } from "react-router";
import { useEffect } from "react";

export type LoginFields = { username: string; password: string };

export const Login = () => {
  const { isAuth } = useAuth();
  const isUser = isAuth();
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFields>();

  const onSubmit: SubmitHandler<LoginFields> = (fields) => {
    const { username, password } = fields;
    const res = login(username, password);
    if (typeof res !== "string") {
      setUser(res);
    }
    navigate("/");
  };

  useEffect(() => {
    isUser && navigate("/");
  }, []);

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-center w-[300px] gap-3"
      >
        Вход
        <Input
          {...register("username", {
            required: {
              value: true,
              message: "Введите логин",
            },
          })}
          placeholder="Логин"
          error={errors.username?.message}
        />
        <Input
          {...register("password", {
            required: {
              value: true,
              message: "Введите пароль",
            },
            minLength: {
              value: 8,
              message: "Пароль должен быть не менее 8 символов",
            },
            maxLength: {
              value: 33,
              message: "Пароль слишком длинный",
            },
          })}
          placeholder="Пароль"
          type="password"
          error={errors.password?.message}
        />
        <Error error={errors.root?.message} />
        <Button>Войти</Button>
      </form>
    </div>
  );
};
