import React, { useRef } from "react";
import { Link } from "react-router-dom";

type Props = {
  btnLabel: string;
  btnPath: string; //le chemin vers le quel on va rediriger l'utilisateur
  inputPlaceHolder: string;
  action?: (value: any) => void;
};

function PageFilter({
  btnLabel,
  inputPlaceHolder,
  action: uneaction = () => null,
  btnPath,
}: Props) {
  const filtRef = useRef<any>();
  const handleChange = () => {
    const value = filtRef.current.value;
    uneaction(value);
  };
  return (
    <>
      <div className=" border-4  bg-white shadow-md rounded-md mb-3 flex justify-between items-center px-3 py-3">
        <input
          type="text"
          name=""
          id="rechercher"
          placeholder={inputPlaceHolder}
          ref={filtRef}
          onKeyUp={handleChange}
          className="bg-gray-200 px-3 py-2 rounded-md !w-96"
        />
        <Link
          to={btnPath}
          className="bg-green-700 rounded-md text-white px-3 py-2"
        >
          {btnLabel}
        </Link>
      </div>
    </>
  );
}

export default PageFilter;
