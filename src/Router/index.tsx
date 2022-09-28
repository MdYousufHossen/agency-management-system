import { memo } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ROUTES from "~/constant/routes";
import Home from "~/pages/Home";
import Login from "~/pages/Login";
import Register from "~/pages/Register";

export default memo(() => {
    return (
        <Router>
            <Routes>
                <Route path={ROUTES.HOME} element={<Home />} />
                <Route path={ROUTES.LOGIN} element={<Login />} />
                <Route path={ROUTES.REGISTER} element={<Register />} />
            </Routes>
        </Router>
    );
});
