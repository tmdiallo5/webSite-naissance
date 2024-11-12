import { Profile } from "@/types/Profile";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

function DeclarationEdit() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Profile>();
  const onSubmit: SubmitHandler<Profile> = (data) => console.log(data);

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
            {...register("firstName", { required: true })}
          />
          {errors.firstName && (
            <p className="text-red-600">Ce champ est requis</p>
          )}
        </div>
        <div className="form-field">
          <label htmlFor="child-lastName">Nom</label>
          <input
            type="text"
            id="child-firstname"
            placeholder="Nom de l'enfant"
            {...register("lastName", { required: true })}
          />
          {errors.lastName && (
            <p className="text-red-600">Ce champ est requis</p>
          )}
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
              {...register("birthDate", { required: true })}
            />

            <input
              type="time"
              id="child-birthday"
              placeholder="heure de naissance"
              {...register("birthTime", { required: true })}
            />
          </div>
          {errors.birthDate && (
            <p className="text-red-600">La date de naissance est requise</p>
          )}
          {errors.birthTime && (
            <p className="text-red-600">L'heure de naissance est requis</p>
          )}
        </div>
        <button type="submit">Enregistrer</button>
      </form>
    </article>
  );
}

export default DeclarationEdit;
