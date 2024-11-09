import { search } from "@/services";
import { Declarations } from "@/types/Declarations";
import { useEffect, useState } from "react";

function useDeclarations () {

    const [declarations, setDeclaration] = useState<Declarations[]>([]);

    const getDeclaration = async () => {
        const data = await search('declarations')
        setDeclaration(data);
      };
    
      useEffect(() => {
        getDeclaration();
      }, []);

      return {declarations};
}

export{ useDeclarations}