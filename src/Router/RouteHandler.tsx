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
