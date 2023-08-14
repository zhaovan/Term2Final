"use client";
import Image from "next/image";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useEffect, useRef } from "react";

import { useLocomotiveScroll } from "react-locomotive-scroll";

const text = [
  "hey!",
  "you there!",
  "imagine that you lived in a world",
  "where you could NAP",
  "all the time",
  "that would be sick",
  "instead...",
  "im making a specimen at 4am in the morning",
  "this is the part of it where I slowly went insane",
  "in case you weren't aware I'm a huge procrasinator",
  "honestly... I think all designers are procrastinators",
  "like the fact that you're expected to tap into creativity on demand is wild",
  "my brain doesn't work like that",
  "but here we are",
  "still scrolling....",
  "keep scrolling....",
  "anddddddd scrolling....",
  "what if there was nothing at the end of this?",
  "kind of how life works ya know",
  "I'm in my existential dread era",
  "come hang",
  "we've got cookies",
  "milk",
  "...and existential dread",
  "a holy trinity of good stuff",
  "anyways, if you've made it this far maybe you should be paying attention to the presentation",
  "or keep scrolling...",
  "im not your bosss",
  "im just some guy...",
  "on the internet...",
  "...",
  "awake...",
  "zzzzzzZZzzzZZZ",
  "oh you caught me",
  "alright yeah that's it... go home buster",
];

export default function Home() {
  const containerRef = useRef(null);
  const { scroll } = useLocomotiveScroll();
  return (
    <LocomotiveScrollProvider options={{ smooth: true }}>
      <main data-scroll-container ref={containerRef}>
        <div className="flex justify-center items-center h-screen">
          <div className="text-center flex flex-col gap-4">
            <h1 className="text-7xl">Dialog</h1>
            <h2 className="text-2xl">
              What happens when you give an engineer too much choice and the
              Robofont scripting window when asking him to design a typeface
            </h2>
            <h2>A typeface project by Ivan Zhao for Term 2</h2>
          </div>
        </div>
        {text.map((currText, i) => {
          return (
            <div
              className="h-screen flex justify-center items-center text-center mx-24 py-4"
              key={i}
            >
              <p className="text-7xl">{currText}</p>
            </div>
          );
        })}
      </main>
    </LocomotiveScrollProvider>
  );
}
