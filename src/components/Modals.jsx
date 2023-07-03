import { AiFillPlayCircle } from "react-icons/ai";
import {
  Button,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
} from "@chakra-ui/react";

import { useDisclosure } from "@chakra-ui/react";

const Modals = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        _focus={{
          boxShadow: "none",
        }}
        variant="link"
        cursor="default"
      >
        <AiFillPlayCircle
          className="play"
          onClick={onOpen}
          cursor="pointer"
          size={34}
        />
      </Button>
      <Modal
        scrollBehavior="inside"
        onClose={onClose}
        size="full"
        isOpen={isOpen}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton
            _focus={{
              boxShadow: "none",
            }}
            bg="gray.700"
          />
          <video
            autoPlay
            style={{
              height: "100vh",
              objectFit: "cover",
            }}
          >
            <source src="/src/assets/icons/Footer/reel.mp4" type="video/mp4" />
          </video>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Modals;
