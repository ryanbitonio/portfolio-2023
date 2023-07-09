import {
  Link,
  List,
  ListIcon,
  ListItem,
  Hide,
  Center,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState } from "react";
import menuList from "../../data/menu";

const Nav = ({ spacing, fontSize }) => {
  const [selectedMenu, setSelectedMenu] = useState(1);
  const isMobile = useBreakpointValue({ base: true, md: false });

  const handleMenuClick = id => setSelectedMenu(id);

  return (
    <List size="lg" spacing={spacing}>
      {menuList.map(({ id, title, icon, activeIcon }, index) => (
        <ListItem
          fontSize={fontSize}
          key={index}
          _hover={{
            color: "white",
          }}
        >
          {isMobile ? (
            <Center>
              <Link
                display="flex"
                alignItems="center"
                color={selectedMenu === id ? "white" : "default"}
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
              color={selectedMenu === id ? "white" : "default"}
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
