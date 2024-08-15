import { useRef } from "react";

import { IconButton, Stack } from "@mui/material";
import {
  AttachFile as AttachFileIcon,
  Send as SendIcon,
} from "@mui/icons-material";

import AppLayout from "../components/layout/AppLayout";
import { slate, white, dark } from "./../constants/color";
import { InputBox } from "../components/styles/styledComponents";
import FileMenu from "../components/dialogs/FileMenu";
import { sampleMessages } from "../constants/sampleData";
import MessageComponent from "../components/shared/MessageComponent";

const user = {
  _id: "asdf",
  name: "Parveen",
};

const Chat = () => {
  const containerRef = useRef(null);

  return (
    <>
      <Stack
        ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={slate}
        height={"90%"}
        sx={{
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {sampleMessages.map((i) => (
          <MessageComponent key={i._id} message={i} user={user} />
        ))}
      </Stack>

      <form
        style={{
          height: "10%",
        }}
      >
        <Stack
          direction={"row"}
          height={"100%"}
          padding={"1rem"}
          alignItems={"center"}
          position={"relative"}
        >
          <IconButton
            sx={{
              position: "absolute",
              left: "1.5rem",
              rotate: "30deg",
            }}
          >
            <AttachFileIcon />
          </IconButton>

          <InputBox placeholder="Type Message here..." />

          <IconButton
            type="submit"
            sx={{
              backgroundColor: slate,
              color: white,
              marginLeft: "1rem",
              padding: "0.5rem",
              "&:hover": {
                bgcolor: dark,
              },
            }}
          >
            <SendIcon />
          </IconButton>
        </Stack>
        <FileMenu />
      </form>
    </>
  );
};

export default AppLayout()(Chat);
