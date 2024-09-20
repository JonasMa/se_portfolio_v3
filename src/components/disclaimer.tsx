import * as React from "react";

const Disclaimer: React.FC = () => {
  return (
    <>
      This website is 100% self built in <strong>React</strong> with{" "}
      <strong>NextJS</strong> and <strong>Tailwind CSS</strong>.{" "}
      <a
        href="https://github.com/JonasMa/se_portfolio_v3"
        target="_blank"
        rel="noreferrer"
        className="underline"
      >
        Check it out on my GitHub{" "}
      </a>{" "}
      if you&apos;re interested.
      <br />
      The website design and functionality is inspired by{" "}
      <a
        href="https://www.hover.dev/templates/steam"
        target="blank"
        className="underline"
      >
        Hover Steam Dev
      </a>
      .
    </>
  );
};

export default Disclaimer;
