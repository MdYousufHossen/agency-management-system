import styled from "styled-components";
import Icon, { ICON_NAME } from "./Icon";

const TrustedWraper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 50%;
    margin: auto;
`;
const Trusted = styled.div`
    margin: 20px;
`;
// { [key: string]: string }
const TrustedBy = () => {
    const trusted = ["airbnb", "amazon", "fedEx", "google", "microsoft", "OLA", "walmart", "OYO"];

    return (
        <TrustedWraper>
            {trusted.map((tr: string) => {
                return (
                    <Trusted key={tr}>
                        <Icon name={ICON_NAME[tr]} width={120} height={35} />
                    </Trusted>
                );
            })}
        </TrustedWraper>
    );
};

export default TrustedBy;
