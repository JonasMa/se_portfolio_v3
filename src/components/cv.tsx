import React, { Suspense } from "react";
import Disclaimer from "./disclaimer";
import Loader from "./loader";
import IconAngular from "./icons/angular";
import IconReact from "./icons/react";
import IconHtml from "./icons/html";
import IconCss from "./icons/css";
import IconTypeScript from "./icons/typescript";
import Button from "./button";
import Jobs from "./jobs";
import Projects from "./projects";

const CV = () => (
  <>
    <h3 className="flex justify-between mb-5 mt-16 ">
      <span className="relative text-base text-blue-light w-[max-content] before:absolute before:inset-0 before:bg-blue-light before:animate-typewriter-6">
        tl;dr;
      </span>
      <span className="flex">
        <IconAngular />
        <IconReact />
        <IconHtml />
        <IconCss />
        <IconTypeScript />
      </span>
    </h3>
    <section>
      I&apos;m a software engineer with five years of experience. I particularly
      enjoy working with frontend technologies like Angular and React.
      <div className="flex gap-4">
        <Button href="mailto:contact@jmattes.de">Contact me</Button>

        <Button
          href="/resume.pdf"
          color="blue-light"
          title="Opens resume PDF in a new tab"
        >
          Download resume
        </Button>
      </div>
    </section>

    <section id="about">
      <h3 className="font-sans text-yellow mb-5 mt-16 text-base">About</h3>
      My journey in computer science began somewhat by chance, but quickly let
      me to find my passion for user-centered web development. Over the past
      five years I specialized in crafting beautiful, functional, and accessible
      websites that prioritize user experience. I comfortably navigate the
      entire stack with Angular and React being my go-to technologies to create
      digital experiences that delight users.
    </section>
    <section id="jobs">
      <h3 className="font-sans text-yellow mb-5 mt-16 text-base">Experience</h3>
      <Suspense fallback={<Loader />}>
        <Jobs />
      </Suspense>
    </section>
    <section id="projects">
      <h3 className="font-sans text-yellow mb-5 mt-16 text-base">Projects</h3>
      <Suspense fallback={<Loader />}>
        <Projects />
      </Suspense>
    </section>
    <section className="mt-16 font-sans text-blue-light">
      <Disclaimer />
    </section>
  </>
);

export default CV;
