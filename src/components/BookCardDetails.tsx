import React, { useState } from "react";
import { Box, CardContent, IconButton, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import BookForm from "./BookForm";
import CardWrapper from "./CardWrapper";
import { deleteBook } from "../services/api";

type TaskCardProps = {
  id?: number;
  title: string;
  author: string;
  description: string;
  genre: string;
};

const BookCardDetails: React.FC<TaskCardProps> = ({
  id,
  title,
  author,
  genre,
  description,
}) => {
  const [isEditModeEnabled, setIsEditModeEnabled] = useState(false);

  const handleToggleEditMode = () =>
    setIsEditModeEnabled((previousValue) => !previousValue);

  const handleDeleteBook = () => deleteBook(id?.toString());

  return (
    <>
      {isEditModeEnabled ? (
        <CardWrapper>
          <BookForm
            handleToggleEditMode={handleToggleEditMode}
            initialValues={{
              author,
              description,
              genre,
              title,
              id,
            }}
          />
        </CardWrapper>
      ) : (
        <CardWrapper>
          <Box
            sx={{
              justifyContent: "flex-end",
              display: "flex",
              gap: 1,
            }}
          >
            <IconButton
              onClick={handleToggleEditMode}
              size="small"
              sx={{ color: "#1976d2" }}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              onClick={handleDeleteBook}
              size="small"
              sx={{ color: "#d32f2f" }}
            >
              <DeleteIcon />
            </IconButton>
          </Box>

          <CardContent
            sx={{
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <Typography variant="h5">{title}</Typography>

            <Typography variant="body2" color="text.secondary">
              <strong>Author:</strong> {author}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Genre:</strong> {genre}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Description:</strong> {description}
            </Typography>
          </CardContent>
        </CardWrapper>
      )}
    </>
  );
};

export default BookCardDetails;
