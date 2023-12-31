import { useColorModeValue } from "@chakra-ui/react";
import AppContext from "./AppContext";

const AppProvider = ({ children }) => {
  const bg = useColorModeValue("gray.50", "gray.900");
  const secondaryBg = useColorModeValue("gray.100", "gray.800");
  const tertiaryBg = useColorModeValue("#ececec", "gray.700");
  const heroBg = useColorModeValue(
    "linear-gradient(180deg, #FFFFFF, #e7e7e7)",
    "linear-gradient(180deg, rgba(131, 131, 131, 0.8) -7.68%, rgba(44, 85, 72, 0) 117.6%)"
  );
  const color = useColorModeValue("gray.600", "gray.100");
  const secondaryColor = useColorModeValue("gray.600", "gray.300");
  const tertiaryColor = useColorModeValue("gray.400", "gray.300");
  const navColor = useColorModeValue("gray.600", "gray.100");

  return (
    <AppContext.Provider
      value={{
        bg,
        secondaryBg,
        tertiaryBg,
        heroBg,
        color,
        secondaryColor,
        tertiaryColor,
        navColor,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
