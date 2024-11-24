import React, { useState } from "react";
// import Layout from "./components/Layout";
// import BookList from "./components/BookList";
// import BookForm from "./components/BookForm";
import "./App.css";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import AddBookDialog from "./components/AddBookDialog";
import Layout from "./components/Layout";
import BookList from "./components/BookList";

const App: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleToggleAddBookDialog = () =>
    setIsDialogOpen((previousValue) => !previousValue);

  return (
    <>
      <AddBookDialog
        open={isDialogOpen}
        handleToggleAddBookDialog={handleToggleAddBookDialog}
      />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Personal Library Manager
            </Typography>
            <Button
              color="inherit"
              variant="outlined"
              onClick={handleToggleAddBookDialog}
            >
              Add book
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Layout>
        <BookList />
      </Layout>
    </>
  );
};

export default App;
