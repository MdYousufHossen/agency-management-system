import { useState } from "react";
import { Outlet } from "react-router-dom";
import Container from "~/components/Container";
import DNavigation from "~/container/DNavigation";

const Dashboard = () => {
    const [checked, setChecked] = useState<Boolean>(false);
    return (
        <div style={{ display: "flex" }}>
            <DNavigation checked={checked} setChecked={setChecked} />
            <Container width={checked ? "95%" : "80%"} height="100vh">
                <Outlet />
            </Container>
        </div>
    );
};

export default Dashboard;
