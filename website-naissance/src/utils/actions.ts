const getStatusColor = (status: string) => {
    switch (status) {
        case "NEW":
            return "bg-blue-100 text-blue-600 text-center";
        case "ON_GOING":
            return "bg-amber-100 text-amber-600 text-center";   
        case "VALIDATED":
            return "bg-green-100 text-green-600 text-center";
        case "REJECTED":
            return "bg-red-100 text-red-600 text-center";               
            
            break;
    
        default:
            return "";
    }
}

const getStatusColorLabel = (status: string) => {
    switch (status) {
        case "NEW":
            return "Nouveau";
        case "ON_GOING":
            return "En cours";   
        case "VALIDATED":
            return "Validé";
        case "REJECTED":
            return "Rejeté";               
            
            break;
    
        default:
            return "";
    }
}
export {getStatusColor, getStatusColorLabel}