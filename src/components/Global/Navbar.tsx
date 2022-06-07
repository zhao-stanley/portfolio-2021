import { DarkModeToggle } from "../Global/DarkModeToggle";
import { Logo } from "./Logo";
import { github } from "./DarkModeIcons";

export const Navbar = () => {
  return (
    <>
      <nav className="fixed w-full h-min p-4 max-w-[82rem] flex flex-row justify-between items-center backdrop-filter backdrop-blur-md bg-opacity-30 firefox:bg-opacity-90 z-50">
        <Logo />
        <div className="flex flex-row items-center gap-4">
          <DarkModeToggle />
          {github}
        </div>
      </nav>
    </>
  );
};
