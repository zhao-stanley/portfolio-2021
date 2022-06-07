import * as React from "react";
import Typewriter from "react-typewriter-animate";

export const Hero = () => {
  return (
    <div>
      <h1 className="text-4xl xl:text-5xl xl:mb-2 font-semibold">Stanley Zhao🚀</h1>
      <h2 className="text-2xl xl:text-3xl font-normal h-min text-slate-900 dark:text-slate-200">
        <span className="hueshift font-semibold">
          <Typewriter
            cursor={{ char: "" }}
            timeBeforeDelete={2000}
            dataToRotate={[
              // Banner 1
              [{ type: "word", text: " student" }],
              [{ type: "word", text: " musician" }],
              [{ type: "word", text: " competitive programmer" }],
              [{ type: "word", text: " web developer." }],
            ]}
          />
        </span>
        <span className="cursor cursor-blink">|</span>
      </h2>
    </div>
  );
};
