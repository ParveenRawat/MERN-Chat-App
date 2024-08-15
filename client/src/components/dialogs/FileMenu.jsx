import React from "react";
import { Menu } from "@mui/material";

const FileMenu = ({ anchorEl }) => {
  return (
    <Menu anchorEl={anchorEl} open={false}>
      <div style={{ width: "10rem" }}></div>
    </Menu>
  );
};

export default FileMenu;
