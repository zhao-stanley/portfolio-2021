import type { NextPage } from "next";
import { Navbar } from "../components/Global/Navbar";
import Typewriter from "react-typewriter-animate";

//import Head from "next/head";
//import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col w-screen h-screen bg-slate-100 dark:bg-slate-900">
        <div className="flex flex-col mx-8 mt-28">
          <h1 className="text-4xl font-semibold">Stanley Zhao</h1>
          <span className="text-2xl font-normal h-min">
            I'm a{" "}
            <Typewriter
              cursor={{cursorBlinkRate: "500ms"}}
              dataToRotate={[
                // Banner 1
                [{ type: "word", text: "web developer." }],
                [{ type: "word", text: "student." }],
                [{ type: "word", text: "competitor." }],
              ]}
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default Home;
