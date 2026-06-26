"use client";
import React, { ReactNode, Suspense } from "react";
import Loader from "./loader";
import Jobs from "./jobs";
import Projects from "./projects";
import Chips from "./chips";
import Button from "./button";
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
          let me to find my passion for user-centered frontend and full-stack
          web development. Over the past five years I specialized in crafting
          beautiful, functional, and accessible web applications that prioritize
          user experience. As a full-stack developer I comfortably navigate the
          entire stack, with Angular and React being my go-to frontend
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
    <section id="contact" className="text-ink">
      <Header index={4}> Get in touch </Header>
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 lg:items-end">
        <div className="basis-2/3">
          <h3 className="font-sans text-2xl sm:text-4xl font-bold tracking-tight leading-tight">
            Got a challenge worth solving?{" "}
            <span className="relative inline-block whitespace-nowrap">
              <span className="relative z-10">Let&apos;s talk.</span>
              <svg
                aria-hidden
                className="absolute left-0 right-0 -bottom-1 w-full h-2.5 text-yellow"
                viewBox="0 0 300 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 6 Q 25 1, 50 5 T 100 5 T 150 5 T 200 5 T 250 5 T 298 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h3>
          <p className="mt-4 text-muted leading-relaxed max-w-xl">
            I&apos;m open to freelance work across the full stack — modernizing
            an existing app, building a new product from scratch, or jumping in
            wherever a tricky problem needs solving. If you&apos;ve got something
            interesting, I&apos;d love to hear about it.
          </p>
          <Button href="mailto:contact@jmattes.de" variant="ghost">
            Contact me
          </Button>
        </div>
        <div className="basis-1/3 font-mono text-sm">
          <div className="text-xs uppercase tracking-wider text-muted">
            Email
          </div>
          <a
            href="mailto:contact@jmattes.de"
            className="mt-1 inline-block text-ink underline underline-offset-4 decoration-border-strong hover:decoration-ink transition-colors break-all"
          >
            contact@jmattes.de
          </a>
          <div className="mt-6 text-xs uppercase tracking-wider text-muted">
            Elsewhere
          </div>
          <div className="mt-3">
            <SocialMediaIcons />
          </div>
        </div>
      </div>
    </section>
  </>
);

export default CV;
