import { motion } from "framer-motion";
import contests from "./contests.json";

const contestList = contests.map((e) => {
  return (
    <motion.li
      key={e.title}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.97 }}
      className="flex flex-row gap-3 items-center justify-start bg-slate-200 dark:bg-[#2b2929] w-[90vw] text-black dark:text-slate-200 px-4 py-4 rounded-xl"
    >
      {e.genre == "Cybersecurity" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
          />
        </svg>
      )}

      <div className="flex flex-col">
        <h1 className="text-xl text-black dark:text-white font-semibold">
          {e.title}
        </h1>
        <h2 className="text-md text-gray-700 dark:text-gray-300 font-normal">
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
