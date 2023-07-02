import { GoHome, GoHomeFill } from "react-icons/go";
import { RiHeadphoneLine, RiHeadphoneFill } from "react-icons/ri";
import { BiDisc, BiSolidDisc } from "react-icons/bi";

export default [
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
