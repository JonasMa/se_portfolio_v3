"use client";

import React, { useState } from "react";
import projects from "../content/projects/projects.json";
import { motion, AnimatePresence } from "framer-motion";
import Chips from "./chips";
import Link from "next/link";

type Project = (typeof projects)[number];

// TODO: Do _selected projects_ and _all projects_
export default function Projects() {
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>();
  const selectedProject =
    selectedIndex !== undefined ? projects[selectedIndex] : undefined;
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 gap-x-10 gap-y-14">
      <SpringModal
        project={selectedProject}
        onClose={() => setSelectedIndex(undefined)}
      />
      {projects.map(
        (
          { company, title, duration, description, technologies, artifact },
          index
        ) => (
          <div>
            <motion.div
              whileHover={{ scale: 0.95, rotate: "-1deg" }}
              className={
                "bg-yellow-light col-span-12 md:col-span-4 group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8"
              }
              key={index}
              onClick={() => setSelectedIndex(index)}
            >
              <div className="absolute bg-white bottom-0 left-4 right-4 top-8 translate-y-8 rounded-t-2xl bg-gradient-to-br from-violet-400 to-indigo-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
                {/* Picture here */}
              </div>
            </motion.div>
            <h2 className="text-xs font-normal text-black mt-4">{company}</h2>
            <h3 className="text-lg font-sans font-bold text-black">
              {title}
            </h3>
            <div className="flex gap-2 text-grey">
              {technologies.map((tech) => (
                <span>{tech}</span>
              ))}
            </div>
          </div>
        )
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
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <div className="relative z-10">
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
