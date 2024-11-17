const NAV_LINKS = [
    {
        to: "/private/declaration",
        label: "Les declarations"
    },
    {
        to: "/private/requests",
        label: "Les demandes"
    },
    {
        to: "/private/profiles",
        label: "Les personnes"
    },
    {
        to: "/private/notifications",
        label: "Les couriers"
    },

];

const UPDATE_DECLARATIONS = "UPDATE_DECLARATIONS";
const INITIAL_STATE = {declarations: []};

export {NAV_LINKS, UPDATE_DECLARATIONS, INITIAL_STATE}