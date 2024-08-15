import React, { useState } from "react";
import { useInputValidation } from "6pp";
import {
  Dialog,
  DialogTitle,
  Stack,
  Typography,
  Button,
  TextField,
} from "@mui/material";

import { sampleUsers } from "../../constants/sampleData";
import UserItem from "./../shared/UserItem";

const NewGroup = () => {
  const groupName = useInputValidation("");

  const submitHandler = () => {
    console.log("Group Submitted");
  };

  const closeHandler = () => {};

  const [members, setMembers] = useState(sampleUsers);
  const [selectedMembers, setSelectedMembers] = useState([]);

  const selectMemberHandler = (id) => {
    setSelectedMembers((prev) =>
      prev.includes(id)
        ? prev.filter((currentElement) => currentElement !== id)
        : [...prev, id],
    );
  };
  console.log(selectedMembers);

  return (
    <Dialog open onClose={closeHandler}>
      <Stack p={{ xs: "1rem", sm: "3rem" }} spacing={"2rem"} width={"25rem"}>
        <DialogTitle textAlign={"center"} variant={"h4"}>
          New Group
        </DialogTitle>

        <TextField
          label="Group Name"
          value={groupName.value}
          onChange={groupName.changeHandler}
        />
        <Typography variant="body1">Members</Typography>

        <Stack>
          {members.map((user) => (
            <UserItem
              user={user}
              key={user._id}
              handler={selectMemberHandler}
              isAdded={selectedMembers.includes(user._id)}
            />
          ))}
        </Stack>
        <Stack direction={"row"} justifyContent={"space-evenly"}>
          <Button variant="outlined" color="error" size="large">
            Cancel
          </Button>
          <Button variant="contained" size="large" onClick={submitHandler}>
            Create
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default NewGroup;
