import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { HiOutlineMail } from "react-icons/hi";
import AppContext from "./AppContext";
import CustomModal from "./Modal";

const Connect = () => {
  const { color } = useContext(AppContext);

  return (
    <Box>
      <Stack gap={20} color={color} h="82vh" align="center" justify="center">
        <Stack textAlign="center">
          <Heading
            fontSize={"clamp(2.5rem, 70% + 5vw, 5rem)"}
            letterSpacing="tight"
          >
            Connect
          </Heading>
          <Text fontSize={"clamp(1rem, 70% + 1vw, 1.563rem)"} fontWeight="300">
            I'd love to connect — let's have a cup of coffee and talk about your
            <br />
            exciting new project, an upcoming talk, or just for fun. <br />
            Feel free to reach out.
          </Text>
        </Stack>
        <CustomModal
          title="Send me a message"
          label="Email"
          variant="outline"
          aria-label="Send email"
          size="lg"
          fontSize="4xl"
          leftIcon={<HiOutlineMail />}
        />
      </Stack>
    </Box>
  );
};

export default Connect;
