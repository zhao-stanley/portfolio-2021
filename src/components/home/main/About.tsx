import * as React from "react";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <div>
      <p>
        Hey there. I'm a junior in high school who loves creating{" "}
        <span className="text-emerald-400">beautiful</span> and{" "}
        <span className="text-emerald-400">efficient</span> web applications.
      </p>
      <br />
      <p>
        I'm currently a web developer at the{" "}
        <a
          href="https://joincpi.org/"
          className="text-[#813aea] inline-flex flex-row items-center gap-[0.0625rem]"
          target={"_blank"}
        >
          Competitive Programming Initiative{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
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
        </a>
        , which aims to teach people about competitive programming via the{" "}
        <a
          href="https://usaco.guide/"
          className="text-blue-600 inline-flex flex-row items-center gap-[0.0625rem]"
          target={"_blank"}
        >
          USACO Guide
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
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
        </a>
        .
      </p>
      <br />
      <p>
        Recently I've been learning more backend, aiming to eventually go full
        stack. I also do{" "}
        <span className="text-red-400">competitive programming</span> and{" "}
        <span className="text-red-400">cybersecurity</span> on the side.
      </p>

      <br />
      <p>
        Feel free to check out some of my{" "}
        <motion.span
          className="hueshift font-semibold inline-block"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
        >
          <a href="#projects">{"{projects}"}</a>
        </motion.span>{" "}
        or view my GitHub profile{" "}
        <motion.span className="inline-block" whileTap={{ scale: 0.97 }}>
          <a
            href="https://github.com/zhao-stanley"
            target={"_blank"}
            className="font-semibold w-2 h-4 bg-purple-200 text-purple-500 dark:bg-purple-500 dark:text-white dark:bg-opacity-70 px-[0.125rem] rounded-sm text-opacity-100 cursor-pointer"
          >
            @zhao-stanley
          </a>
        </motion.span>
        .
      </p>
    </div>
  );
};
