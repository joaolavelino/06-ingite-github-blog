export const defaultTheme = {
  blue: "#3294f8",
  base: {
    title: "#E7EDF4",
    subtitle: "#C4D4E3",
    text: "#AFC2D4",
    span: "#7B96B2",
    label: "#3A536B",
    border: "#1C2F41",
    post: "#112131",
    profile: "#0B1B2B",
    bg: "#071422",
    input: "#040F1A",
  },
  font: {
    title: `font-family: "Jost", sans-serif;font-wheight:600`,
    text: `font: 400 1rem "Figtree", sans-serif`,
  },
  mediaQuery: {
    xsm: `@media screen and (max-width: 400px)`, // Mobile landscape
    sm: `@media screen and (min-width: 640px)`, // Mobile landscape
    md: `@media screen and (min-width: 768px)`, // Tablets
    lg: `@media screen and (min-width: 1024px)`, // Laptops
    xl: `@media screen and (min-width: 1280px)`, // Desktops
    xxl: `@media screen and (min-width: 1536px)`, // Large screens
  },
  shadow: "box-shadow: 4px 4px 4px #00000025;",
  radius: "border-radius: 10px;",
  pressAnimation:
    "&:active {transform: translateY(1px); /* Subtle press effect */}",
};
