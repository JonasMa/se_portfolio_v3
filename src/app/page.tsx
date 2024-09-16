import "../app/globals.css";
import Link from "next/link";
import React from "react";
import CV from "../components/cv";
import Menu from "../components/menu";
import SocialMediaIcons from "../components/social";

const IndexPage: React.FC = () => {
  return (
    <div className="lg:flex gap-8 px-4 mb-16 lg:mb-0 container mx-auto min-h-screen">
      <a className="absolute left-0 -translate-y-full focus:translate-y-0 text-white p-1" href="#main">
        Skip to content
      </a>
      <div className="py-20 lg:pt-32 lg:sticky lg:top-0 lg:self-start lg:w-1/2 lg:min-h-screen flex flex-col gap-4 lg:justify-between">
        <header>
          <h1 className="text-6xl font-bold text-yellow">Jonas Mattes</h1>
          <h2 className="mt-3 font-mono text-blue-light">
            Freelance Web Engineer
          </h2>
        </header>
        <Menu />
        <footer className="flex gap-12 font-mono text-blue-light ">
          <SocialMediaIcons />
          <Link href="/impressum" className="hover:text-yellow">
            Impressum
          </Link>
        </footer>
      </div>
      <main
        id="main"
        className="lg:pt-36 lg:pb-20 lg:w-1/2 font-mono text-sm text-white overflow-y-auto flex-shrink-0"
      >
        <CV />
      </main>
    </div>
  );
};

export default IndexPage;
