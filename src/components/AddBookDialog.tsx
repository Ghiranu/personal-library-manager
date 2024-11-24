import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import React from "react";
import BookForm from "./BookForm";
import { INITIAL_VALUES } from "../utils/constants";

type AddBookDialogProps = {
  open: boolean;
  handleToggleAddBookDialog: () => void;
};

const AddBookDialog: React.FC<AddBookDialogProps> = ({
  open,
  handleToggleAddBookDialog,
}) => {
  return (
    <React.Fragment>
      <Dialog
        open={open}
        sx={{ padding: "24px", height: "auto" }}
        onClose={handleToggleAddBookDialog}
      >
        <DialogTitle>Add book</DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            paddingTop: "8px !important",
            flexDirection: "column",
            gap: "16px",
            width: "400px",
          }}
        >
          <BookForm
            initialValues={INITIAL_VALUES}
            handleToggleEditMode={handleToggleAddBookDialog}
          />
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default AddBookDialog;
