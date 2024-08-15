import React, { useState } from "react";
import {
  Container,
  Paper,
  TextField,
  Stack,
  Typography,
  Button,
  Avatar,
  IconButton,
} from "@mui/material";
import { useInputValidation } from "6pp";
import { Navigate } from "react-router-dom";

const isAdmin = true;

const AdminLogin = () => {
  const secretKey = useInputValidation();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("signedIn");
  };

  if (isAdmin) return <Navigate to={"/admin/dashboard"} />;
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(rgba(200,200,200,0.1),rgba(100,100,200,0.9))",
      }}
    >
      <Container
        component={"main"}
        maxWidth="xs"
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">Admin Login</Typography>
          <form
            style={{
              width: "100%",
              marginTop: "1rem",
            }}
            onSubmit={submitHandler}
          >
            <TextField
              required
              fullWidth
              label="Secret Key"
              type="password"
              variant="outlined"
              margin="normal"
              value={secretKey.value}
              onChange={secretKey.changeHandler}
            ></TextField>
            <Button
              sx={{ marginTop: "1rem" }}
              variant="contained"
              color="primary"
              fullWidth
              type="submit"
            >
              Login
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default AdminLogin;
