import { Fragment } from "react";
import Banner from "~/components/Banner";
import CustomerTrust from "~/components/CustomerTrust";
import ReadyToGetStart from "~/components/ReadyToGetStart";
import Services from "~/components/Services";
import Spacer from "~/components/Spacer";
import TrustedBy from "~/components/TrustedBy";

const Home = () => {
    return (
        <Fragment>
            <Banner />
            <TrustedBy />
            <Spacer height="90px" />
            <CustomerTrust />
            <Spacer height="120px" />
            <Services />
            <Spacer height="80px" />
            <ReadyToGetStart />
        </Fragment>
    );
};

export default Home;
