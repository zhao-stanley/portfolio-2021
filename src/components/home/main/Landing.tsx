import { About } from "./About";
import { Hero } from "./Hero";

export const Landing = () => {
  return (
    <>
      <div className="flex flex-col w-full h-screen items-center justify-start gap-8">
        <div className="flex flex-col mx-8 gap-8 mt-24 justify-center">
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
