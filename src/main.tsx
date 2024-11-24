import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const THEME = createTheme({
  typography: {
    fontFamily: `"Parkinsans",sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={THEME}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
