import {
  Input,
  InputGroup,
  InputLeftElement,
  useColorMode,
} from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

const Search = ({ onInput, tertiaryBg }) => {
  const { colorMode } = useColorMode();
  const hoverColor = colorMode === "dark" ? "#ffffff0f" : "#fefefe";

  return (
    <InputGroup size="sm" variant="filled">
      <InputLeftElement pointerEvents="none" fontSize="4xl">
        <RiSearchLine color="gray.300" />
      </InputLeftElement>
      <Input
        _hover={{
          bg: hoverColor,
        }}
        bg={tertiaryBg}
        onInput={onInput}
        borderRadius={20}
        focusBorderColor="gray.500"
        fontSize="2xl"
        type="search"
        placeholder="Search in Your Library"
        fontWeight={300}
      />
    </InputGroup>
  );
};

export default Search;
