import React from "react";
import { Helmet } from "react-helmet-async";

const Title = ({
  title = "Chatter",
  description = "Chat App called Chatter",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Title;
