import React from "react";
import Chips from "./chips";
import jobs from "../content/jobs/jobs.json";

export default function Jobs() {
  return (
    <div className="flex flex-col gap-8 text-black">
      {jobs.map(({ company, duration, description, technologies }, index) => (
        <div key={index} className="border-b border-grey-light pb-6">
          <div className="whitespace-nowrap flex justify-between">
            <h4 className="font-sans font-bold text-xl">{company}</h4>
            <p className="font-sans">
              {duration.from}
              {duration.to && " - " + duration.to}
            </p>
          </div>
          <div className="text-m list-disc mt-2">
            {description}
          </div>
          <Chips className="col-start-2 mt-2" chips={technologies} />
        </div>
      ))}
    </div>
  );
}
