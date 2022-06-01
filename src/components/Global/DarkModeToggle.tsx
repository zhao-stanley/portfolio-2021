import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { sun, moon } from "./DarkModeIcons";
import { motion } from "framer-motion";

export const DarkModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05, rotate: 15 }}
        whileTap={{ scale: 0.90 }}
        className="cursor-pointer z-10"
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        {theme === "light" ? moon : sun}
      </motion.button>
    </>
  );
};
