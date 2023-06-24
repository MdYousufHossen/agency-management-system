import ROUTES from "../routes";

const ENGLISH = {
    HOME_BANNER: {
        TITLE: "Making your",
        SUB_TITLE: " brands fly",
        DESCRIPTION:
            "Cybersecurity is the practice of protecting systems and programs from digital attacks. These cyberattacks destroying sensitive information or interrupting normal business processes.",
        LOGIN: "Login",
        DASHBOARD: "Dashboard",
    },
    APP_BAR: {
        HOME: "Home",
        ABOUT_US: "About us",
        MENU: "Menu",
        CONTACT_US: "Contact us",
    },
    DASHBOARD_NAVIGATION: [
        {
            name: "chat app",
            link: "/dashboard/chatapp",
            logo: "Chat",
        },
        {
            name: "Team Manager",
            link: ROUTES.TEAM,
            logo: "Team",
        },
        {
            name: "Project Management",
            link: ROUTES.PROJECTS,
            logo: "Project",
        },
        {
            name: "Task Manager",
            link: ROUTES.TASK,
            logo: "Task",
        },
        {
            name: "Profile",
            link: ROUTES.PROFILE,
            logo: "Task",
        },
    ],
};

export default ENGLISH;
