"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import projects from "../content/projects/projects.json";
import { motion, AnimatePresence } from "framer-motion";
import Chips from "./chips";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import visanaImage from "../../public/projects/visana.png";
import ticketImage from "../../public/projects/ticket.png";
import foodImage from "../../public/projects/food.png";
import quizImage from "../../public/projects/quiz.jpg";
import trackingImage from "../../public/projects/tracking.png";
import vrImage from "../../public/projects/vr.jpg";
import homeImage from "../../public/projects/home.jpg";
import critiqueImage from "../../public/projects/critique.png";
import ciderImage from "../../public/projects/cider.png";
import genericImage from "../../public/projects/generic.jpg";
import Button from "./button";

type Project = (typeof projects)[number];
const featuredIds = [
  "kipti",
  "critique",
  "ticket",
  "visana",
  "cider",
  "tracking",
];

const featuredProjects = featuredIds
  .map((featuredId) => projects.find(({ id }) => id === featuredId))
  .filter(notEmpty);
const moreProjects = projects.filter(({ id }) => !featuredIds.includes(id));

const allProjects = [...featuredProjects, ...moreProjects];

const images: Record<string, StaticImageData> = {
  kipti: genericImage,
  visana: visanaImage,
  ticket: ticketImage,
  sphere: genericImage,
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

const PROJECT_QUERY_PARAM = "project";

export default function Projects() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>();
  const [doLoadMore, setDoLoadMore] = useState(false);
  const projectsToDisplay = doLoadMore ? allProjects : featuredProjects;
  const selectedProject =
    selectedIndex !== undefined ? projectsToDisplay[selectedIndex] : undefined;

  // Open modal from URL query param (e.g. /?project=visana)
  useEffect(() => {
    const projectId = searchParams.get(PROJECT_QUERY_PARAM);
    if (!projectId) return;

    const index = allProjects.findIndex((p) => p.id === projectId);
    if (index === -1) return;

    setDoLoadMore(true); // Ensure all projects are loaded
    setSelectedIndex(index);
  }, [searchParams]);

  const openModal = (index: number) => {
    setSelectedIndex(index);
    const project = allProjects[index];
    const params = new URLSearchParams(searchParams.toString());
    params.set(PROJECT_QUERY_PARAM, project.id);
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  const closeModal = () => {
    setSelectedIndex(undefined);
    const params = new URLSearchParams(searchParams.toString());
    params.delete(PROJECT_QUERY_PARAM);
    const newUrl = params.toString() ? `?${params.toString()}` : window.location.pathname;
    router.replace(newUrl, { scroll: false });
  };

  return (
    <>
      <SpringModal project={selectedProject} onClose={closeModal} />
      <div className="grid grid-cols-1 md:grid-cols-6 gap-x-8 gap-y-12">
        {projectsToDisplay.map((project, index) => {
          const isFeatured = index < 2;
          const colSpan = isFeatured
            ? "md:col-span-6 lg:col-span-3"
            : "md:col-span-3 lg:col-span-2";
          return (
            <ProjectCard
              key={project.id}
              project={project}
              featured={isFeatured}
              className={colSpan}
              onClick={() => openModal(index)}
            />
          );
        })}
      </div>
      {!doLoadMore && (
        <div className="mt-12 flex justify-center">
          <Button
            variant="outline"
            title="Load more projects"
            onClick={() => setDoLoadMore(true)}
          >
            Load more projects
          </Button>
        </div>
      )}
    </>
  );
}

const ProjectCard: React.FC<{
  project: Project;
  featured: boolean;
  className?: string;
  onClick: () => void;
}> = ({ project, featured, className = "", onClick }) => {
  const { id, company, title, technologies } = project;
  const metric = "metric" in project ? project.metric : undefined;
  const aspect = featured ? "aspect-[16/10]" : "aspect-[4/3]";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-ink ${className}`}
    >
      <div
        className={`relative ${aspect} overflow-hidden bg-surface border-2 border-ink shadow-brutal-md transition-transform duration-150 ease-out group-hover:-translate-x-[2px] group-hover:-translate-y-[2px] group-hover:shadow-brutal-lg`}
      >
        {images[id] && (
          <Image
            src={images[id]}
            alt=""
            placeholder="blur"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />
        )}
        {featured && metric && (
          <div className="absolute left-0 bottom-0 bg-bg border-t-2 border-r-2 border-ink px-3 py-2 max-w-[85%]">
            <div className="font-sans font-bold text-ink leading-none text-xl">
              <span className="bg-yellow box-decoration-clone px-1">
                {metric.value}
              </span>
            </div>
            <div className="font-mono text-[10px] uppercase tracking-wider text-muted mt-1.5 leading-tight">
              {metric.label}
            </div>
          </div>
        )}
      </div>
      <div className="mt-4 font-mono text-xs uppercase tracking-wider text-muted">
        {company}
      </div>
      <h3 className="mt-1 font-sans font-semibold text-ink tracking-tight text-lg leading-snug">
        {title}
      </h3>
      {!featured && metric ? (
        <div className="mt-2 flex items-baseline gap-2 text-xs text-muted">
          <span className="font-sans font-bold text-ink bg-yellow box-decoration-clone px-1">
            {metric.value}
          </span>
          <span className="font-mono leading-tight">{metric.label}</span>
        </div>
      ) : (
        <div className="mt-2 flex gap-x-3 gap-y-1 text-sm text-muted flex-wrap">
          {technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="whitespace-nowrap">
              {tech}
            </span>
          ))}
        </div>
      )}
    </button>
  );
};

const SpringModal = ({
  project,
  onClose,
}: {
  onClose: () => void;
  project?: Project;
}) => {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          onClick={() => onClose()}
          className="text-ink bg-overlay/60 backdrop-blur-sm p-4 sm:p-8 fixed inset-0 z-50 grid place-items-center overflow-y-auto cursor-pointer"
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-bg w-full max-w-2xl shadow-brutal-lg cursor-default relative overflow-hidden border-2 border-ink"
          >
            <button
              aria-label="Close project details"
              className="absolute top-3 right-3 z-10 grid place-items-center w-11 h-11 bg-bg border-2 border-ink text-ink shadow-brutal-sm transition-transform duration-150 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-brutal-xs"
              onClick={() => onClose()}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M3 3L13 13M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            {images[project.id] && (
              <div className="relative aspect-[16/9] overflow-hidden bg-surface">
                <Image
                  src={images[project.id]}
                  alt=""
                  placeholder="blur"
                  fill
                  sizes="(min-width: 768px) 672px, 100vw"
                  className="object-cover"
                />
              </div>
            )}
            <div className="p-6 lg:p-10">
              <div className="font-mono text-xs uppercase tracking-wider text-muted">
                {project.company}
              </div>
              <h1 className="mt-1 font-sans text-2xl font-semibold tracking-tight text-ink">
                {project.title}
              </h1>
              {"metric" in project && project.metric && (
                <div className="mt-4 flex items-baseline gap-3">
                  <span className="font-sans font-bold text-2xl text-ink leading-none bg-yellow box-decoration-clone px-1">
                    {project.metric.value}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider text-muted leading-tight">
                    {project.metric.label}
                  </span>
                </div>
              )}
              <div className="mt-4">
                <Chips chips={project.technologies} />
              </div>
              <p className="mt-5 text-muted leading-relaxed">
                {project.description}
              </p>
              {project.artifact && (
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="font-mono text-xs uppercase tracking-wider text-muted">
                    Artifact
                  </div>
                  <Link
                    href={project.artifact.link}
                    className="mt-1 inline-block text-ink underline underline-offset-4 decoration-border-strong hover:decoration-ink transition-colors"
                    target="_blank"
                  >
                    {project.artifact.name}
                  </Link>
                </div>
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
