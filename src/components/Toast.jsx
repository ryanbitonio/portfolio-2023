import React from "react";
import { Box, Button, keyframes, useToast } from "@chakra-ui/react";

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
    <Box variant="unstyled" w="min-content" onClick={toast} type="button">
      {children}
    </Box>
  );
};

export default Toast;
