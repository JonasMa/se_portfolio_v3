"use client";
import React, { ReactNode, Suspense } from "react";
import Loader from "./loader";
import Jobs from "./jobs";
import Projects from "./projects";
import Chips from "./chips";
import SocialMediaIcons from "../components/social";

const technologies = [
  "Angular",
  "React",
  "TypeScript",
  "Tailwind",
  "NextJs",
  "Java",
  "Spring Boot",
];

const Header = ({ children }: { children?: ReactNode }) => (
  <div className="flex gap-8 items-center mb-8 mt-28">
    <h3 className="font-sans text-black text-4xl font-bold">
      {children}
      <span className="text-yellow">.</span>
    </h3>
    <div className="h-[1px] bg-grey-light flex-grow"></div>
  </div>
);

const CV = () => (
  <>
    <section id="about" className="text-black">
      <Header> About me </Header>
      <div className="flex gap-8 flex-col sm:flex-row">
        <div className="basis-2/3">
          My journey in computer science began somewhat by chance, but quickly
          let me to find my passion for user-centered web development. Over the
          past five years I specialized in crafting beautiful, functional, and
          accessible websites that prioritize user experience. I comfortably
          navigate the entire stack with Angular and React being my go-to
          technologies to create digital experiences that delight users.
          <div className="flex gap-4 items-center mt-4">
            <span>Find me at</span>
            <SocialMediaIcons />
          </div>
        </div>
        <div className="basis-1/3">
          <h4 className="text-lg font-bold font-sans mb-4">
            Technologies I like
          </h4>
          <Chips chips={technologies} />
        </div>
      </div>
    </section>
    <section id="projects">
      <Header> Projects </Header>
      <Suspense fallback={<Loader />}>
        <Projects />
      </Suspense>
    </section>
    <section id="jobs">
      <Header> Experience </Header>
      <Suspense fallback={<Loader />}>
        <Jobs />
      </Suspense>
    </section>
  </>
);

export default CV;
