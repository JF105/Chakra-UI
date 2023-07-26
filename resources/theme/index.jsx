import { extendTheme, Heading, Button } from "@chakra-ui/react";

const fonts = {
  heading: "Reboto, sans-serif",
  body: "Reboto, sans-serif",
};
const Button = {
  variants: {
    outline: {
      borderRadius: "0",
      textTransform: "uppercase",
      fontWeight: "light",
      letterSpacing: "1px",
      color: "white",
      _hover: {
        color: "black",
      },
    },
  },
};

const Headign = {
  variants: {
    banner: {
      textTransform: "uppercase",
      fontWeingt: "light",
      letterSpacing: "5px",
      color: "white",
    },
  },
};

export const theme = extendTheme({ fonts, components: { Button, Heading } });
