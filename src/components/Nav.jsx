import { List, ListItem, ListIcon, Link, HStack } from "@chakra-ui/react";
import { useState } from "react";
import { GoHome, GoHomeFill } from "react-icons/go";
import { RiHeadphoneLine, RiHeadphoneFill } from "react-icons/ri";
import { BiDisc, BiSolidDisc } from "react-icons/bi";

const Nav = () => {
  const [selectedMenu, setSelectedMenu] = useState(1);

  const handleMenuClick = id => setSelectedMenu(id);

  const menuList = [
    {
      id: 1,
      title: "Home",
      icon: GoHome,
      activeIcon: GoHomeFill,
    },
    {
      id: 2,
      title: "Experience",
      icon: RiHeadphoneLine,
      activeIcon: RiHeadphoneFill,
    },
    {
      id: 3,
      title: "Connect",
      icon: BiDisc,
      activeIcon: BiSolidDisc,
    },
  ];
  return (
    <List size="lg" spacing={3}>
      {menuList.map(({ id, title, icon, activeIcon }, index) => (
        <HStack key={index}>
          <ListItem
            _hover={{
              color: "white",
            }}
          >
            <Link
              onClick={() => handleMenuClick(id)}
              _hover={{
                textDecoration: "none",
              }}
              color={selectedMenu === id ? "white" : "default"}
            >
              <ListIcon as={selectedMenu === id ? activeIcon : icon} />
              {title}
            </Link>
          </ListItem>
        </HStack>
      ))}
    </List>
  );
};

export default Nav;
