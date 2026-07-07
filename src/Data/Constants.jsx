import { CiCamera, CiHeadphones } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoWatchOutline } from "react-icons/io5";
import { SiPcgamingwiki } from "react-icons/si";

const categories = [
  { id: 1, icon: <IoIosPhonePortrait size={30} />, title: "موبایل ها" },
  { id: 2, icon: <IoWatchOutline size={30} />, title: "ساعت های هوشمند" },
  { id: 3, icon: <CiCamera size={30} />, title: "دوربین ها" },
  { id: 4, icon: <CiHeadphones size={30} />, title: "هدفون ها" },
  { id: 5, icon: <HiOutlineComputerDesktop size={30} />, title: "کامپیوتر ها" },
  { id: 6, icon: <SiPcgamingwiki size={30} />, title: "بازی" },
];

export { categories };
