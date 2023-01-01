import { memo } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ROUTES from "~/constant/routes";
import Dashboard from "~/Dashboard/Dashboard";
import DashHome from "~/Dashboard/DashHome";
import ConversationPage from "~/pages/chat/ConversationPage";
import Inbox from "~/pages/chat/Inbox";
import Home from "~/pages/Home";
import Login from "~/pages/Login";
import Payment from "~/pages/Payment";
import ProjectManagement from "~/pages/ProjectManagement";
import Register from "~/pages/Register";
import Task from "~/pages/Task";
import Team from "~/pages/Team";
import { AdminRoute, DashboardRoute, PrivateRoute, PublicRouteHandler } from "./RouteHandler";

export default memo(() => {
    return (
        <Router>
            <Routes>
                <Route path={ROUTES.HOME} element={<Home />} />
                <Route
                    path={ROUTES.LOGIN}
                    element={
                        <PublicRouteHandler>
                            <Login />
                        </PublicRouteHandler>
                    }
                />
                <Route
                    path={ROUTES.REGISTER}
                    element={
                        <PublicRouteHandler>
                            <Register />
                        </PublicRouteHandler>
                    }
                />
                <Route
                    path={ROUTES.PAYMENT}
                    element={
                        <PrivateRoute>
                            <Payment />
                        </PrivateRoute>
                    }
                />
                <Route
                    path={ROUTES.DASHBOARD}
                    element={
                        <DashboardRoute>
                            <Dashboard />
                        </DashboardRoute>
                    }
                >
                    <Route
                        path={ROUTES.DASHBOARD}
                        element={
                            <DashboardRoute>
                                <DashHome />
                            </DashboardRoute>
                        }
                    />
                    <Route
                        path={ROUTES.CHAT_APP}
                        element={
                            <AdminRoute>
                                <ConversationPage />
                            </AdminRoute>
                        }
                    />
                    <Route
                        path={ROUTES.INBOX}
                        element={
                            <AdminRoute>
                                <Inbox />
                            </AdminRoute>
                        }
                    />
                    <Route
                        path={ROUTES.TEAM}
                        element={
                            <AdminRoute>
                                <Team />
                            </AdminRoute>
                        }
                    />

                    <Route
                        path={ROUTES.PROJECTS}
                        element={
                            <DndProvider backend={HTML5Backend}>
                                <AdminRoute>
                                    <ProjectManagement />
                                </AdminRoute>
                            </DndProvider>
                        }
                    />
                    <Route
                        path={ROUTES.TASK}
                        element={
                            <DndProvider backend={HTML5Backend}>
                                <AdminRoute>
                                    <Task />
                                </AdminRoute>
                            </DndProvider>
                        }
                    />
                </Route>
            </Routes>
        </Router>
    );
});
