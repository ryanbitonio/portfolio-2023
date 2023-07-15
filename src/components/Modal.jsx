import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
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

      <Modal size="xl" isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader fontSize="5xl">{title}</ModalHeader>
          <ModalCloseButton fontSize="md" />
          <ModalBody>
            <ConnectForm />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CustomModal;
