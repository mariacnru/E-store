import { IoIosPhonePortrait } from "react-icons/io";
import { IoWatchOutline } from "react-icons/io5";
import { CiCamera, CiHeadphones } from "react-icons/ci";

const categories = [
  {
    id: 1,
    icon: <IoIosPhonePortrait size={30} />,
    title: "موبایل ها",
    slug: "mobile",
  },
  {
    id: 2,
    icon: <IoWatchOutline size={30} />,
    title: "ساعت های هوشمند",
    slug: "watch",
  },
  {
    id: 3,
    icon: <CiCamera size={30} />,
    title: "دوربین ها",
    slug: "camera",
  },
  {
    id: 4,
    icon: <CiHeadphones size={30} />,
    title: "هدفون ها",
    slug: "headphone",
  },
];

export { categories };
