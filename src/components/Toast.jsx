import React from "react";
import { Box, Button, keyframes, useToast } from "@chakra-ui/react";
import Tooltip from "./Tooltip";

const Toast = ({ children, like }) => {
  const toast = useToast({
    description: like ? "Added to Favorites" : "Removed from Favorites",
    position: "bottom",
    duration: 2000,
    containerStyle: {
      position: "fixed",
      bottom: "110",
    },
  });

  return (
    <Tooltip placement="top" label="Add to your Favorites">
      <span bg="red" w="min-content" onClick={toast} type="button">
        {children}
      </span>
    </Tooltip>
  );
};

export default Toast;
