import {
  Box,
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useContext, useState } from "react";
import { RiAppsLine } from "react-icons/ri";
import courses from "../../data/courses";
import AppContext from "./AppContext";
import Search from "./Search";

const Aside = () => {
  const [searchValue, setSearchValue] = useState("");
  const { tertiaryBg, secondaryColor, color } = useContext(AppContext);

  const handleSearchChange = event => {
    setSearchValue(event.target.value);
  };

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Stack h="100%" w="100%" spacing={5}>
      <HStack justify="space-between">
        <HStack w="max-content" color={secondaryColor}>
          <Icon boxSize={6} mr={3} as={RiAppsLine} />
          <Text fontWeight="700">Courses Taken</Text>
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
              spacing={5}
              mb={2}
            >
              <Image objectFit="cover" src={thumbnail} alt={title} />
              <Flex overflow="hidden" gap={1} direction="column">
                <Heading
                  isTruncated
                  fontSize="4xl"
                  fontWeight="600"
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
