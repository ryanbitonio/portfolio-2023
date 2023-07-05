import {
  HStack,
  Image,
  Flex,
  Heading,
  Text,
  Box,
  Divider,
} from "@chakra-ui/react";
import Reel from "./Reel";
import ReelThumbnail from "../assets/thumbnails/reel.png";
import { RiHeartLine, RiHeartFill } from "react-icons/ri";
import { useState } from "react";

const Footer = () => {
  const [like, setLike] = useState(false);

  const handleLikeClick = () => {
    setLike(!like);
  };

  return (
    <HStack h="100%" justify="space-between">
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
        <Box cursor="pointer">
          {like ? (
            <RiHeartLine onClick={handleLikeClick} color="#B3B3B3" size={20} />
          ) : (
            <RiHeartFill onClick={handleLikeClick} color="#1DB954" size={20} />
          )}
        </Box>
      </HStack>
      <Reel />
      <Text fontSize="3xl" color="#b3b3b3">
        Designed and developed by me
      </Text>
    </HStack>
  );
};

export default Footer;
