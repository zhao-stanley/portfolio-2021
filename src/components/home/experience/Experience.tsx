import { motion } from "framer-motion";
import experience from "./experience.json";
import { JobIcon, InternshipIcon } from "./ExpIcons";

const expList = experience.map((e, key) => {
  return e.href ? (
    <motion.a
      href={e.href}
      key={key}
      target="_blank"
      rel="noreferrer"
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className="flex flex-row gap-3 xl:gap-4 shadow-md items-center justify-between bg-slate-200 dark:bg-[#2b2929] w-[90vw] sm:w-[75vw] xl:w-[65vw] max-w-5xl text-black dark:text-slate-200 px-4 py-4 rounded-xl"
    >
      <li className="flex flex-row gap-3 xl:gap-4 items-center justify-start w-full">
        {e.type == "internship" ? <InternshipIcon /> : <JobIcon />}
        <div className="flex flex-col">
          <h1 className="text-xl xl:text-2xl text-black dark:text-white font-semibold tracking-tighter">
            {e.title}
          </h1>
          <h2 className="text-md xl:text-lg text-gray-700 dark:text-gray-300 font-normal tracking-tighter">
            <span className="font-semibold">{e.location}</span>
            <br />
            {e.tenure}
          </h2>
        </div>
      </li>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        />
      </svg>
    </motion.a>
  ) : (
    <motion.li
      key={key}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className="flex flex-row gap-3 xl:gap-4 shadow-md items-center justify-start bg-slate-200 dark:bg-[#2b2929] w-[90vw] sm:w-[75vw] xl:w-[65vw] max-w-5xl text-black dark:text-slate-200 px-4 py-4 rounded-xl"
    >
      {e.type == "internship" ? <InternshipIcon /> : <JobIcon />}
      <div className="flex flex-col">
        <h1 className="text-xl xl:text-2xl text-black dark:text-white font-semibold tracking-tighter">
          {e.title}
        </h1>
        <h2 className="text-md xl:text-lg text-gray-700 dark:text-gray-300 font-normal tracking-tighter">
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
