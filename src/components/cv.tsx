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

const moreTechnologies = [
  "RxJs",
  "NgRx",
  "HTML",
  "CSS",
  "Redux",
  "Stencil",
  "Nest",
  "Webpack",
  "Rollup",
  "Jest",
  "Cypress",
  "Jenkins",
  "Openshift",
  "Lighthouse",
  "Git",
  "GitLab",
  "Jira",
  "BrowserStack",
  "Miro",
  "C#",
  "Sonar Qube",
  "Photoshop",
];

const Header = ({ children }: { children?: ReactNode }) => (
  <div className="flex flex-col gap-4 lg:gap-8 items-center lg:items-start mb-8 md:mb-16 mt-28">
    <h3 className="font-sans text-black text-4xl lg:text-6xl font-bold">
      {children}
      <span className="text-yellow">.</span>
    </h3>
    <div className="h-1 lg:h-2 bg-black w-full"></div>
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
          <details>
            <summary className="font-bold font-sans mb-4">
              Surrounding technologies
            </summary>
            <p>
              <Chips chips={moreTechnologies} />
            </p>
          </details>
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
