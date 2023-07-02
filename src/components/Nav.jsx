import { List, ListItem, ListIcon, Link, HStack, Flex } from "@chakra-ui/react";
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
        <ListItem
          key={index}
          _hover={{
            color: "white",
          }}
        >
          <Link
            display="flex"
            alignItems="center"
            color={selectedMenu === id ? "white" : "default"}
            _hover={{
              textDecoration: "none",
            }}
            onClick={() => handleMenuClick(id)}
          >
            <ListIcon
              boxSize={6}
              as={selectedMenu === id ? activeIcon : icon}
            />
            {title}
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default Nav;
