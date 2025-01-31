import { StaticImageData } from "next/image";
import ycce from "../../public/ycce.jpg";
import rk from "../../public/rk.jpg";
import kvs from "../../public/kvs.jpg";
import alan from "../../public/alan.jpeg";
import olamide from "../../public/olamide.jpeg";
import umar from "../../public/umar.jpeg";

export type reviewProps = {
  name: string;
  role: string;
  profileImg: StaticImageData;
  testimonial: string;
  index: number;
};

export const reviewDetails = [
  {
    name: "Graduation ",
    role: " Nagpur , Maharashtra , India",
    profileImg: ycce,
    testimonial:
      "I graduated from Yeshwantrao Chavan College of Engineering (YCCE), Nagpur, where I pursued my studies from 2018 to 2022 and achieved a CGPA of 7.4",
  },
  {
    name: "12 th",
    role: "Pulgaon , Maharashtra , India",
    profileImg: rk,
    testimonial:
      "I completed my higher secondary education at Ranglal Kejriwal Junior College, Pulgaon. I enrolled in RK College in 2017 and graduated in 2018 with  score of 70% in my 12th standard",
  },
  {
    name: "10 th",
    role: "Pulgaon , Maharashtra , India",
    profileImg: kvs,
    testimonial:
      "I completed my schooling at Kendriya Vidyalaya Pulgaon, where I enrolled in 2006 and graduated in 2016. I achieved a CGPA of 9.4 in my 10th standard.",
  },
];
