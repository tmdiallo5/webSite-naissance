import React from "react";

function DeclarationEdit() {
  return (
    <article className=" border-4  bg-white shadow-md rounded-md w-1/2 mx-auto p-4">
      <h1 className="mb-3 text-xl font-bold">Déclarer une naissance</h1>
      <form action="">
        <h3 className="border-b  border-gray-900">Information surl'enfant</h3>
        <div className="form-field">
          <label htmlFor="child-firstname">Prénom</label>
          <input
            type="text"
            name=""
            id="child-firstname"
            placeholder="Prénom de l'enfant"
          />
          <p className="text-red-600"></p>
        </div>
      </form>
    </article>
  );
}

export default DeclarationEdit;
