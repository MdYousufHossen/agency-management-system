import { Outlet } from "react-router-dom";
import Container from "~/components/Container";
import DNavigation from "~/container/DNavigation";

const Dashboard = () => {
    return (
        <div style={{ display: "flex" }}>
            <DNavigation />
            <Container width="92%" background="green" height="100vh">
                <Outlet />
            </Container>
        </div>
    );
};

export default Dashboard;
