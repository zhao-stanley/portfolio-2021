import { motion } from "framer-motion";
import projects from "../projects/projects.json";
import Image from "next/image";
import ubg100 from "./img/ubg.png";
import parallax from "./img/parallax.png";
import jc from "./img/jcp.png";
import sticker from "./img/sticker.png";
import platform from "./img/platform.png";

const images = [ubg100, parallax, jc, sticker, platform]

const projList = projects.map((e, index) => {
  return (
    <motion.li
      key={e.name}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.97 }}
      className="relative overflow-hidden"
    >
      <div className="bg-gradient-to-t from-black rounded-b-xl w-full absolute bottom-1 p-2 z-10">
        <h1 className="text-white text-xl font-semibold">{e.name}</h1>
      </div>

      <Image
        src={images[index]}
        quality="100"
        placeholder="blur"
        className="rounded-xl"
      ></Image>
    </motion.li>
  );
});

export const Projects = () => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl">
      {projList}
    </ul>
  );
};
