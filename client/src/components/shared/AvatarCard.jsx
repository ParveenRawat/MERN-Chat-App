import { Box, Stack, Avatar, AvatarGroup } from "@mui/material";
import React from "react";
import { transformImage } from "./../../lib/features";

const AvatarCard = ({ avatar = [], max = 4 }) => {
  return (
    <Stack direction={"row"} spacing={0.5}>
      <AvatarGroup max={max} sx={{ position: "relative" }}>
        <Box width={"5rem"} height={"3rem"}>
          {avatar.map((i, index) => (
            <Avatar
              key={Math.random() * 10000}
              src={transformImage(i)}
              alt={`Avatar ${index}`}
              sx={{
                width: "2rem",
                height: "2rem",
                position: "absolute",
                left: {
                  xs: `${1 + index}rem`,
                  sm: `${1 + index}rem`,
                },
              }}
            />
          ))}
        </Box>
      </AvatarGroup>
    </Stack>
  );
};

export default AvatarCard;
