export const screeinBreakpoints: { [key: string]: number } = {
    mobile: 400,
    tablet: 600,
    landscape: 768,
    laptopS: 992,
    laptopL: 1200,
    largeScreen: 1800,
};

export const device = {
    mobile: `(max-width:${screeinBreakpoints.mobile}px)`,
    tablet: ` (min-width:${screeinBreakpoints.mobile}px) and (max-width:${screeinBreakpoints.tablet}px)`,
    landscape: `(min-width:${screeinBreakpoints.tablet}px) and (max-width:${screeinBreakpoints.landscape}px)`,
    laptopS: `(min-width:${screeinBreakpoints.landscape}px) and (max-width:${screeinBreakpoints.laptopS}px)`,
    laptopL: `(min-width:${screeinBreakpoints.landscape}px) and (max-width:${screeinBreakpoints.laptopL}px)`,
    largeScreen: `(min-width:${screeinBreakpoints.laptopL}px) and (max-width:${screeinBreakpoints.largeScreen}px)`,
};
