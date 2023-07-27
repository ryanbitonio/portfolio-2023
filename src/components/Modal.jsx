import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import ConnectForm from "./ConnectForm";

const CustomModal = ({
  variant,
  aria,
  size,
  fontSize,
  leftIcon,
  label,
  title,
}) => {
  const OverlayOne = () => (
    <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);

  return (
    <>
      <Button
        variant={variant}
        aria-label={aria}
        size={size}
        fontSize={fontSize}
        leftIcon={leftIcon}
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        {label}
      </Button>

      <Modal size="lg" isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader py={6} fontSize="5xl">
            {title}
          </ModalHeader>
          <ModalCloseButton fontSize="md" />
          <ModalBody>
            <ConnectForm onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CustomModal;
