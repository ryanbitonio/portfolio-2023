import {
  Heading,
  Stack,
  Text,
  IconButton,
  Box,
  Button,
} from "@chakra-ui/react";
import { HiOutlineMail } from "react-icons/hi";

const Connect = ({ color, secondaryColor }) => {
  return (
    <Box>
      <Stack gap={20} color={color} h="82vh" align="center" justify="center">
        <Stack textAlign="center">
          <Heading fontSize="9xl" letterSpacing="tight">
            Connect
          </Heading>
          <Text fontSize="5xl" fontWeight="300">
            I'd love to connect — let's have a cup of coffee and talk about your
            <br />
            exciting new project, an upcoming talk, or just for fun. <br />
            Feel free to reach out.
          </Text>
        </Stack>
        <Button
          aria-label="Send email"
          size="lg"
          fontSize="4xl"
          leftIcon={<HiOutlineMail />}
        >
          Email
        </Button>
      </Stack>
    </Box>
  );
};

export default Connect;
