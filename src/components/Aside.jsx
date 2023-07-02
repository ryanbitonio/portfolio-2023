import {
  HStack,
  Icon,
  Text,
  Flex,
  Stack,
  Heading,
  Image,
} from "@chakra-ui/react";
import { ReactComponent as LibraryIcon } from "../assets/icons/Aside/library.svg";
import courses from "../../data/courses";

const Aside = () => {
  return (
    <div>
      <HStack pb={5}>
        <Icon boxSize={5} mr={3} as={LibraryIcon} />
        <Text fontWeight="semibold" color="gray.300">
          Projects
        </Text>
      </HStack>
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
            <Heading isTruncated fontSize="4xl" fontWeight="semibold">
              {title}
            </Heading>
            <Text isTruncated fontSize="3xl" fontWeight="normal" opacity="60%">
              {description}
            </Text>
          </Flex>
        </HStack>
      ))}
    </div>
  );
};

export default Aside;
