import React from "react";
import { useBooks } from "../containers/useBooks";
import { Box, CircularProgress, Grid2 } from "@mui/material";
import BookCardDetails from "./BookCardDetails";
import EmptyBookList from "./EmptyBookList";

const BookList: React.FC = () => {
  const { books, isLoading, error } = useBooks();

  const areNoBooksCreated = books.length === 0;

  if (isLoading) return <CircularProgress size="3rem" />;
  if (error) return <p>Error loading books.</p>;
  if (areNoBooksCreated) return <EmptyBookList />;

  return (
    <Box sx={{ mt: 4 }}>
      <Grid2 container spacing={3}>
        {books.map((book) => (
          <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 4, xl: 4 }} key={book.id}>
            <BookCardDetails
              id={book.id}
              author={book.author}
              genre={book.genre}
              title={book.title}
              description={book.description}
            />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default BookList;
