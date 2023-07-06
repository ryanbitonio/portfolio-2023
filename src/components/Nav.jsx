import { Link, List, ListIcon, ListItem } from "@chakra-ui/react";
import { useState } from "react";
import menuList from "../../data/menu";

const Nav = () => {
  const [selectedMenu, setSelectedMenu] = useState(1);

  const handleMenuClick = id => setSelectedMenu(id);

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
