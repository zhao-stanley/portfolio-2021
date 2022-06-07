import { motion } from "framer-motion";
import contests from "./contests.json";
import { Cybersecurity, CP } from "./ContestIcons";

const contestList = contests.map((e) => {
  return (
    <motion.li
      key={e.title}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className="flex flex-row gap-3 xl:gap-4 items-center justify-start bg-slate-200 dark:bg-[#2b2929] w-[90vw] sm:w-[75vw] xl:w-[65vw] max-w-5xl text-black dark:text-slate-200 px-4 py-4 rounded-xl"
    >
      {e.genre == "Cybersecurity" ? <Cybersecurity /> : <CP />}

      <div className="flex flex-col">
        <h1 className="text-xl xl:text-2xl text-black dark:text-white font-semibold">
          {e.title}
        </h1>
        <h2 className="text-md xl:text-lg text-gray-700 dark:text-gray-300 font-normal">
          <span className="font-semibold">{e.place}</span>
          <br />
          {e.genre}
        </h2>
      </div>
    </motion.li>
  );
});

export const Contests = () => {
  return <ul className="flex flex-col gap-4">{contestList}</ul>;
};
