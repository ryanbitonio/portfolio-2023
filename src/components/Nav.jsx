import { List, ListItem, ListIcon, Flex, VStack, Link } from "@chakra-ui/react";
import { ReactComponent as HomeIcon } from "../assets/icons/Nav/home.svg";
import { ReactComponent as ExperienceIcon } from "../assets/icons/Nav/experience.svg";
import { ReactComponent as ConnectIcon } from "../assets/icons/Nav/connect.svg";

const Nav = () => {
  return (
    <List
      display="flex"
      flexDirection="column"
      justifyContent="center"
      fontWeight="semibold"
      pl={25}
      spacing={3}
      color="gray.300"
      h="100%"
    >
      <ListItem fontSize="4xl">
        <ListIcon
          mr={5}
          w="24px"
          height="24px"
          as={HomeIcon}
          stroke="gray.300"
        />
        Home
      </ListItem>
      <ListItem fontSize="4xl">
        <ListIcon mr={5} w="24px" height="24px" as={ExperienceIcon} />
        Experience
      </ListItem>
      <ListItem fontSize="4xl">
        <ListIcon mr={5} w="22px" height="22px" as={ConnectIcon} />
        Connect
      </ListItem>
    </List>
  );
};

export default Nav;
