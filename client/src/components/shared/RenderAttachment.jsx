import React from "react";
import { transformImage } from "./../../lib/features.js";
import { FileOpen as FileOpenIcon } from "@mui/icons-material";

const RenderAttachment = (file, url) => {
  switch (file) {
    case "video":
      return <video src={url} preload="none" width={"200px"} controls></video>;
    case "image":
      return (
        <img
          src={transformImage(url, 200)}
          alt="Attachment"
          width="400px"
          height="300px"
          style={{
            objectFit: "contain",
          }}
        />
      );
    case "audio":
      return <audio src={url} preload="none" controls />;
    default:
      return (
        <img
          src={transformImage(url, 200)}
          alt="Attachment"
          width="400px"
          height="300px"
          style={{
            objectFit: "contain",
          }}
        />
      );
  }
};

export default RenderAttachment;
