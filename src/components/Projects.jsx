import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "SCRUMMY FOOD RECIPE APP",
      description: "A recipe Application with a search by ingredient feature",
      photo: "/src/assets/projects/scrummy.png",
      liveSource: " https://rmits.github.io/scrummy-food-recipe-app/",
    },
    {
      title: "Barbie Blog App",
      description: "The Barbie blog is a CMS-style blog site that allows anyone to publish articles, post thoughts, and opinions",
      photo: "/src/assets/projects/barbie.png",
      liveSource: "https://barbie-blog-9cd3c5200a4b.herokuapp.com/",
    },
    {
      title: "TripzTracker App",
      description: "Tripztracker is an interactive MERN Single-Page application that helps save and keep track of intended or future planned trips",
      photo: "/src/assets/projects/tripztracker.png",
      liveSource: "https://lit-scrubland-93766-6711e73fcbbc.herokuapp.com/",
    },
  ];

  return (
    <div className="md:px-10 px-7 my-8" id="projects">
      <h1 className="text-primary font-semibold text-3xl mt-16">
        Featured projects:
      </h1>
      <p className="my-3 text-white md:w-3/4 leading-[2]">
        I have worked on many projects over the course of learning to be a Full Stack Developer,
        here are a few of my live, real-world projects
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 my-6 items-center justify-center">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className="flex flex-col shadow-sm md:w-[343px] bg-[#31313F] p-4 rounded"
            >
              <a
                href={project.photo}
                target="_blank"
                rel="noreferrer"
                className="mb-4"
              >
                <img src={project.photo} alt={project.title} />
              </a>
              <h3 className="text-primary font-semibold text-lg">
                {project.title}
              </h3>
              <p className="text-white mt-1">{project.description}</p>
              <div className="mt-5">
                <a
                  href={project.liveSource}
                  target="_blank"
                  rel="noreferrer"
                  className="btn outline py-1.5 px-9 rounded border-none ml-5 text-white"
                >
                  Live Source
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;

