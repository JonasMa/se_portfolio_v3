"use client";

import React, { useState } from "react";
import projects from "../content/projects/projects.json";
import { motion, AnimatePresence } from "framer-motion";
import Chips from "./chips";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import visanaImage from "/public/projects/visana.png";
import ticketImage from "/public/projects/ticket.png";
import foodImage from "/public/projects/food.png";
import quizImage from "/public/projects/quiz.jpg";
import trackingImage from "/public/projects/tracking.png";
import vrImage from "/public/projects/vr.jpg";
import homeImage from "/public/projects/home.jpg";
import critiqueImage from "/public/projects/critique.png";
import ciderImage from "/public/projects/cider.png";
import genericImage from "/public/projects/generic.jpg";
import Button from "./button";

type Project = (typeof projects)[number];
const featuredIds = [
  "critique",
  "ticket",
  "visana",
  "cider",
  "tracking",
  "quiz",
];

const featuredProjects = featuredIds
  .map((featuredId) => projects.find(({ id }) => id === featuredId))
  .filter(notEmpty);
const moreProjects = projects.filter(({ id }) => !featuredIds.includes(id));

const allProjects = [...featuredProjects, ...moreProjects];

const images: Record<string, StaticImageData> = {
  visana: visanaImage,
  ticket: ticketImage,
  food: foodImage,
  quiz: quizImage,
  tracking: trackingImage,
  vr: vrImage,
  home: homeImage,
  critique: critiqueImage,
  cider: ciderImage,
  dashboard: genericImage,
  ar: genericImage,
  handyman: genericImage,
};

export default function Projects() {
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>();
  const [doLoadMore, setDoLoadMore] = useState(false);
  const projectsToDisplay = doLoadMore ? allProjects : featuredProjects;
  const selectedProject =
    selectedIndex !== undefined ? projectsToDisplay[selectedIndex] : undefined;

  return (
    <div className="flex flex-col md:grid md:grid-cols-2 gap-x-10 gap-y-14">
      <SpringModal
        project={selectedProject}
        onClose={() => setSelectedIndex(undefined)}
      />
      {projectsToDisplay.map(({ company, title, technologies, id }, index) => (
        <div key={id}>
          <motion.div
            whileHover={{ scale: 0.95, rotate: "-1deg" }}
            className={
              "border border-yellow col-span-12 md:col-span-4 group relative min-h-52 sm:min-h-[300px] cursor-pointer overflow-hidden rounded-lg bg-slate-100 p-8"
            }
            key={index}
            onClick={() => setSelectedIndex(index)}
          >
            <div className="absolute bg-white overflow-hidden bottom-0 left-4 right-4 top-0 translate-y-8 rounded-t-2xl bg-gradient-to-br transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
              {images[id] && (
                <Image src={images[id]} alt="" placeholder="blur" />
              )}
            </div>
          </motion.div>
          <div className="text-xs font-normal text-black mt-4">{company}</div>
          <h3 className="text-lg font-sans font-bold text-black">{title}</h3>
          <div className="flex gap-2 text-grey flex-wrap">
            {technologies.map((tech) => (
              <span className="whitespace-nowrap">{tech}</span>
            ))}
          </div>
        </div>
      ))}
      {!doLoadMore && (
        <Button
          color="yellow"
          title="Load more projects"
          onClick={() => setDoLoadMore(true)}
        >
          Load more
        </Button>
      )}
    </div>
  );
}

const SpringModal = ({
  project,
  onClose,
}: {
  onClose: () => void;
  project?: Project;
}) => {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => onClose()}
          className="text-black bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <button
            className="absolute top-2 right-2 bg-grey-light bg-opacity-50 px-4 py-2 m-2 font-mono rounded-full"
            onClick={() => onClose()}
          >
            x
          </button>
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            {images[project.id] && (
              <div className="flex items-center h-[300px] overflow-hidden">
                <Image src={images[project.id]} alt="" placeholder="blur" />
              </div>
            )}
            <div className="relative z-10 p-6 lg:p-10">
              <h1 className="font-sans text-xl font-bold">{project.title}</h1>
              <h2>{project.company}</h2>
              <div className="mt-1">
                <Chips chips={project.technologies} />
              </div>
              <p>{project.description}</p>
              {project.artifact && (
                <>
                  <h2 className="font-sans text-md mt-4 font-bold">
                    Artifacts
                  </h2>
                  <Link
                    href={project.artifact.link}
                    className="hover:text-yellow underline"
                    target="_blank"
                  >
                    {project.artifact.name}
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

function notEmpty<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}
