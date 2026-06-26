import "../app/globals.css";
import Link from "next/link";
import React from "react";
import CV from "../components/cv";
import SocialMediaIcons from "../components/social";
import ProfilePic from "@/components/profile-pic";
import Button from "@/components/button";
import Disclaimer from "@/components/disclaimer";

const IndexPage: React.FC = () => {
  return (
    <div className="gap-8 px-4 lg:px-12 mb-16 container min-h-screen m-auto">
      <a
        className="absolute left-0 -translate-y-full focus:translate-y-0 text-ink bg-bg p-1"
        href="#main"
      >
        Skip to content
      </a>
      <div className="pt-20 lg:pt-32 flex flex-col gap-4">
        <header>
          <div className="flex flex-col-reverse sm:flex-row sm:items-end sm:gap-5">
            <h1 className="flex flex-wrap gap-2 sm:gap-4 lg:gap-5 mb-2 sm:mb-5 mt-2 sm:mt-16 text-ink text-4xl sm:text-6xl lg:text-7xl font-bold font-sans tracking-tight">
              <span>Hi,</span>
              <span className="whitespace-nowrap flex gap-2 sm:gap-4 lg:gap-5">
                <span>I&apos;m</span>
                <div>
                  <span className="relative inline-block">
                    <span className="relative z-10">Jonas</span>
                    <span
                      aria-hidden
                      className="absolute inset-0 text-yellow animate-glitch-shift motion-reduce:hidden"
                    >
                      Jonas
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className="inline-block align-baseline w-3 h-3 sm:w-4 sm:h-4 ml-1 bg-yellow"
                  />
                </div>
              </span>
            </h1>
            <ProfilePic className="hidden sm:block" />
            <ProfilePic className="sm:hidden" cropped />
          </div>
          <div className="text-2xl sm:text-3xl tracking-tight">
            I&apos;m a{" "}
            <span className="relative inline-block">
              <span className="relative z-10">
                Freelance Frontend &amp; Full-Stack Developer
              </span>
              <svg
                aria-hidden
                className="absolute left-0 right-0 -bottom-2 w-full h-2.5 text-yellow"
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
          </div>
          <div className="font-sans mt-4 sm:w-2/3 text-muted leading-relaxed">
            I&apos;m a frontend &amp; full-stack developer with seven years of
            experience at companies like Google. I build fast, reliable and
            accessible web applications across the full stack with Angular,
            React, Next.js and TypeScript. Also I love a good challenge. If you
            got one - hit me up!
          </div>
          <div className="flex gap-4">
            <Button href="mailto:contact@jmattes.de">Contact me</Button>
            <Button
              href="/resume.pdf"
              variant="ghost"
              title="Opens resume PDF in a new tab"
            >
              Download resume
            </Button>
          </div>
        </header>
      </div>
      <main
        id="main"
        className="lg:pb-20 sm:mt-20 flex-shrink-0"
      >
        <CV />
      </main>
      <footer>
        <div className="mt-16 font-mono text-sm">
          <Disclaimer />
        </div>
        <div className="flex gap-12 font-mono justify-end mt-8">
          <Link href="/impressum" className="hover:text-yellow underline">
            Impressum
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default IndexPage;
