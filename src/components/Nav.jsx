import {
  Link,
  List,
  ListIcon,
  ListItem,
  Hide,
  Center,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";
import { useState } from "react";
import menuList from "../../data/menu";

const Nav = ({ spacing, fontSize, tertiaryColor, navColor }) => {
  const [selectedMenu, setSelectedMenu] = useState(1);
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { colorMode } = useColorMode();

  const handleMenuClick = id => setSelectedMenu(id);
  const hoverColor = colorMode === "dark" ? "white" : "gray.800";

  return (
    <List size="lg" spacing={spacing} color={tertiaryColor}>
      {menuList.map(({ id, title, icon, activeIcon }, index) => (
        <ListItem
          fontSize={fontSize}
          key={index}
          _hover={{
            color: hoverColor,
          }}
        >
          {isMobile ? (
            <Center>
              <Link
                display="flex"
                alignItems="center"
                color={selectedMenu === id ? navColor : "default"}
                _hover={{
                  textDecoration: "none",
                }}
                onClick={() => handleMenuClick(id)}
              >
                <Hide below="md">
                  <ListIcon
                    boxSize={6}
                    as={selectedMenu === id ? activeIcon : icon}
                  />
                </Hide>
                {title}
              </Link>
            </Center>
          ) : (
            <Link
              display="flex"
              alignItems="center"
              color={selectedMenu === id ? navColor : "default"}
              _hover={{
                textDecoration: "none",
              }}
              onClick={() => handleMenuClick(id)}
            >
              <Hide below="md">
                <ListIcon
                  boxSize={6}
                  as={selectedMenu === id ? activeIcon : icon}
                />
              </Hide>
              {title}
            </Link>
          )}
        </ListItem>
      ))}
    </List>
  );
};

export default Nav;
