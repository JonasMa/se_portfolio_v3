import React from "react";
import Chips from "./chips";
import projects from "../content/projects/projects.json";

export default function Projects() {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2-auto gap-x-8 gap-y-4">
      {projects.map(
        (
          { company, title, duration, description, technologies, link },
          index
        ) => [
          <div
            key={`${index}-0`}
            className="whitespace-nowrap flex justify-between md:block"
          >
            <h4 className="font-sans font-bold">{company}</h4>
            <p className="text-blue-light">
              {duration.from}
              {duration.to && " - " + duration.to}
            </p>
          </div>,
          <div key={`${index}-1`}>
            <h4 className="font-sans font-bold mb-4">{title}</h4>
            {description}
            {link && (
              <div className="col-start-2 underline text-blue-light mt-2">
                <a href={link} target="_blank" rel="noreferrer">
                  Artifacts
                </a>
              </div>
            )}
          </div>,
          <Chips
            key={`${index}-2`}
            className="col-start-2"
            chips={technologies}
          />,
        ]
      )}
    </div>
  );
}
