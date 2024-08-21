"use client";

import { Panel } from "./panel";
import { FlipWords } from "./ui/flip-words";


export function TextMove() {

  const words = ["Success", "Advancement", "Growth", "Excellence", "Prosperity", "modern"];


  return (
    <div className="flex flex-col justify-center h-[40rem]  items-center">
      <div className=" mt-16">
        <blockquote className="text-2xl md:text-5xl font-semibold  text-center text-white">
          Building Online<span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-yellow-500 relative inline-block my-4 ml-2 "><span className="relative text-pink-500">
              {" "}
              <FlipWords words={words} />
            </span>
          </span>
          <br />
          for local Business and Contractors
        </blockquote>
        <p className="text-neutral-600 dark:text-neutral-200 text-s sm:text-base text-center ">
        Professional, affordable websites that help you connect with your community.
        </p>
      </div>

      <div className="mt-20">

        <Panel />
      </div>
    </div>
  );
}
