import React, { memo } from "react";
import {
  Dialog,
  DialogTitle,
  Stack,
  Avatar,
  ListItem,
  Typography,
  Button,
} from "@mui/material";
import { sampleNotifictions } from "../../constants/sampleData";

const Notifications = () => {
  const friendRequestHandler = ({ _id, accept }) => {
    console.log("id : ", _id, "acceptance status : ", accept);
  };
  return (
    <Dialog open>
      <Stack p={{ xs: "1rem", sm: "2rem" }} maxWidth={"25rem"}>
        <DialogTitle>Notifications</DialogTitle>

        {sampleNotifictions.length > 0 ? (
          sampleNotifictions.map((i) => (
            <NotificationItems
              sender={i.sender}
              _id={i._id}
              handler={friendRequestHandler}
              key={i._id}
            />
          ))
        ) : (
          <Typography textAlign={"center"}>0 Notifications</Typography>
        )}
      </Stack>
    </Dialog>
  );
};

const NotificationItems = memo(({ sender, _id }) => {
  const { name, avatar } = sender;
  return (
    <ListItem>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={"1rem"}
        width={"100%"}
      >
        <Avatar />
        <Typography
          variant="outlined"
          sx={{
            flexGrow: 1,
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {`${name} sent you a friend request`}
        </Typography>
        <Stack
          direction={{
            xs: "column",
            sm: "row",
          }}
        >
          <Button onClick={() => handler({ _id, accept: true })}>Accept</Button>
          <Button color="error" onClick={() => handler({ _id, accept: true })}>
            Reject
          </Button>
        </Stack>
      </Stack>
    </ListItem>
  );
});

export default Notifications;
