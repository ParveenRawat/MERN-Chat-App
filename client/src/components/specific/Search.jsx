import { useInputValidation } from "6pp";
import {
  Dialog,
  DialogTitle,
  Stack,
  TextField,
  InputAdornment,
  List,
  ListItem,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import React, { useState } from "react";
import UserItem from "../shared/UserItem";
import { sampleUsers } from "../../constants/sampleData";

const Search = () => {
  const addFriendHandler = (id) => {
    console.log("add friend : ", id);
  };
  let isLoadingSendFriendRequest = false;

  const [users, setUsers] = useState(sampleUsers);

  const search = useInputValidation("");
  return (
    <Dialog open>
      <Stack padding={"2rem"} direction={"column"} width={"25rem"}>
        <DialogTitle>Find people</DialogTitle>
        <TextField
          label=""
          value={search.value}
          onChange={search.changeHandler}
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <List>
          {users.map((user) => (
            <ListItem>
              <UserItem
                user={user}
                key={user._id}
                handler={addFriendHandler}
                handlerIsLoading={isLoadingSendFriendRequest}
              />
            </ListItem>
          ))}
        </List>
      </Stack>
    </Dialog>
  );
};

export default Search;
