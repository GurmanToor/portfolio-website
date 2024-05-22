import React from "react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";
import Title from "./Title";

function Portfolio() {
  return (
    <div className="flex flex-col items-start justify-center">
      <Title>Projects</Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {portfolio.map((project) => (
          <PortfolioItem
            title={project.title}
            imgUrl={project.imgUrl}
            description={project.description}
            stack={project.stack}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
