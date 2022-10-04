import { memo } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ROUTES from "~/constant/routes";
import Admin from "~/Dashboard/Admin";
import ChatApp from "~/Dashboard/ChatApp";
import Dashboard from "~/Dashboard/Dashboard";
import ProjectManagement from "~/Dashboard/ProjectManagement";
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
                <Route path={ROUTES.DASHBOARD} element={<Dashboard />}>
                    <Route path={ROUTES.DASHBOARD} element={<Admin />} />
                    <Route path={ROUTES.CHAT_APP} element={<ChatApp />} />
                    <Route path={ROUTES.PROJECTS} element={<ProjectManagement />} />
                </Route>
            </Routes>
        </Router>
    );
});
