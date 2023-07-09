import "./App.css";
import Home from "./components/Home";
import { useColorModeValue } from "@chakra-ui/react";

const App = () => {
  const bg = useColorModeValue("gray.100", "gray.900");
  const mainBg = useColorModeValue("gray.200", "gray.800");
  const footerBg = useColorModeValue("gray.200", "gray.900");
  const cardBg = useColorModeValue("gray.200", "gray.700");
  const cardHover = useColorModeValue("gray.300", "gray.600");
  const color = useColorModeValue("gray.800", "gray.100");

  return (
    <Home
      bg={bg}
      mainBg={mainBg}
      footerBg={footerBg}
      cardBg={cardBg}
      cardHover={cardHover}
      color={color}
    ></Home>
  );
};

export default App;
