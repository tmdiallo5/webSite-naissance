import PageFilter from "@/components/shared/PageFilter";
import React from "react";
import { Link } from "react-router-dom";

function Requests() {
  return (
    <>
      <PageFilter
        btnLabel="Nouvelle demande"
        btnPath={"/private/demandes/nouvelle-demande"}
        inputPlaceHolder="Rechercher une demande"
      />
    </>
  );
}

export default Requests;
