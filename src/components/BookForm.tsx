import React from "react";
import { useFormik } from "formik";
import { TextField, Stack, Box, Button } from "@mui/material";
import { addBook, updateBook } from "../services/api";
import { BookDetails } from "../types/book";

interface BookFormProps {
  initialValues: BookDetails;
  handleToggleEditMode: () => void;
}

const BookForm: React.FC<BookFormProps> = ({
  initialValues,
  handleToggleEditMode,
}) => {
  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      try {
        if (values.id) {
          await updateBook(values.id.toString(), values);
          handleToggleEditMode();
        } else {
          await addBook(values);
          handleToggleEditMode();
        }
      } catch (error) {
        console.error("Failed to save book", error);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack spacing={2}>
        <TextField
          name="title"
          label="Title"
          value={formik.values.title}
          onChange={formik.handleChange}
        />
        <TextField
          name="author"
          label="Author"
          value={formik.values.author}
          onChange={formik.handleChange}
        />
        <TextField
          name="genre"
          label="Genre"
          value={formik.values.genre}
          onChange={formik.handleChange}
        />
        <TextField
          name="description"
          label="Description"
          multiline
          rows={3}
          value={formik.values.description}
          onChange={formik.handleChange}
        />
        <Box sx={{ justifyContent: "flex-end", gap: "16px", display: "flex" }}>
          <Button variant="contained" type="submit">
            Save
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={handleToggleEditMode}
          >
            Cancel
          </Button>
        </Box>
      </Stack>
    </form>
  );
};

export default BookForm;
