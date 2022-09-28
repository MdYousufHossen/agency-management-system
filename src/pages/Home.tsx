import StyledLink from "~/components/StyledLink";
import Typography from "~/components/Typography";
import ROUTES from "~/constant/routes";

const Home = () => {
    return (
        <div>
            <Typography variant="title1">Home</Typography>
            <StyledLink to={ROUTES.LOGIN}> Login </StyledLink>
            <StyledLink to={ROUTES.REGISTER}> Register </StyledLink>
        </div>
    );
};

export default Home;
