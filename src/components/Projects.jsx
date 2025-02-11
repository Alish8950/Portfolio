import React from "react";
import { Box, Typography } from "@mui/material";
import { Aurora, ClientpointMe, ClientpointNet, CFCSus } from "../assets";

const initialProjects = [
  {
    name: "Clientpoint",
    url: "https://www.clientpoint.me/",
    img: ClientpointMe,
    tech: "NextJs | Tailwind | NodeJs | Express | AWS",
    description:
      "ClientPoint.me is a free professional relationship platform that enables users to connect, share content, e-sign documents, message, video chat, schedule meetings, and more—all within a secure environment. It serves as a comprehensive collaboration tool, allowing seamless interactions with prospects, partners, customers, coworkers, or groups, thereby streamlining business processes and enhancing productivity.",
  },
  {
    name: "ClientPoint Enterprise Solutions",
    url: "https://www.clientpoint.net/",
    img: ClientpointNet,
    tech: "HTML5 | CSS3 | Bootstrap | PHP",
    description:
      "ClientPoint is a sales enablement platform designed to streamline business interactions by providing tools for proposal management, e-signatures, and client engagement. It integrates features such as video conferencing, appointment scheduling, document creation, and analytics to enhance the efficiency of sales and client relationship processes.",
  },
  {
    name: "Arora Home Inspection",
    url: "https://app.myauroraportal.com/",
    img: Aurora,
    tech: "ReactJs | ChakraUI | Python",
    description:
      "Aurora Portal is a platform designed for home inspection businesses, offering tools for report writing, client management, and automation. It simplifies operations with features like mobile inspections, cloud storage, and AI-driven workflows.",
  },
  {
    name: "Consolidated Food Co.",
    url: "https://cfco.com/",
    img: CFCSus,
    tech: "NextJs | Tailwind | MaterialUI | Python",
    description:
      "The website cfco.com belongs to Consolidated Food Co., a company specializing in transforming global supply chains for the food industry. They offer a transparent direct sourcing model that includes customized global sourcing strategies, financing, coordinated product movement, and detailed performance reporting to empower brands and add value to supply chains worldwide.",
  },
];

const Projects = () => {
  return (
    <>
      <Box>
        <Typography className="text-center !text-4xl !mt-5 xs:!text-5xl xs:!mt-10 md:!mt-15">
          Projects
        </Typography>
        <Box className="mt-6">
          <Box className="grid grid-cols-1 gap-4 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 ">
            {initialProjects.map((project, index) => {
              return (
                <Box key={index}>
                  <Box className="max-w-[350px] pb-4 border border-border-light w-fit rounded-2xl overflow-hidden dark:border-border-dark flex flex-col items-center">
                    <Box onClick={() =>  window.open(project.url, "_blank")}
                     className="cursor-pointer w-full  h-[300px] overflow-hidden">
                      <img
                        src={project.img}
                        alt={project.name}
                        className="ease-out duration-300 h-full object-cover w-full hover:scale-120"
                      />
                    </Box>
                    <Box className="px-4 flex flex-col items-center"> 
                      <Typography className="!text-xl !mt-3">
                        {project.name}
                      </Typography>
                      <Typography className="!text-xs !font-extralight !mt-2">
                        {project.tech}
                      </Typography>
                      <Typography className="custom-ellipsis !mt-4">
                        {project.description}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Projects;
