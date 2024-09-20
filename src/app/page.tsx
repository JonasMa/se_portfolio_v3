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
        className="absolute left-0 -translate-y-full focus:translate-y-0 text-black p-1"
        href="#main"
      >
        Skip to content
      </a>
      <div className="pt-20 lg:pt-32 flex flex-col gap-4">
        <header>
          <div className="flex flex-col-reverse sm:flex-row sm:items-end sm:gap-5">
            <h1 className="flex flex-wrap gap-2 sm:gap-4 lg:gap-5 mb-2 sm:mb-5 mt-2 sm:mt-16 text-black text-4xl sm:text-6xl lg:text-8xl font-bold font-sans">
              <span>Hi,</span>
              <span className="whitespace-nowrap flex gap-2 sm:gap-4 lg:gap-5">
                <span>I&apos;m</span>
                <span className="relative w-[max-content] before:absolute before:inset-0 before:bg-black before:animate-typewriter-5">
                  Jonas
                  <span className="text-yellow">.</span>
                </span>
              </span>
            </h1>
            <ProfilePic className="rounded-full hidden sm:block" />
            <ProfilePic className="sm:hidden" cropped />
          </div>
          <h2 className="text-2xl sm:text-3xl">
            I&apos;m a <span className="bg-yellow">Freelance Web Engineer</span>
          </h2>
          <div className="font-sans mt-4 sm:w-2/3">
            I&apos;m a software engineer with five years of experience at
            companies like Google. I like building fast, reliable and accessible
            web experiences over the full stack. Also I love a good challenge.
            If you got one - hit me up!
          </div>
          <div className="flex gap-4">
            <Button href="mailto:contact@jmattes.de">Contact me</Button>
            <Button
              href="/resume.pdf"
              color="yellow"
              title="Opens resume PDF in a new tab"
            >
              Download resume
            </Button>
          </div>
        </header>
      </div>
      <main
        id="main"
        className="lg:pb-20 sm:mt-20 font-mono text-sm text-white overflow-y-auto flex-shrink-0"
      >
        <CV />
      </main>
      <footer>
        <div className="mt-16 font-mono text-sm">
          <Disclaimer />
        </div>
        <div className="flex gap-12 font-mono justify-between mt-8">
          <SocialMediaIcons />
          <Link href="/impressum" className="hover:text-yellow underline">
            Impressum
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default IndexPage;
