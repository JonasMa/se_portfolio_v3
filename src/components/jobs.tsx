import React from "react";
import Chips from "./chips";
import jobs from "../content/jobs/jobs.json";

export default function Jobs() {
  return (
    <ol className="flex flex-col">
      {jobs.map(({ company, duration, description, technologies }, index) => (
        <li
          key={index}
          className="group relative grid md:grid-cols-[110px_1fr] gap-y-2 gap-x-10 py-8 first:pt-0 border-t border-border first:border-t-0"
        >
          <div className="font-mono text-sm text-muted md:pt-1.5">
            {duration.from}
            {duration.to ? ` – ${duration.to}` : " – Present"}
          </div>
          <div>
            <h3 className="font-sans font-bold text-xl tracking-tight text-ink">
              {company}
            </h3>
            <p className="mt-2 text-muted leading-relaxed max-w-2xl">
              {description}
            </p>
            <Chips className="mt-4" chips={technologies} />
          </div>
        </li>
      ))}
    </ol>
  );
}
