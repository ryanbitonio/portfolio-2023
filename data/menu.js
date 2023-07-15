import { GoHome, GoHomeFill } from "react-icons/go";
import { RiHeadphoneLine, RiHeadphoneFill } from "react-icons/ri";
import { BiDisc, BiSolidDisc } from "react-icons/bi";

export default [
  {
    id: 1,
    title: "Home",
    icon: GoHome,
    activeIcon: GoHomeFill,
    path: "/",
  },
  {
    id: 2,
    title: "Connect",
    icon: BiDisc,
    activeIcon: BiSolidDisc,
    path: "/connect",
  },
];
