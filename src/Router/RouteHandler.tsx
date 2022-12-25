import { FC, memo } from "react";
import { Navigate } from "react-router-dom";
import ROUTES from "~/constant/routes";
import useAuth from "~/hooks/useAuth";
interface Props {
    children: JSX.Element[] | JSX.Element;
}
export const PublicRouteHandler: FC<Props> = memo((props) => {
    const isLoggedIn = useAuth();
    return !isLoggedIn ? <>{props.children}</> : <Navigate to={ROUTES.DASHBOARD} />;
});

export const PrivateRoute: FC<Props> = memo((props) => {
    const isLoggedIn = useAuth();
    return isLoggedIn ? <>{props.children}</> : <Navigate to={ROUTES.HOME} />;
});

export const DashboardRoute: FC<Props> = memo((props) => {
    const isAdmin = true;
    const isEmploy = false;
    const isLoggedIn = useAuth();
    return (isLoggedIn && isAdmin) || isEmploy ? <>{props.children}</> : <Navigate to={ROUTES.HOME} />;
});
export const AdminRoute: FC<Props> = memo((props) => {
    const isAdmin = true;
    const isLoggedIn = useAuth();
    return isLoggedIn && isAdmin ? <>{props.children}</> : <Navigate to={ROUTES.HOME} />;
});
export const EmployRoute: FC<Props> = memo((props) => {
    const isLoggedIn = useAuth();
    const isEmploy = true;
    return isLoggedIn && isEmploy ? <>{props.children}</> : <Navigate to={ROUTES.HOME} />;
});
