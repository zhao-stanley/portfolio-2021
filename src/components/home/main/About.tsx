import * as React from "react";
import { motion } from "framer-motion";
import { External } from "./External";

export const About = () => {
  return (
    <div className="w-[85vw] sm:w-[75vw] xl:w-[65vw] max-w-5xl text-lg tracking-tight">
      <p>
        Hey there! I'm a rising high school senior who loves creating{" "}
        <span className="text-emerald-400">beautiful</span> and{" "}
        <span className="text-emerald-400">functional</span> web applications.
      </p>
      <br />
      <p>
        I'm currently a web developer at the{" "}
        <External
          link="https://joincpi.org/"
          text="Competitive Programming Initiative"
          color="text-[#813aea]"
        />
        .
      </p>
      <p>
        I also do <span className="text-red-400">competitive programming</span>{" "}
        and <span className="text-blue-500">cybersecurity</span> on the side.
      </p>

      <br />
      <p>
        Check out some of my{" "}
        <motion.a
          className="hueshift font-semibold inline-block"
          href="#projects"
          whileTap={{ scale: 0.95 }}
        >
          {"{projects}"}
        </motion.a>{" "}
        or view my GitHub profile{" "}
        <motion.span className="inline-block" whileTap={{ scale: 0.95 }}>
          <a
            href="https://github.com/zhao-stanley"
            target="_blank"
            rel="noreferrer"
            className="font-semibold h-4 bg-purple-200 text-purple-500 dark:bg-purple-500 dark:text-white dark:bg-opacity-70 px-[0.125rem] rounded-sm text-opacity-100 cursor-pointer w-full"
          >
            @zhao-stanley
          </a>
        </motion.span>
        .
      </p>
    </div>
  );
};
