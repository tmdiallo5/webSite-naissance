import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { create } from "@/services";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const REQUIRED_FIELD = "Ce champ est requis";
type Credentials = {
  email: string;
  password: string;
};
const schema = yup
  .object({
    email: yup.string().required(REQUIRED_FIELD),
    password: yup.string().required(REQUIRED_FIELD),
  })
  .required();

function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Credentials>({
    resolver: yupResolver(schema),
  });

  const [display, setDisplay] = useState("FORM");
  const onSubmit: SubmitHandler<Credentials> = async (Credentials) => {
    const response = await create("sign-in", Credentials);
    const { status } = response;
    const { bearer } = await response.json();
    console.log({ bearer });

    if (status === 201) {
      reset();
      setDisplay("SUCCESS");
    }
  };
  if (display === "SUCCESS") {
    <article className="bg-white text-center px-10 py-10 rounded-md shadow-md">
      <h1 className="text-3xl mb-6">Vous etes connectes</h1>
      <Navigate to={"/private/declaration"} />
    </article>;
  }
  return (
    <div className="flex flex-col justify-between md:justify-center">
      <h1 className="p-4 font-bold text-4xl text-center text-blue-800 md:hidden">
        Mes naissances
      </h1>
      <div className="w-4/5 md:w-3/4 mx-auto">
        <h1 className="mb-3 text-2xl font-bold">Connectez-vous</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Votre email"
              {...register("email")}
            />
            <p className="text-red-600">{errors.email?.message}</p>
          </div>
          <div className="form-field">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              placeholder="Votre mot de passe"
              {...register("password")}
            />
            <p className="text-red-600">{errors.password?.message}</p>
          </div>
          <button type="submit">Connexion</button>
        </form>
      </div>
      <p className="p-4 text-center md:hidden">
        &copy; {new Date().getFullYear()} chillo.tech
      </p>
    </div>
  );
}

export default Login;
