interface Size {
  mobile: string;
  tablet: string;
  smallTablet: string;
  smallMobile: string;
}
const size: Size = {
  mobile: "480px",
  smallTablet: "550px",
  tablet: "768px",
  smallMobile: "375px",
};

export const device = {
  mobile: `(max-width: ${size.mobile})`,
  smallMobile: `(max-width: ${size.smallMobile})`,
  tablet: `(max-width: ${size.tablet})`,
  smallTablet: `(max-width: ${size.smallTablet})`,
};
