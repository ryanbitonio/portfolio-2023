import { PiPlayCircleFill } from "react-icons/pi";
import {
  Button,
  Modal,
  ModalContent,
  ModalCloseButton,
} from "@chakra-ui/react";

import { useDisclosure } from "@chakra-ui/react";

const Reel = () => {
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
        <PiPlayCircleFill
          className="play"
          onClick={onOpen}
          cursor="pointer"
          size={50}
        />
      </Button>
      <Modal onClose={onClose} size="full" isOpen={isOpen}>
        <ModalContent>
          <ModalCloseButton
            zIndex={10}
            _hover={{
              bg: "white",
              color: "gray.700",
            }}
            _focus={{
              boxShadow: "none",
            }}
            bg="gray.700"
          />
          <video
            onEnded={() => onClose()}
            autoPlay
            style={{
              height: "100vh",
              objectFit: "cover",
            }}
          >
            <source
              src="https://res.cloudinary.com/dyeritf60/video/upload/v1688361631/reel_p9nn5y.mp4"
              type="video/mp4"
            />
          </video>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Reel;
