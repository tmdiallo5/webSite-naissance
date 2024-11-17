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
    
     
    }
    return state;
    
}
export {ApplicationReducer}