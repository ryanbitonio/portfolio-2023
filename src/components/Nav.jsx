import {
  List,
  ListItem,
  ListIcon,
  Link,
  Box,
  Icon,
  textDecoration,
} from "@chakra-ui/react";
import { ReactComponent as HomeIcon } from "../assets/icons/Nav/home.svg";
import { ReactComponent as ExperienceIcon } from "../assets/icons/Nav/experience.svg";
import { ReactComponent as ConnectIcon } from "../assets/icons/Nav/connect.svg";
import { ReactComponent as HomeIconHover } from "../assets/icons/Nav/home-hover.svg";
import { ReactComponent as ExperienceIconHover } from "../assets/icons/Nav/experience-hover.svg";
import { ReactComponent as ConnectIconHover } from "../assets/icons/Nav/connect-hover.svg";
import { useState } from "react";

const Nav = () => {
  const [selectedMenu, setSelectedMenu] = useState(1);

  const handleMenuClick = id => setSelectedMenu(id);

  const menuList = [
    {
      id: 1,
      title: "Home",
      icon: HomeIcon,
      activeIcon: HomeIconHover,
    },
    {
      id: 2,
      title: "Experience",
      icon: ExperienceIcon,
      activeIcon: ExperienceIconHover,
    },
    {
      id: 3,
      title: "Connect",
      icon: ConnectIcon,
      activeIcon: ConnectIconHover,
    },
  ];
  return (
    <List size="lg" spacing={3}>
      {menuList.map(({ id, title, icon, activeIcon }, index) => (
        <ListItem key={index}>
          <ListIcon
            onClick={() => handleMenuClick(id)}
            cursor="pointer"
            as={selectedMenu === id ? activeIcon : icon}
            fill={index === 2 && "gray.300"}
            _hover={{
              fill: index === 2 && "white",
              stroke: index !== 2 && "white",
            }}
          />
          <Link
            onClick={() => handleMenuClick(id)}
            _hover={{
              textDecoration: "none",
              color: "white",
            }}
            color={selectedMenu === id ? "white" : "default"}
          >
            {title}
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default Nav;
