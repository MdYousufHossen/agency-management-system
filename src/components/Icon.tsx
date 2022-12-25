import { memo, MouseEventHandler } from "react";
import styled from "styled-components";
import { ReactComponent as Add } from "~/assets/icons/add.svg";
import { ReactComponent as airbnb } from "~/assets/icons/airbnb.svg";
import { ReactComponent as amazon } from "~/assets/icons/amazon.svg";
import { ReactComponent as ArrowLeft } from "~/assets/icons/arrowLeft.svg";
import { ReactComponent as Calender } from "~/assets/icons/calender.svg";
import { ReactComponent as Call } from "~/assets/icons/call.svg";
import { ReactComponent as Cart } from "~/assets/icons/cart.svg";
import { ReactComponent as Chat } from "~/assets/icons/chat.svg";
import { ReactComponent as customerTrust } from "~/assets/icons/customerTrust.svg";
import { ReactComponent as IconEmail } from "~/assets/icons/email.svg";
import { ReactComponent as fedEx } from "~/assets/icons/fedEx.svg";
import { ReactComponent as Filter } from "~/assets/icons/filter.svg";
import { ReactComponent as google } from "~/assets/icons/google.svg";
import { ReactComponent as GreenTick } from "~/assets/icons/greenTick.svg";
import { ReactComponent as Home } from "~/assets/icons/homeIcon.svg";
import { ReactComponent as incident } from "~/assets/icons/incident.svg";
import { ReactComponent as Instagram } from "~/assets/icons/instagram.svg";
import { ReactComponent as Linkedin } from "~/assets/icons/linkedin.svg";
import { ReactComponent as Location } from "~/assets/icons/location.svg";
import { ReactComponent as Lock } from "~/assets/icons/Lock.svg";
import { ReactComponent as Logo } from "~/assets/icons/logo.svg";
import { ReactComponent as Menu } from "~/assets/icons/menu.svg";
import { ReactComponent as MessageSend } from "~/assets/icons/messageSend.svg";
import { ReactComponent as microsoft } from "~/assets/icons/microsoft.svg";
import { ReactComponent as Mobile } from "~/assets/icons/mobile.svg";
import { ReactComponent as ModalTrash } from "~/assets/icons/modalTrash.svg";
import { ReactComponent as More } from "~/assets/icons/more.svg";
import { ReactComponent as network } from "~/assets/icons/network.svg";
import { ReactComponent as OLA } from "~/assets/icons/OLA.svg";
import { ReactComponent as openingTime } from "~/assets/icons/openingTimes.svg";
import { ReactComponent as OYO } from "~/assets/icons/OYO.svg";
import { ReactComponent as IconPerson } from "~/assets/icons/person.svg";
import { ReactComponent as PhoneIcon } from "~/assets/icons/phoneIcon.svg";
import { ReactComponent as Project } from "~/assets/icons/project.svg";
import { ReactComponent as Search } from "~/assets/icons/search.svg";
import { ReactComponent as secureWeb } from "~/assets/icons/secureWeb.svg";
import { ReactComponent as security } from "~/assets/icons/security.svg";
import { ReactComponent as Share } from "~/assets/icons/share.svg";
import { ReactComponent as Task } from "~/assets/icons/task.svg";
import { ReactComponent as Team } from "~/assets/icons/team.svg";
import { ReactComponent as testing } from "~/assets/icons/testing.svg";
import { ReactComponent as Trash } from "~/assets/icons/trash.svg";
import { ReactComponent as Twitter } from "~/assets/icons/twitter.svg";
import { ReactComponent as AddUser } from "~/assets/icons/user-add.svg";
import { ReactComponent as walmart } from "~/assets/icons/walmart.svg";
import { ReactComponent as WebSite } from "~/assets/icons/website.svg";
import AbsoluteContent from "./AbsoluteContent";
import EmptyHolderDiv from "./EmptyHolderDiv";
interface StyledContainerProps {
    color?: string;
    clickable?: boolean;
    mt?: string;
    mr?: string;
    mb?: string;
    ml?: string;
    margin?: string;
}

const StyledContainer = styled.div<StyledContainerProps>`
    * {
        ${(p) => p.color && `fill: ${p.color};`}
        ${(p) => p.clickable && `cursor: pointer;`}
       margin-top: ${(p) => p.mt};
        margin-right: ${(p) => p.mr};
        margin-bottom: ${(p) => p.mb};
        margin-left: ${(p) => p.ml};
        margin: ${(p) => p.margin};
    }
`;

const ICON = {
    ArrowLeft,
    Cart,
    Filter,
    Search,
    Share,
    Trash,
    GreenTick,
    ModalTrash,
    IconPerson,
    IconEmail,
    Home,
    PhoneIcon,
    Instagram,
    Twitter,
    WebSite,
    Linkedin,
    Call,
    Location,
    Calender,
    Mobile,
    Lock,
    Logo,
    OYO,
    walmart,
    OLA,
    microsoft,
    google,
    fedEx,
    amazon,
    airbnb,
    customerTrust,
    openingTime,
    incident,
    secureWeb,
    testing,
    security,
    network,
    MessageSend,
    More,
    Add,
    Team,
    Project,
    Task,
    Chat,
    Menu,
    AddUser,
};

export const ICON_NAME: { [key: string]: string } = {
    ArrowLeft: "ArrowLeft",
    Cart: "Cart",
    Filter: "Filter",
    Search: "Search",
    Share: "Share",
    Trash: "Trash",
    GreenTick: "GreenTick",
    ModalTrash: "ModalTrash",
    IconPerson: "IconPerson",
    IconEmail: "IconEmail",
    Home: "Home",
    PhoneIcon: "PhoneIcon",
    Instagram: "Instagram",
    Twitter: "Twitter",
    WebSite: "WebSite",
    Linkedin: "Linkedin",
    Call: "Call",
    Location: "Location",
    Calender: "Calender",
    Mobile: "Mobile",
    Lock: "Lock",
    Logo: "Logo",
    OYO: "OYO",
    walmart: "walmart",
    OLA: "OLA",
    microsoft: "microsoft",
    google: "google",
    fedEx: "fedEx",
    amazon: "amazon",
    airbnb: "airbnb",
    customerTrust: "customerTrust",
    openingTime: "openingTime",
    incident: "incident",
    secureWeb: "secureWeb",
    testing: "testing",
    security: "security",
    network: "network",
    messageSend: "MessageSend",
    More: "More",
    Add: "Add",
    Team: "Team",
    Project: "Project",
    Chat: "Chat",
    Task: "Task",
    Menu: "Menu",
    AddUser: "AddUser",
};

export interface IconProps {
    name: string;
    height: number;
    width: number;
    color?: string;
    onClick?: MouseEventHandler<SVGSVGElement>;
    mt?: string;
    mr?: string;
    mb?: string;
    ml?: string;
    margin?: string;
}

const Icon = memo((props: IconProps) => {
    const Component = ICON[props.name as keyof typeof ICON];
    return (
        <EmptyHolderDiv height={`${props.height}px`} width={`${props.width}px`}>
            <AbsoluteContent height={`${props.height}px`} width={`${props.width}px`}>
                <StyledContainer color={props.color} clickable={!!props.onClick}>
                    <Component height={props.height} width={props.width} onClick={props.onClick} color={props.color} fill={props.color} />
                </StyledContainer>
            </AbsoluteContent>
        </EmptyHolderDiv>
    );
});

export default Icon;
