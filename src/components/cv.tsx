"use client";
import React, { ReactNode, Suspense } from "react";
import Loader from "./loader";
import Jobs from "./jobs";
import Projects from "./projects";
import Chips from "./chips";
import SocialMediaIcons from "../components/social";

const technologies = [
  "Angular 20+",
  "React 19+",
  "TypeScript",
  "Tailwind",
  "NextJs",
  "Claude Code",
];

const moreTechnologies = [
  "RxJs",
  "NgRx",
  "HTML5",
  "CSS3",
  "Hono",
  "RPC",
  "REST",
  "Redux",
  "Web Components",
  "AI SDK",
  "Playwright",
  "AWS",
  "Terraform",
  "Lighthouse",
  "BrowserStack",
];

const Header = ({
  index,
  children,
}: {
  index: number;
  children?: ReactNode;
}) => (
  <div className="flex flex-col gap-4 lg:gap-6 items-center lg:items-start mb-8 md:mb-12 mt-28">
    <div className="flex items-center gap-3 lg:gap-4">
      <span
        aria-hidden
        className="inline-block w-3 h-3 bg-yellow border-2 border-ink"
      />
      <span className="font-mono text-xs lg:text-sm text-muted tracking-wider">
        {String(index).padStart(2, "0")}
      </span>
      <h2 className="font-sans text-ink text-3xl lg:text-5xl font-bold tracking-tight">
        {children}
      </h2>
    </div>
    <div className="h-px bg-border-strong w-full"></div>
  </div>
);

const CV = () => (
  <>
    <section id="about" className="text-ink">
      <Header index={1}> About me </Header>
      <div className="flex gap-8 flex-col sm:flex-row">
        <div className="basis-2/3 leading-relaxed">
          My journey in computer science began somewhat by chance, but quickly
          let me to find my passion for user-centered web development. Over the
          past five years I specialized in crafting beautiful, functional, and
          accessible websites that prioritize user experience. I comfortably
          navigate the entire stack with Angular and React being my go-to
          technologies to create digital experiences that delight users. I like
          to leverage AI to stay productive and efficient.
          <div className="flex gap-4 items-center mt-4">
            <span>Find me at</span>
            <SocialMediaIcons />
          </div>
        </div>
        <div className="basis-1/3">
          <h3 className="text-lg font-bold font-sans mb-4">
            Technologies I like
          </h3>
          <Chips chips={technologies} />
          <details>
            <summary className="font-bold font-sans mb-4">
              More, related technologies
            </summary>
            <Chips chips={moreTechnologies} />
          </details>
        </div>
      </div>
    </section>
    <section id="projects">
      <Header index={2}> Projects </Header>
      <Suspense fallback={<Loader />}>
        <Projects />
      </Suspense>
    </section>
    <section id="jobs">
      <Header index={3}> Experience </Header>
      <Suspense fallback={<Loader />}>
        <Jobs />
      </Suspense>
    </section>
  </>
);

export default CV;
