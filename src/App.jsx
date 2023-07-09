import "./App.css";
import Home from "./components/Home";
import { useColorModeValue } from "@chakra-ui/react";

const App = () => {
  const bg = useColorModeValue("gray.50", "gray.900");
  const secondaryBg = useColorModeValue("gray.100", "gray.800");
  const tertiaryBg = useColorModeValue("#ececec", "gray.700");
  const color = useColorModeValue("gray.600", "gray.100");
  const secondaryColor = useColorModeValue("gray.600", "gray.300");
  const tertiaryColor = useColorModeValue("gray.400", "gray.300");
  const navColor = useColorModeValue("gray.600", "gray.100");

  return (
    <Home
      bg={bg}
      secondaryBg={secondaryBg}
      tertiaryBg={tertiaryBg}
      color={color}
      secondaryColor={secondaryColor}
      tertiaryColor={tertiaryColor}
      navColor={navColor}
    ></Home>
  );
};

export default App;
