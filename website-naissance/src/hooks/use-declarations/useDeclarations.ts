import { Declarations } from "@/types/Declarations";
import { useEffect, useState } from "react";

function useDeclarations () {

    const [declarations, setDeclaration] = useState<Declarations[]>([]);

    const search = async () => {
        const response = await fetch("http://localhost:8080/declarations");
        const data = await response.json();
        setDeclaration(data);
      };
    
      useEffect(() => {
        search();
      }, []);

      return {declarations};
}

export{ useDeclarations}