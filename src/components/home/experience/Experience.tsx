import { motion } from "framer-motion";
import experience from "./experience.json";
import { SchoolIcon, JobIcon, InternshipIcon } from "./ExpIcons";

const expList = experience.map((e, key) => {
  return (
    <motion.li
      key={key}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className="flex flex-row gap-3 xl:gap-4 shadow-md items-center justify-start bg-slate-200 dark:bg-[#2b2929] w-[90vw] sm:w-[75vw] xl:w-[65vw] max-w-5xl text-black dark:text-slate-200 px-4 py-4 rounded-xl"
    >
      {e.type == "school" ? (
        <SchoolIcon />
      ) : e.type == "internship" ? (
        <InternshipIcon />
      ) : (
        <JobIcon />
      )}
      <div className="flex flex-col">
        <h1 className="text-xl xl:text-2xl text-black dark:text-white font-semibold">
          {e.title}
        </h1>
        <h2 className="text-md xl:text-lg text-gray-700 dark:text-gray-300 font-normal">
          <span className="font-semibold">{e.location}</span>
          <br />
          {e.tenure}
        </h2>
      </div>
    </motion.li>
  );
});

export const Experience = () => {
  return <ul className="flex flex-col gap-4">{expList}</ul>;
};
