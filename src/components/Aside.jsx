import {
  HStack,
  Icon,
  Text,
  Flex,
  Stack,
  Heading,
  Image,
  Box,
} from "@chakra-ui/react";
import { RiAppsLine, RiAppsFill } from "react-icons/ri";
import courses from "../../data/courses";
import Search from "./Search";
import { useState } from "react";

const Aside = ({ onSearch }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Stack spacing={5}>
      <HStack
        onClick={() => setSidebarOpen(!isSidebarOpen)}
        color={isSidebarOpen ? "white" : "gray.300"}
        _hover={{
          color: "white",
          cursor: "pointer",
        }}
      >
        <Icon boxSize={6} mr={3} as={isSidebarOpen ? RiAppsFill : RiAppsLine} />
        <Text fontWeight="semibold">My Library</Text>
      </HStack>
      <Box pr={6}>
        <Search onSearch={onSearch} />
      </Box>
      <Box mt={1}>
        {courses.map(({ id, title, description, thumbnail }) => (
          <HStack
            _hover={{
              bg: "gray.600",
              cursor: "pointer",
            }}
            key={id}
            spacing={5}
            mb={2}
          >
            <Image objectFit="cover" src={thumbnail} alt={title} />
            <Flex overflow="hidden" gap={1} direction={"column"}>
              <Heading isTruncated fontSize="4xl" fontWeight="400">
                {title}
              </Heading>
              <Text isTruncated fontSize="3xl" fontWeight="300" opacity="60%">
                {description}
              </Text>
            </Flex>
          </HStack>
        ))}
      </Box>
    </Stack>
  );
};

export default Aside;
