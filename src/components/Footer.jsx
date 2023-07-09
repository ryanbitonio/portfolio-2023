import { Flex, HStack, Heading, Image, Show, Text } from "@chakra-ui/react";
import { useState } from "react";
import { RiHeartFill, RiHeartLine } from "react-icons/ri";
import ReelThumbnail from "../assets/thumbnails/reel.png";
import Reel from "./Reel";
import Toast from "./Toast";

const Footer = ({ color, secondaryColor }) => {
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
            <Heading fontSize="3xl" fontWeight="400" color={color}>
              Demo Reel
            </Heading>
            <Text fontSize="2xl" fontWeight="300" color={secondaryColor}>
              ayang
            </Text>
          </Flex>
          <Toast like={like}>
            {like ? (
              <RiHeartLine
                cursor="pointer"
                onClick={handleLikeClick}
                color="gray.300"
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
      <Text fontSize="3xl" color={secondaryColor}>
        Designed and developed by me
      </Text>
    </HStack>
  );
};

export default Footer;
