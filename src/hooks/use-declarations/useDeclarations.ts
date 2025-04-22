
import { GlobalApplicationContext } from "@/context/global/GlobalApplicationContextProvider";
import Declaration from "@/pages/declarations/Declaration";
import { search } from "@/services";
import { Declarations } from "@/types/Declarations";
import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useRef, useState } from "react";

function useDeclarations () {

    const {updateTitle, state: {token}} = useContext(GlobalApplicationContext);
   const {data} = useQuery({ 
      queryKey: ['declarations'], 
      queryFn: () => search({path:"declarations", token}),
      retry:2
     });
   
    const {state, updateDeclarations} = useContext(GlobalApplicationContext);

    const filtRef = useRef<any>()
    const [statusOrder, setStatusOrder] = useState(1);
    const [dateOrder, setDateOrder] = useState(1);
    const [declarations, setDeclaration] = useState<Declarations[]>([]);
    const [filteredDeclaration, setfilteredDeclaration] = useState<Declarations[]>(state.declarations);
/*
    const updateStatusWithoutContext = (data: { id: string; status: string }) => {
      const toUpdate = declarations.filter(
        ({ id }: Declarations) => id === data.id
      )[0];
      const tokeep = declarations.filter(
        ({ id }: Declarations) => id !== data.id
      );
      const updated = { ...toUpdate, status: data.status };
      setDeclaration([...tokeep, updated]);
    };
*/
    const updateStatus = (data: { id: string; status: string }) => {};
   

      const sortByStatus = () => {
      const sortedDeclarations =  declarations.sort((itemOne: Declarations, itemTwo: Declarations) => {
       const {status: itemOneStatus} = itemOne;
       const {status: itemTwoStatus} = itemTwo;
       let result = 0;
      /*  if(statusOrder === 1){
         setStatusOrder(-1);
       }
       else {
         setStatusOrder(1);
       } */
       
       if(itemOneStatus > itemTwoStatus){
         result = 1;
       }
       else if (itemOneStatus < itemTwoStatus) {
         result = -1;
       }
       setStatusOrder(statusOrder * -1);
       return result * statusOrder;
     })
       setDeclaration([...sortedDeclarations]);
     }

     const sortByDate = () => {
      const sortedDeclarations = declarations.sort(
        ({ registered: itemOneDate }: Declarations, { registered: itemTwoDate }: Declarations) => {
          const jsDateOne = itemOneDate.split(" ")[0];
          const jsDateTwo = itemTwoDate.split(" ")[0];
          const result =
            new Date(jsDateOne).getTime() - new Date(jsDateTwo).getTime();

          setDateOrder(dateOrder * -1);
          return result * dateOrder;
        }
      );
       setDeclaration([...sortedDeclarations]);
     }

     const filterDeclarations = () => {
        const filter = filtRef.current.value || "";
        if(filter.length > 1){
         const filteredDeclaration = declarations.filter(item => {
            const {child: {firstName, lastName}} = item;
            return (firstName.toLowerCase().indexOf(filter.toLowerCase()) > -1 || lastName.toLowerCase().includes(filter.toLowerCase()))
          });
          setfilteredDeclaration([...filteredDeclaration]);
        }
        else {
          setfilteredDeclaration([...declarations]);
        }
        
        
     }

  /*  const getDeclaration = async () => {
        const data = await search("declarations")
        setDeclaration(data);
        updateDeclarations(data);
      };
   */
      useEffect(() => {
        updateTitle({"title": "Déclaration"}); 
        setDeclaration(data);
        updateDeclarations(data);
       // getDeclaration();
      }, [data]);

      return {declarations, state, updateStatus, sortByStatus, sortByDate, filtRef, filterDeclarations, filteredDeclaration};
}

export{ useDeclarations}