import { Profile } from "@/types/Profile";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Declarations } from "@/types/Declarations";

const REQUIRED_FIELD = "Ce champ est requis";
const schema = yup
  .object({
    picture: yup.string().required(REQUIRED_FIELD),
    comment: yup.string().required(REQUIRED_FIELD),
    status: yup.string().required(REQUIRED_FIELD).default("NEW"),
    registered: yup
      .string()
      .required(REQUIRED_FIELD)
      .default(`${new Date().getTime()}`),
    company: yup.object({
      name: yup.string().required(REQUIRED_FIELD),
      adress: yup.string().required(REQUIRED_FIELD),
    }),
    child: yup.object({
      gender: yup.string().required(REQUIRED_FIELD),
      firstName: yup.string().required(REQUIRED_FIELD),
      lastName: yup.string().required(REQUIRED_FIELD),
      birthDate: yup.string().required(REQUIRED_FIELD),
      birthTime: yup.string().required(REQUIRED_FIELD),
    }),
    firstParent: yup.object({
      gender: yup.string().required(REQUIRED_FIELD),
      firstName: yup.string().required(REQUIRED_FIELD),
      lastName: yup.string().required(REQUIRED_FIELD),
    }),
    secondParent: yup.object({
      gender: yup.string().required(REQUIRED_FIELD),
      firstName: yup.string().required(REQUIRED_FIELD),
      lastName: yup.string().required(REQUIRED_FIELD),
    }),
  })
  .required();

function DeclarationEdit() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Declarations>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<Declarations> = (data) => console.log(data);

  return (
    <article className=" border-4  bg-white shadow-md rounded-md w-1/2 mx-auto p-4">
      <h1 className="mb-3 text-xl font-bold">Déclarer une naissance</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 className="border-b  border-gray-900">Information surl'enfant</h3>
        <div className="form-field">
          <label htmlFor="child-firstname">Prénom</label>
          <input
            type="text"
            id="child-firstname"
            placeholder="Prénom de l'enfant"
            {...register("child.firstName")}
          />

          <p className="text-red-600">{errors.child?.firstName?.message}</p>
        </div>
        <div className="form-field">
          <label htmlFor="child-lastName">Nom</label>
          <input
            type="text"
            id="child-firstname"
            placeholder="Nom de l'enfant"
            {...register("child.lastName")}
          />
          <p className="text-red-600">{errors.child?.lastName?.message}</p>
        </div>
        <div className="form-field">
          <label htmlFor="child-firstname">
            Date de naissance et heure de naissance
          </label>
          <div className="flex justify-between items-center gap-2">
            <input
              type="date"
              id="child-birthday"
              placeholder="Date de naissance"
              {...register("child.birthTime")}
            />

            <input
              type="time"
              id="child-birthday"
              placeholder="heure de naissance"
              {...register("child.birthTime")}
            />
          </div>
          <p className="text-red-600">{errors.child?.birthDate?.message}</p>
          <p className="text-red-600">{errors.child?.birthTime?.message}</p>
        </div>
        <button type="submit">Enregistrer</button>
      </form>
    </article>
  );
}

export default DeclarationEdit;
