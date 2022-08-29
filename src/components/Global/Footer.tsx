import Link from "next/link";

export const Footer = () => {
  const startDateObj = new Date("January 1, 2022");
  const currentDateObj = new Date();
  const startYear = startDateObj.getFullYear();
  const currentYear = currentDateObj.getFullYear();
  return (
    <>
      <footer className="w-full h-auto flex items-center justify-center px-5 py-10">
        <div className="w-full flex flex-col lg:flex-row max-w-7xl items-center gap-y-2">
          <div className="w-full h-full flex flex-col justify-center items-center lg:items-start">
            <h1 className="text-xl md:text-2xl 2xl:text-3xl font-bold tracking-tighter">{`szhao.dev`}</h1>
            <p className="hidden lg:block tracking-tighter text-sm md:text-base 2xl:text-lg">
              &copy;{" "}
              {startYear == currentYear
                ? currentYear
                : `${startYear}-${currentYear}`}{" "}
              <span className="hueshift font-medium">Stanley Zhao</span>
            </p>
          </div>
          <ul className="flex flex-row w-full justify-between max-w-[200px] lg:max-w-xs text-sm md:text-base 2xl:text-lg">
            <li className="border-b-2 border-transparent dark:hover:border-white hover:border-black transition ease-linear duration-200">
              <a
                href="https://linkedin.com/in/sz5"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li className="border-b-2 border-transparent dark:hover:border-white hover:border-black transition ease-linear duration-200">
              <a
                href="mailto:stanleyhzhao@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                Email
              </a>
            </li>
            <li className="border-b-2 border-transparent dark:hover:border-white hover:border-black transition ease-linear duration-200">
              <Link href="/resume.pdf">Resume</Link>
            </li>
          </ul>
          <p className="block lg:hidden tracking-tighter text-sm md:text-base 2xl:text-lg">
            &copy;{" "}
            {startYear == currentYear
              ? currentYear
              : `${startYear}-${currentYear}`}{" "}
            <span className="hueshift font-medium">Stanley Zhao</span>
          </p>
        </div>
      </footer>
    </>
  );
};
