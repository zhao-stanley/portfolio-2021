import { motion } from "framer-motion";
import projects from "./projects.json";
import { Tags } from "./Tags";

const videos = [
  "/videos/ubg.mp4",
  "/videos/parallax.mp4",
  "/videos/jcp.mp4",
  "/videos/sticker.mp4",
  "/videos/platform.mp4",
];

const projList = projects.map((e, index) => {
  let tagsArr = e.tags;
  return (
    <motion.li
      key={e.name}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.97 }}
      className="rounded-xl p-4 drop-shadow-xl"
      style={{ backgroundColor: `#${e.theme}` }}
    >
      <video
        src={videos[index]}
        placeholder="blur"
        className="rounded-md shadow-md shadow-black"
        autoPlay
        muted
        loop
        disablePictureInPicture
        playsInline
      ></video>
      <div className="my-4">
        <a
          href={e.link}
          className="flex items-center gap-1 w-min"
          target={"_blank"}
        >
          <h1 className="text-2xl font-semibold text-white whitespace-nowrap">
            {e.name}
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#fff"
            strokeWidth={1}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
        <hr />
        <h2 className="text-xs font-normal text-gray-100 mt-1">{e.desc}</h2>
      </div>
      <Tags tagsArr={tagsArr} />
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
