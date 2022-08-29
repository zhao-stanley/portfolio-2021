import { motion } from "framer-motion";
import projects from "./projects.json";
import { Tags } from "./Tags";

const projList = projects.map((e, index) => {
  let tagsArr = e.tags;
  return (
    <motion.li
      key={e.name}
      whileTap={{ scale: 0.99 }}
      className="rounded-xl p-4 xl:p-5 drop-shadow-xl flex flex-col justify-between"
      style={{ backgroundColor: `#${e.theme}` }}
    >
      <video
        src={`/videos/${e.video}`}
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
          target="_blank"
          rel="noreferrer"
        >
          <h1 className="text-2xl xl:text-3xl font-bold text-white whitespace-nowrap tracking-tighter">
            {e.name}
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-auto w-4 xl:w-6"
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
        <hr className="my-1 xl:my-2" />
        <h2 className="text-xs xl:text-sm font-normal text-gray-100 tracking-tighter">
          {e.desc}
        </h2>
      </div>

      <Tags tagsArr={tagsArr} />
    </motion.li>
  );
});

export const Projects = () => {
  return (
    <ul className="sm:w-[75vw] xl:w-[65vw] grid grid-cols-1 lg:grid-cols-2 gap-4 xl:gap-6 max-w-7xl">
      {projList}
    </ul>
  );
};
