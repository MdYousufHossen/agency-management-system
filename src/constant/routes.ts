export const PUBLIC_ROUTES = {
    HOME: "/",
    LOGIN: "/login",
    REGISTER: "/register",
};

export const PRIVATE_ROUTES = {
    DASHBOARD: "/dashboard",
    CHAT_APP: "/dashboard/chatapp",
    INBOX: "/dashboard/chatapp/:id",
    TEAM: "/dashboard/team",
    PROJECTS: "/dashboard/project",
    PAYMENT: "/payment",
};

const ROUTES = {
    ...PUBLIC_ROUTES,
    ...PRIVATE_ROUTES,
};
export default ROUTES;
