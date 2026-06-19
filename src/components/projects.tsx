"use client";

import React, { useState, useEffect, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import projects from "../content/projects/projects.json";
import { motion, AnimatePresence } from "framer-motion";
import Chips from "./chips";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import visanaImage from "../../public/projects/visana.png";
import ticketImage from "../../public/projects/ticket.png";
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
  quiz: quizImage,
  tracking: trackingImage,
  vr: vrImage,
  home: homeImage,
  critique: critiqueImage,
  cider: ciderImage,
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
      <div className="grid items-baseline grid-cols-1 md:grid-cols-6 gap-x-8 gap-y-12">
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
            <div className="font-sans font-bold leading-none text-xl">
              <span className="bg-yellow text-black box-decoration-clone px-1">
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
          <span className="font-sans font-bold text-black bg-yellow box-decoration-clone px-1">
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
  const panelRef = useRef<HTMLDivElement>(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    if (!project) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;

    // Lock background scroll, compensating for the removed scrollbar width
    // so the page underneath doesn't shift.
    const { body } = document;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    const prevOverflow = body.style.overflow;
    const prevPaddingRight = body.style.paddingRight;
    body.style.overflow = "hidden";
    if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`;

    // Move focus into the dialog.
    panelRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onCloseRef.current();
        return;
      }
      if (e.key !== "Tab") return;

      const panel = panelRef.current;
      if (!panel) return;
      const focusables = Array.from(
        panel.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((el) => el.offsetParent !== null || el === panel);

      if (focusables.length === 0) {
        e.preventDefault();
        panel.focus();
        return;
      }

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;

      if (e.shiftKey && (active === first || active === panel)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("keydown", onKey);
      body.style.overflow = prevOverflow;
      body.style.paddingRight = prevPaddingRight;
      previouslyFocused?.focus?.();
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          onClick={() => onClose()}
          className="text-ink bg-overlay/60 backdrop-blur-sm p-4 sm:p-8 fixed inset-0 z-50 grid place-items-center cursor-pointer"
        >
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            tabIndex={-1}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-bg w-full max-w-2xl max-h-[calc(100dvh-2rem)] sm:max-h-[calc(100dvh-4rem)] flex flex-col shadow-brutal-lg cursor-default relative overflow-hidden border-2 border-ink focus:outline-none"
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
            <div className="min-h-0 overflow-y-auto overscroll-contain">
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
              <h1
                id="project-modal-title"
                className="mt-1 font-sans text-2xl font-semibold tracking-tight text-ink"
              >
                {project.title}
              </h1>
              <div className="mt-2 flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-xs uppercase tracking-wider text-muted">
                {"role" in project && project.role && (
                  <span>{project.role}</span>
                )}
                {"role" in project &&
                  project.role &&
                  formatDuration(project.duration) && (
                    <span aria-hidden className="text-border-strong">
                      /
                    </span>
                  )}
                {formatDuration(project.duration) && (
                  <span>{formatDuration(project.duration)}</span>
                )}
              </div>

              {"metric" in project && project.metric && (
                <div className="mt-5 inline-flex items-baseline gap-3 border-2 border-ink bg-bg px-3 py-2 shadow-brutal-sm">
                  <span className="font-sans font-bold text-2xl text-black leading-none bg-yellow box-decoration-clone px-1">
                    {project.metric.value}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider text-muted leading-tight">
                    {project.metric.label}
                  </span>
                </div>
              )}

              <p className="mt-6 font-sans text-lg text-ink leading-relaxed">
                {project.summary}
              </p>

              <SectionLabel className="mt-8">The Challenge</SectionLabel>
              <p className="mt-3 text-muted leading-relaxed">
                {project.context}
              </p>

              <SectionLabel className="mt-8">What I did</SectionLabel>
              <ul className="mt-4 space-y-3">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span
                      aria-hidden
                      className="mt-[7px] h-2 w-2 shrink-0 border border-ink bg-yellow"
                    />
                    <span className="text-muted leading-relaxed">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>

              {"outcome" in project && project.outcome && (
                <div className="mt-8 border-2 border-ink bg-surface p-5 shadow-brutal-sm">
                  <div className="font-mono text-xs uppercase tracking-wider text-muted">
                    Outcome
                  </div>
                  <p className="mt-2 text-ink leading-relaxed">
                    {project.outcome}
                  </p>
                </div>
              )}

              <SectionLabel className="mt-8 mb-4">Built with</SectionLabel>
              <Chips chips={project.technologies} />

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
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const SectionLabel: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <span className="font-mono text-xs uppercase tracking-wider text-muted whitespace-nowrap">
      {children}
    </span>
    <span aria-hidden className="h-px flex-1 bg-border" />
  </div>
);

function formatDuration(duration?: { from: string; to: string }): string {
  if (!duration?.from) return "";
  if (!duration.to || duration.to === duration.from) return duration.from;
  return `${duration.from}–${duration.to}`;
}

function notEmpty<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}
