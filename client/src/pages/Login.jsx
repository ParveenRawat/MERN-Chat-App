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
import { MdCameraAlt } from "react-icons/md";
import { VisuallyHiddenInput } from "../components/styles/styledComponents";
import { useInputValidation, useFileHandler } from "6pp";
import { usernameValidator } from "../utils/validators";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleLogin = () => setIsLogin((prev) => !prev);

  const name = useInputValidation("");
  const bio = useInputValidation("");
  const username = useInputValidation("", usernameValidator);
  const password = useInputValidation();
  const avatar = useFileHandler("single");
  const handleLogin = (e) => {
    e.preventDefault();
  };
  const handleSignUp = (e) => {
    e.preventDefault();
  };

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
          {isLogin ? (
            <>
              <Typography variant="h5">Login</Typography>
              <form
                style={{
                  width: "100%",
                  marginTop: "1rem",
                }}
                onSubmit={handleLogin}
              >
                <TextField
                  required
                  fullWidth
                  label="Name"
                  variant="outlined"
                  margin="normal"
                  value={name.value}
                  onChange={name.changeHandler}
                ></TextField>

                <TextField
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  variant="outlined"
                  margin="normal"
                  value={password.value}
                  onChange={password.changeHandler}
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
                <Typography fullWidth textAlign={"center"} mt={"1rem"}>
                  OR
                </Typography>
                <Button variant="text" fullWidth onClick={toggleLogin}>
                  SignUp
                </Button>
              </form>
            </>
          ) : (
            <>
              <Typography variant="h5">SignUp</Typography>
              <form
                style={{
                  width: "100%",
                  marginTop: "1rem",
                }}
                onSubmit={handleSignUp}
              >
                <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                  <Avatar
                    sx={{
                      width: "10rem",
                      height: "10rem",
                      objectFit: "contain",
                    }}
                    src={avatar.preview}
                  ></Avatar>
                  <IconButton
                    sx={{
                      position: "absolute",
                      bottom: "0",
                      right: "0",
                      color: "rgba(50,50,50,0.5)",
                      bgcolor: "rgba(150,150,150,0.1)",
                      ":hover:": {
                        bgcolor: "rgba(50,50,50,0.3)",
                        color: "rgba(50,50,50,0.5)",
                      },
                    }}
                    component="label"
                  >
                    <MdCameraAlt />
                    <VisuallyHiddenInput
                      type="file"
                      onChange={avatar.changeHandler}
                    />
                  </IconButton>
                </Stack>
                {avatar.error && (
                  <Typography
                    m={"1rem"}
                    width={"fit-content"}
                    display={"block"}
                    variant="caption"
                    color="error"
                  >
                    {avatar.error}
                  </Typography>
                )}

                <TextField
                  required
                  fullWidth
                  label="Name"
                  variant="outlined"
                  margin="normal"
                  value={name.value}
                  onChange={name.changeHandler}
                ></TextField>
                <TextField
                  required
                  fullWidth
                  label="Username"
                  variant="outlined"
                  margin="normal"
                  value={username.value}
                  onChange={username.changeHandler}
                ></TextField>
                {username.error && (
                  <Typography color="error" variant="caption">
                    {username.error}
                  </Typography>
                )}
                <TextField
                  required
                  fullWidth
                  label="Bio"
                  variant="outlined"
                  margin="normal"
                  value={bio.value}
                  onChange={bio.changeHandler}
                ></TextField>
                <TextField
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  variant="outlined"
                  margin="normal"
                  value={password.value}
                  onChange={password.changeHandler}
                ></TextField>
                {password.error && (
                  <Typography color="error" variant="caption">
                    {password.error}
                  </Typography>
                )}

                <Button
                  sx={{ marginTop: "1rem" }}
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                >
                  SignUp
                </Button>
                <Typography fullWidth textAlign={"center"} mt={"1rem"}>
                  OR
                </Typography>
                <Button variant="text" fullWidth onClick={toggleLogin}>
                  Login instead
                </Button>
              </form>
            </>
          )}
        </Paper>
      </Container>
    </div>
  );
};

export default Login;
