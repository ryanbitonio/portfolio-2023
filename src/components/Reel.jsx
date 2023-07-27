import {
  AbsoluteCenter,
  Button,
  Modal,
  ModalCloseButton,
  ModalContent,
  Spinner,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { PiPlayCircleFill } from "react-icons/pi";

const Reel = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();
  const [isLoading, setLoading] = useState(true);

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
          color={colorMode === "dark" ? "white" : "black"}
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
            color="white"
          />

          {isLoading && (
            <AbsoluteCenter>
              <Spinner size="xl" />
            </AbsoluteCenter>
          )}
          <video
            onCanPlay={() => setLoading(false)}
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
