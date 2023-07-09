import {
  Box,
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useState } from "react";
import { RiAppsLine } from "react-icons/ri";
import courses from "../../data/courses";
import Search from "./Search";
import { motion, AnimatePresence } from "framer-motion";

const Aside = ({ color, secondaryColor, tertiaryBg }) => {
  const { colorMode } = useColorMode();
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = event => {
    setSearchValue(event.target.value);
  };

  const hoverColor = colorMode === "dark" ? "gray.600" : "#ebebeb";

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Stack h="100%" w="100%" spacing={5}>
      <HStack justify="space-between">
        <HStack w="max-content" color={secondaryColor}>
          <Icon boxSize={6} mr={3} as={RiAppsLine} />
          <Text fontWeight="semibold">My Library</Text>
        </HStack>
      </HStack>
      <Box pr={6}>
        <Search tertiaryBg={tertiaryBg} onInput={handleSearchChange} />
      </Box>
      <Box as={motion.div} layout overflowY="scroll" overflowX="hidden" mt={1}>
        {filteredCourses.map(({ id, title, description, thumbnail }, index) => (
          <AnimatePresence key={index}>
            <HStack
              key={id}
              animate={{ opacity: 1 }}
              initial={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              as={motion.div}
              layout
              _hover={{
                bg: hoverColor,
                cursor: "pointer",
              }}
              spacing={5}
              mb={2}
            >
              <Image objectFit="cover" src={thumbnail} alt={title} />
              <Flex overflow="hidden" gap={1} direction="column">
                <Heading
                  isTruncated
                  fontSize="4xl"
                  fontWeight="400"
                  color={color}
                >
                  {title}
                </Heading>
                <Text
                  isTruncated
                  fontSize="3xl"
                  fontWeight="300"
                  color={secondaryColor}
                  opacity="70%"
                >
                  {description}
                </Text>
              </Flex>
            </HStack>
          </AnimatePresence>
        ))}
      </Box>
    </Stack>
  );
};

export default Aside;
