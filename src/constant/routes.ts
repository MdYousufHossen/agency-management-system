export const PUBLIC_ROUTES = {
    HOME: "/",
    LOGIN: "/login",
    REGISTER: "/register",
};

export const PRIVATE_ROUTES = {};

const ROUTES = {
    ...PUBLIC_ROUTES,
    ...PRIVATE_ROUTES,
};
export default ROUTES;
