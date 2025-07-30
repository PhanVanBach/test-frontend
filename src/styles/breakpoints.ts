/* eslint-disable */

const breakpoints = {
  largeDesktop: 1920,
  desktop: 1440,
  smallDesktop: 1366,
  tablet: 1024,
  phone: 768,
  smallPhone: 575,
};

const devices = {
  desktop: `max-width: ${breakpoints.desktop}px`,
  smallDesktop: `max-width: ${breakpoints.smallDesktop}px`,
  tablet: `max-width: ${breakpoints.tablet}px`,
  phone: `max-width: ${breakpoints.phone}px`,
};
export { breakpoints, devices as default };
