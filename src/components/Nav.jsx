import { List, ListItem, ListIcon } from "@chakra-ui/react";
import { ReactComponent as HomeIcon } from "../assets/icons/Nav/home.svg";
import { ReactComponent as ExperienceIcon } from "../assets/icons/Nav/experience.svg";
import { ReactComponent as ConnectIcon } from "../assets/icons/Nav/connect.svg";

const Nav = () => {
  return (
    <List size="lg" spacing={3} h="100%">
      <ListItem fontSize="4xl">
        <ListIcon w="24px" height="24px" as={HomeIcon} />
        Home
      </ListItem>
      <ListItem fontSize="4xl">
        <ListIcon w="24px" height="24px" as={ExperienceIcon} />
        Experience
      </ListItem>
      <ListItem fontSize="4xl">
        <ListIcon w="22px" height="22px" as={ConnectIcon} />
        Connect
      </ListItem>
    </List>
  );
};

export default Nav;
