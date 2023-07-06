import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { RiSearchLine } from "react-icons/ri";

const Search = ({ onSearch }) => {
  const ref = useRef(null);

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup size="sm" variant="filled">
        <InputLeftElement pointerEvents="none" fontSize="4xl">
          <RiSearchLine color="gray.300" />
        </InputLeftElement>
        <Input
          ref={ref}
          borderRadius={20}
          focusBorderColor="gray.600"
          fontSize="2xl"
          type="tel"
          placeholder="Search in Your Library"
        />
      </InputGroup>
    </form>
  );
};

export default Search;
