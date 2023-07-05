import React from "react";
import { Button, keyframes, useToast } from "@chakra-ui/react";

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
    <Button variant="unstyled" onClick={toast} type="button">
      {children}
    </Button>
  );
};

export default Toast;
