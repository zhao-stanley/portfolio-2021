import * as React from "react";
import { motion } from "framer-motion";
import { External } from "./External";

export const About = () => {
  return (
    <div className="w-[85vw] sm:w-[75vw] xl:w-[65vw] max-w-5xl text-lg">
      <p>
        Hey there. I'm a junior in high school who loves creating{" "}
        <span className="text-emerald-400">beautiful</span> and{" "}
        <span className="text-emerald-400">efficient</span> web applications.
      </p>
      <br />
      <p>
        I'm currently a web developer at the{" "}
        <External
          link="https://joincpi.org/"
          text="Competitive Programming Initiative"
          color="text-[#813aea]"
        />
        , which promotes competitive programming through the{" "}
        <External
          link="https://usaco.guide/"
          text="USACO Guide"
          color="text-blue-600"
        />
        .
      </p>
      <br />
      <p>
        I also do <span className="text-red-400">competitive programming</span>{" "}
        and <span className="text-red-400">cybersecurity</span> on the side.
      </p>

      <br />
      <p>
        Check out some of my{" "}
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
            target="_blank"
            rel="noreferrer"
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
