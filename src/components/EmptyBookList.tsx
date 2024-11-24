import CardWrapper from "./CardWrapper";
import { Typography } from "@mui/material";

const EmptyBookList = () => {
  return (
    <CardWrapper>
      <Typography
        variant="h5"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        No books found.
      </Typography>
    </CardWrapper>
  );
};

export default EmptyBookList;
