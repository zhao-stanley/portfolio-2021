import { DarkModeToggle } from "../Global/DarkModeToggle";
import { Logo } from "./Logo";

export const Navbar = () => {
  return (
    <>
      <nav className="fixed w-screen h-min px-4 py-4 flex flex-row justify-between items-center backdrop-filter backdrop-blur-lg bg-opacity-30 firefox:bg-opacity-90">
        <Logo/>
        <DarkModeToggle />
      </nav>
    </>
  );
};
