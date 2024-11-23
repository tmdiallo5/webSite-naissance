import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { BiSave } from "react-icons/bi";
import { useState } from "react";
import { Link } from "react-router-dom";

/* child: {
        gender: '{{gender()}}',
        eyeColor: '{{random("blue", "brown", "green")}}',
        firstName: '{{firstName()}}',
        lastName: '{{surname()}}',
        birthDate: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}'
      },
      parent: {
        gender: '{{gender()}}',
        eyeColor: '{{random("blue", "brown", "green")}}',
        firstName: '{{firstName()}}',
        lastName: '{{surname()}}',
        email: '{{email()}}',
        phone: '+1 {{phone()}}',
        address: '{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}'
      }
 */
type schemaProperties = {
  date?: string;
  message?: string;
  child: {
    firstName: string;
    lastName: string;
    gender: string;
    birthDate: string;
  };
  parent: {
    firstName: string;
    lastName: string;
    gender?: string;
    email: string;
    phone: string;
    adress: string;
  };
};

const ERROR_MESSAGE = "Ce champ est requis";
const schema = yup
  .object({
    date: yup.string(),
    message: yup.string(),
    child: yup.object({
      firstName: yup.string().required(ERROR_MESSAGE),
      lastName: yup.string().required(ERROR_MESSAGE),
      gender: yup.string().required(ERROR_MESSAGE),
      birthDate: yup.string().required(ERROR_MESSAGE),
    }),
    parent: yup.object({
      firstName: yup.string().required(ERROR_MESSAGE),
      lastName: yup.string().required(ERROR_MESSAGE),
      gender: yup.string(),
      email: yup.string().required(ERROR_MESSAGE),
      phone: yup.string().required(ERROR_MESSAGE),
      adress: yup.string().required(ERROR_MESSAGE),
    }),
  })
  .required();

function RequestEdit() {
  const [view, setView] = useState("FORM");
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const save = async (data: schemaProperties) => {
    //console.log(data);
    const response = await fetch("http://localhost:8080/requests", {
      headers: {
        "content-Type": "Application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
      method: "POST",
    });
    await response.json();
    setView("SUCCESS");
    reset();
  };
  return (
    <article className=" border-4  bg-white shadow-md rounded-md w-1/2 mx-auto p-4">
      <h1 className="mb-3 text-xl font-bold">Demander un acte de naissance</h1>
      {view === "FORM" ? (
        <form onSubmit={handleSubmit(save)}>
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
            <label htmlFor="last-firstname">Nom</label>
            <input
              type="text"
              id="last-firstname"
              placeholder="Nom de l'enfant"
              {...register("child.lastName")}
            />

            <p className="text-red-600">{errors.child?.lastName?.message}</p>
          </div>
          <div className="form-field">
            <label htmlFor="child-birthDate">
              Date de naissance de l'enfant
            </label>
            <input
              type="text"
              id="child-birthDate"
              placeholder="Date de naissance de l'enfant"
              {...register("child.birthDate")}
            />

            <p className="text-red-600">{errors.child?.birthDate?.message}</p>
          </div>
          <div className="form-field">
            <label htmlFor="child-gender">Genre de l'enfant</label>
            <input
              type="text"
              id="child-gender"
              placeholder="Genre  de l'enfant"
              {...register("child.gender")}
            />

            <p className="text-red-600">{errors.child?.gender?.message}</p>
          </div>
          <div className="form-field">
            <label htmlFor="parent-firstname">Prénom du parent</label>
            <input
              type="text"
              id="parent-firstname"
              placeholder="Prénom de l'enfant"
              {...register("parent.firstName")}
            />

            <p className="text-red-600">{errors.parent?.firstName?.message}</p>
          </div>
          <div className="form-field">
            <label htmlFor="parent-lastName">Nom du parent</label>
            <input
              type="text"
              id="parent-lastName"
              placeholder="Nom du parent"
              {...register("parent.lastName")}
            />

            <p className="text-red-600">{errors.parent?.lastName?.message}</p>
          </div>
          <div className="form-field">
            <label htmlFor="parent-Email">Email</label>
            <input
              type="email"
              id="parent-Email"
              placeholder="Email du parent"
              {...register("parent.email")}
            />

            <p className="text-red-600">{errors.parent?.email?.message}</p>
          </div>
          <div className="form-field">
            <label htmlFor="parent-phone">Téléphone du parent</label>
            <input
              type="tel"
              id="parent-phone"
              placeholder="Téléphone du parent"
              {...register("parent.phone")}
            />

            <p className="text-red-600">{errors.parent?.phone?.message}</p>
          </div>
          <div className="form-field">
            <label htmlFor="parent-adress">Adresse du parent</label>
            <input
              type="text"
              id="parent-adress"
              placeholder="Adresse du paren"
              {...register("parent.adress")}
            />

            <p className="text-red-600">{errors.parent?.adress?.message}</p>
          </div>

          <div className="form-field">
            <label htmlFor="message">
              Avez-vous des informations complémentaire à nous transmettre
            </label>
            <textarea
              id="comment"
              placeholder="Avez-vous des informations complémentaire à nous transmettre"
              {...register("message")}
            />
            <p className="text-red-600">{errors.message?.message}</p>
          </div>

          <button type="submit">Enregistrer</button>
          <pre>{JSON.stringify(errors, null, 2)}</pre>
        </form>
      ) : (
        <article className="bg-white text-center px-10 py-10 rounded-md shadow-md">
          <h1 className="text-3xl mb-6">
            Votre demande a bien ete enregistrée
          </h1>
          <Link
            to={"/private/demandes"}
            className="border border-blue-600 text-blue-600 px-6 py-4 rounded-md hover:bg-blue-600 hover:text-white"
          >
            Afficher la demandes
          </Link>
        </article>
      )}
    </article>
  );
}

export default RequestEdit;
