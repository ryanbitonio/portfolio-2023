import { List, ListItem, ListIcon, Stack, Box, Icon } from "@chakra-ui/react";
import { ReactComponent as HomeIcon } from "../assets/icons/Nav/home.svg";
import { ReactComponent as ExperienceIcon } from "../assets/icons/Nav/experience.svg";
import { ReactComponent as ConnectIcon } from "../assets/icons/Nav/connect.svg";

const Nav = ({ isSidebarOpen }) => {
  return (
    <List size="lg" spacing={3}>
      <ListItem>
        <ListIcon as={HomeIcon} />
        Home
      </ListItem>
      <ListItem>
        <ListIcon as={ExperienceIcon} />
        Experience
      </ListItem>
      <ListItem>
        <ListIcon w="22px" h="22px" as={ConnectIcon} />
        Connect
      </ListItem>
    </List>
  );
};

export default Nav;
