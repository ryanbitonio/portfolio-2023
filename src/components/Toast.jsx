import { Box, useToast } from "@chakra-ui/react";
import React from "react";

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
