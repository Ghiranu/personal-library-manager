import React from "react";
import { Container } from "@mui/material";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Container maxWidth="xl" sx={{ mt: 4 }}>
    {children}
  </Container>
);

export default Layout;
