import { motion } from "framer-motion";
import experience from "./experience.json";
import { SchoolIcon, JobIcon, InternshipIcon } from "./ExpIcons";

const expList = experience.map((e) => {
  return (
    <motion.li
      key={e.title}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.97 }}
      className="flex flex-row gap-3 items-center justify-start bg-slate-200 dark:bg-[#2b2929] w-[90vw] text-black dark:text-slate-200 px-4 py-4 rounded-xl"
    >
      {e.type == "school" ? (
        <SchoolIcon />
      ) : e.type == "internship" ? (
        <InternshipIcon />
      ) : (
        <JobIcon />
      )}
      <div className="flex flex-col">
        <h1 className="text-xl text-black dark:text-white font-semibold">
          {e.title}
        </h1>
        <h2 className="text-md text-gray-700 dark:text-gray-300 font-normal">
          <span className="font-semibold">{e.location}</span><br/>{e.tenure}
        </h2>
      </div>
    </motion.li>
  );
});

export const Experience = () => {
  return <ul className="flex flex-col gap-4">{expList}</ul>;
};
