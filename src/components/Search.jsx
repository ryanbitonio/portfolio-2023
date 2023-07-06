import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

const Search = ({ onInput }) => {
  return (
    <InputGroup size="sm" variant="filled">
      <InputLeftElement pointerEvents="none" fontSize="4xl">
        <RiSearchLine color="gray.300" />
      </InputLeftElement>
      <Input
        onInput={onInput}
        borderRadius={20}
        focusBorderColor="gray.600"
        fontSize="2xl"
        type="search"
        placeholder="Search in Your Library"
        fontWeight={300}
      />
    </InputGroup>
  );
};

export default Search;
