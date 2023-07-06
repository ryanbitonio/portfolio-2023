import {
  Box,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
import { RiAppsFill, RiAppsLine } from "react-icons/ri";
import courses from "../../data/courses";
import Search from "./Search";
import Tooltip from "./Tooltip";

const Aside = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = event => {
    setSearchValue(event.target.value);
  };

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Stack h="100%" spacing={5}>
      <HStack justify="space-between">
        <Tooltip placement="top-start" label="Collapse Your Library">
          <HStack
            w="max-content"
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            color={isSidebarOpen ? "white" : "gray.300"}
            _hover={{
              color: "white",
              cursor: "pointer",
            }}
          >
            <Icon
              boxSize={6}
              mr={3}
              as={isSidebarOpen ? RiAppsFill : RiAppsLine}
            />
            <Text fontWeight="semibold">My Library</Text>
          </HStack>
        </Tooltip>
        <IconButton
          isRound
          bgSize="50%"
          mr={6}
          variant="ghost"
          color="#B3B3B3"
          icon={<HiOutlineArrowSmallLeft size={24} />}
        />
      </HStack>
      <Box pr={6}>
        <Search onInput={handleSearchChange} />
      </Box>
      <Box overflowY="auto">
        {filteredCourses.map(({ id, title, description, thumbnail }) => (
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
            <Flex overflow="hidden" gap={1} direction="column">
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
