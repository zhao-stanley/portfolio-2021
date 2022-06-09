import { github } from "./DarkModeIcons";
import { motion } from "framer-motion";

export const Footer = () => {
  const startDateObj = new Date("January 1, 2022");
  const currentDateObj = new Date();
  const startYear = startDateObj.getFullYear();
  const currentYear = currentDateObj.getFullYear();
  return (
    <>
      <footer className="w-full h-[5vh] flex items-center justify-center">
        <p className="text-md py-2 font-semibold">
          &copy; Copyright{" "}
          {startYear == currentYear
            ? currentYear
            : `${startYear}-${currentYear}`}
          , <span className="hueshift">Stanley Zhao</span>
        </p>
      </footer>
    </>
  );
};
