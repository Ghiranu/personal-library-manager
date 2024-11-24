import { Card } from "@mui/material";
import { ReactNode } from "react";

const CardWrapper: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <Card
      sx={{
        position: "relative",
        borderRadius: 4,
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        padding: 2,
        backgroundColor: "#f9f9f9",
        maxWidth: 400,
        margin: "auto",
        "&:hover": {
          boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      {children}
    </Card>
  );
};

export default CardWrapper;
