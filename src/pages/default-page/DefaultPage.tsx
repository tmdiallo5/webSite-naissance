import React, { useEffect } from "react";
import { Navigate, redirect } from "react-router-dom";

function DefaultPage() {
  const goto = () => {
    return redirect("/private/declaration");
  };

  useEffect(() => {
    goto();
  }, []);
  return <Navigate to="/private/declaration" />;
}

export default DefaultPage;
