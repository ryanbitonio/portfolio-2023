import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";
const Search = () => {
  return (
    <InputGroup size="sm" variant="filled">
      <InputLeftElement pointerEvents="none" fontSize="4xl">
        <RiSearchLine color="gray.300" />
      </InputLeftElement>
      <Input
        focusBorderColor="gray.600"
        fontSize="2xl"
        type="tel"
        placeholder="Search"
      />
    </InputGroup>
  );
};

export default Search;
