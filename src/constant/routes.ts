export const PUBLIC_ROUTES = {
    HOME: "/",
    LOGIN: "/login",
    REGISTER: "/register",
};

export const PRIVATE_ROUTES = {
    DASHBOARD: "/dashboard",
    CHAT_APP: "/dashboard/chatapp",
    PROJECTS: "/dashboard/projects",
};

const ROUTES = {
    ...PUBLIC_ROUTES,
    ...PRIVATE_ROUTES,
};
export default ROUTES;
