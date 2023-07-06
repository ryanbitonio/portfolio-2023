import {
  HStack,
  Image,
  Flex,
  Heading,
  Text,
  Box,
  Button,
  Show,
} from "@chakra-ui/react";
import Reel from "./Reel";
import ReelThumbnail from "../assets/thumbnails/reel.png";
import { RiHeartLine, RiHeartFill } from "react-icons/ri";
import { useState } from "react";
import Toast from "./Toast";
import Tooltip from "./Tooltip";

const Footer = () => {
  const [like, setLike] = useState(false);

  const handleLikeClick = () => {
    setLike(!like);
  };

  return (
    <HStack h="100%" justify={{ base: "center", md: "space-between" }}>
      <Show above="md">
        <HStack>
          <Image pr={3} src={ReelThumbnail} />
          <Flex pr={5} direction="column" gap={1}>
            <Heading fontSize="3xl" fontWeight="400">
              Demo Reel
            </Heading>
            <Text fontSize="2xl" fontWeight="300" opacity="60%">
              ayang
            </Text>
          </Flex>
          <Toast like={like}>
            {like ? (
              <RiHeartLine
                cursor="pointer"
                onClick={handleLikeClick}
                color="#B3B3B3"
                size={20}
              />
            ) : (
              <RiHeartFill
                cursor="pointer"
                onClick={handleLikeClick}
                color="#1DB954"
                size={20}
              />
            )}
          </Toast>
        </HStack>
        <Reel />
      </Show>
      <Text fontSize="3xl" color="#b3b3b3">
        Designed and developed by me
      </Text>
    </HStack>
  );
};

export default Footer;
