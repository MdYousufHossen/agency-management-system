import { FadeLoader } from "react-spinners";
import useAuthCheck from "./hooks/useAuthCheck";
import Router from "./Router";

function App() {
    const authChecked = useAuthCheck();
    return !authChecked ? <FadeLoader cssOverride={{ margin: "auto" }} color="#36d7b7" /> : <Router />;
}
export default App;
