import type { NextPage } from "next";
import { Navbar } from "../components/Global/Navbar";
import { Contests } from "../components/home/contests/Contests";
import { Experience } from "../components/home/experience/Experience";
import { Landing } from "../components/home/main/Landing";
import { Projects } from "../components/home/projects/Projects";
import { School } from "../components/home/school/School";

const Home: NextPage = () => {
  return (
    <>
      <div className="bg-slate-100 dark:bg-[#141313] flex flex-col items-center">
        <Navbar />
        <Landing />

        <div className="flex flex-col w-full h-min items-center justify-center">
          <div className="flex flex-col mx-8 gap-4 py-16" id="experience">
            <h1 className="font-semibold text-4xl xl:text-5xl">Experience</h1>
            <hr/>
            <Experience />
          </div>

          <div className="flex flex-col mx-8 gap-4 py-16">
            <h1 className="font-semibold text-4xl xl:text-5xl">Contests</h1>
            <hr/>
            <Contests />
          </div>

          <div className="flex flex-col mx-8 gap-4 py-16">
            <h1 className="font-semibold text-4xl xl:text-5xl">School</h1>
            <hr/>
            <School />
          </div>
          <div className="flex flex-col mx-8 gap-4 py-32" id="projects">
            <h1 className="font-semibold text-4xl xl:text-5xl">Projects</h1>
            <hr/>
            <Projects />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
