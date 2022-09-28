import { ReactComponent as ArrowLeft } from "~/assets/icons/arrowLeft.svg";
import { ReactComponent as Calender } from "~/assets/icons/calender.svg";
import { ReactComponent as Call } from "~/assets/icons/call.svg";
import { ReactComponent as Cart } from "~/assets/icons/cart.svg";
import { ReactComponent as IconEmail } from "~/assets/icons/email.svg";
import { ReactComponent as Filter } from "~/assets/icons/filter.svg";
import { ReactComponent as GreenTick } from "~/assets/icons/greenTick.svg";
import { ReactComponent as Home } from "~/assets/icons/homeIcon.svg";
import { ReactComponent as Instagram } from "~/assets/icons/instagram.svg";
import { ReactComponent as Linkedin } from "~/assets/icons/linkedin.svg";
import { ReactComponent as Location } from "~/assets/icons/location.svg";
import { ReactComponent as Lock } from "~/assets/icons/Lock.svg";
import { ReactComponent as Mobile } from "~/assets/icons/mobile.svg";
import { ReactComponent as ModalTrash } from "~/assets/icons/modalTrash.svg";
import { ReactComponent as IconPerson } from "~/assets/icons/person.svg";
import { ReactComponent as PhoneIcon } from "~/assets/icons/phoneIcon.svg";
import { ReactComponent as Search } from "~/assets/icons/search.svg";
import { ReactComponent as Share } from "~/assets/icons/share.svg";
import { ReactComponent as Trash } from "~/assets/icons/trash.svg";
import { ReactComponent as Twitter } from "~/assets/icons/twitter.svg";
import { ReactComponent as WebSite } from "~/assets/icons/website.svg";

import { memo, MouseEventHandler } from "react";
import styled from "styled-components";
import AbsoluteContent from "./AbsoluteContent";
import EmptyHolderDiv from "./EmptyHolderDiv";

interface StyledContainerProps {
    color?: string;
    clickable?: boolean;
}

const StyledContainer = styled.div<StyledContainerProps>`
    * {
        ${(p) => p.color && `fill: ${p.color};`}
        ${(p) => p.clickable && `cursor: pointer;`}
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
};

export const ICON_NAME = {
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
};

export interface IconProps {
    name: string;
    height: number;
    width: number;
    color?: string;
    onClick?: MouseEventHandler<SVGSVGElement>;
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
