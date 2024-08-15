import React from "react";
import Header from "./Header";
import Title from "../shared/Title";
import ChatList from "./../specific/ChatList.jsx";
import { Grid } from "@mui/material";
import { sampleChats } from "../../constants/sampleData.js";
import { useParams } from "react-router-dom";
import Profile from "../specific/Profile.jsx";
import { dark } from "../../constants/color.js";

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    const params = useParams();
    const chatId = params.chatId;

    const handleDeleteChat = (e, _id, groupChat) => {
      e.preventDefault();
      console.log("Deleted Chat", _id, groupChat);
    };
    return (
      <>
        <Title />
        <Header />

        <Grid
          container
          height={{ xs: "calc(100vh - 3rem)", sm: "calc(100vh - 4rem)" }}
        >
          <Grid
            item
            sm={4}
            md={3}
            sx={{
              display: { xs: "none", sm: "block" },
            }}
            height={"100%"}
          >
            <ChatList
              chats={sampleChats}
              chatId={chatId}
              handleDeleteChat={handleDeleteChat}
            />
          </Grid>

          <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
            <WrappedComponent {...props} />
          </Grid>

          <Grid
            item
            md={4}
            lg={3}
            height={"100%"}
            sx={{
              display: { xs: "none", md: "block" },
              padding: "2rem",
              bgcolor: dark,
            }}
          >
            <Profile />
          </Grid>
        </Grid>
      </>
    );
  };
};

export default AppLayout;
