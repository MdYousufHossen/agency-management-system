const breakpoints = {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "765px",
    laptop: "1024px",
    laptopL: "1440px",
    desktop: "2560px",
};

export const device = {
    mobileS: `(max-width: ${breakpoints.mobileS})`,
    mobileM: `(min-width: ${breakpoints.mobileS}) and (max-width: ${breakpoints.mobileM})`,
    mobileL: `(max-width: ${breakpoints.mobileL})`,
    tablet: `(min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.laptop})`,
    laptop: `(max-width: ${breakpoints.laptop})`,
    laptopL: `(max-width: ${breakpoints.laptopL})`,
    desktop: `(max-width: ${breakpoints.desktop})`,
    desktopL: `(max-width: ${breakpoints.desktop})`,
};
