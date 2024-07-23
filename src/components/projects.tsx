import React from "react";
import Chips from "./chips";
import projects from "../content/projects/projects.json";

export default function Projects() {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2-auto gap-x-8 gap-y-4">
      {projects.map(
        (
          { company, title, duration, description, technologies, artifact },
          index
        ) => [
          <div
            key={`${index}-0`}
            className="whitespace-nowrap flex justify-between md:block"
          >
            <span className="font-sans font-bold">{company}</span>
            <p className="text-blue-light">
              {duration.from}
              {duration.to && " - " + duration.to}
            </p>
          </div>,
          <div key={`${index}-1`}>
            <h4 className="font-sans font-bold mb-4">{title}</h4>
            {description}
            {artifact && (
              <div className="col-start-2 underline text-blue-light mt-2">
                <a href={artifact.link} target="_blank" rel="noreferrer">
                  {artifact.name}
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
