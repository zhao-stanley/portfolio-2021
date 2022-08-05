import { About } from "./About";
import { Hero } from "./Hero";

export const Landing = () => {
  return (
    <>
      <div className="flex flex-col w-full min-h-screen h-auto items-center justify-center 2xl:justify-center gap-8 py-16">
        <div className="flex flex-col gap-8 justify-center">
          <Hero />
          <About />
        </div>
        <a href="#experience" className="w-min">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
      </div>
    </>
  );
};
