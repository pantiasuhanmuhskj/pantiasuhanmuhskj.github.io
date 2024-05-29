"use client";

import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Tooltip from "@mui/material/Tooltip";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Zoom from "@mui/material/Zoom";
import Link from "next/link";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00c853", // Your desired primary color
      contrastText: "#fff", // Optional: contrast text color for readability
    },
  },
});

const FloatingAction = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        className="xl:bottom-5 xl:right-5 z-60 "
        sx={{
          position: "fixed",
          bottom: 100,
          right: 16,
          "& > :not(style)": { m: 1 },
          [theme.breakpoints.up("xl")]: {
            bottom: 240,
            right: 24,
          },
        }}>
        <Tooltip
          className="z-50"
          title="Hubungi kami via WhatsApp!"
          placement="left"
          TransitionComponent={Zoom}>
          <Link href="https://wa.me/+6287736060452" passHref>
            <Fab
              className="z-50"
              size="medium"
              color="primary"
              aria-label="whatsapp">
              <WhatsAppIcon />
            </Fab>
          </Link>
        </Tooltip>
      </Box>
    </ThemeProvider>
  );
};

export default FloatingAction;
