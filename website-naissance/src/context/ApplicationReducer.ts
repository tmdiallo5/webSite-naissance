import { INITIAL_STATE, UPDATE_DECLARATIONS } from "@/utils";

function ApplicationReducer(state: any = INITIAL_STATE, action: any){
    const {type, data} = action || {};

    switch (type) {
        case UPDATE_DECLARATIONS:
            state = {
                ...state,
                declarations: data
            }
            break;

            case UPDATE_DECLARATIONS:
                const declarations = state.declaration;
                const {id: idToUpdate, status} = data;
                
                
                
                const filteredDeclaration = declarations.filter(({id}: {id: string}) => id === idToUpdate);
                const declarationToKeep = declarations.filter(({id}: {id: string}) => id !== idToUpdate);
                const declarationToUpdate = filteredDeclaration[0];
                state = {
                    ...state,
                    declarations: [
                        ...declarationToKeep, 
                        {
                            ...declarationToUpdate, 
                            status: status,
                        }
                    ]
                }
                break;
        
    
     
    }
    return state;
    
}
export {ApplicationReducer}