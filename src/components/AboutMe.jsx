import { Box, Typography } from "@mui/material";
import React from "react";

const AboutMe = () => {
  return (
    <>
      <Box className="flex flex-col w-full mt-10">
        <Typography className="!text-5xl text-center">About Me</Typography>
        <Box className="mt-4">
          <Typography className="!text-3xl !font-semibold !text-primary-light dark:text-primary-dark">
            A bit about me
          </Typography>
          <Typography className="!text-xl !mt-2">
            I am a dedicated developer with over 3 years of experience in
            building responsive and scalable web applications. With a strong
            focus on both frontend and backend technologies, I have worked on
            creating seamless user experiences while optimizing application
            performance. I am passionate about learning new technologies and
            staying up to date with industry trends, constantly improving my
            skill set. My goal is to become a proficient Full Stack MERN
            developer, delivering high-quality, efficient solutions and
            contributing to the success of the projects I work on.
          </Typography>
        </Box>
        <Box className="mt-4">
          <Typography className="!text-3xl !font-semibold !text-primary-light dark:text-primary-dark">
            Technologies and Tools
          </Typography>
          <Typography className="!text-xl !mt-2">
            Using a combination of cutting-edge technologies and reliable
            open-source software I build user-focused, performant apps and
            websites for smartphones, tablets, and desktops.
          </Typography>
        </Box>
        <Box className="grid grid-cols-1 gap-10 mt-5 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2">
          {techData.map((tech, index) => (
            <Box
              key={index}
              className="flex w-full max-w-[100%] items-center gap-3 bg-gray-50 py-3 px-5 rounded-lg dark:bg-bg-light xs:max-w-[192px]"
            >
              <Box className="w-8">
                <img src={tech.src} alt={tech.alt} />
              </Box>
              <Typography className=" !text-text-light">
                {tech.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default AboutMe;

const techData = [
  {
    src: "https://res.cloudinary.com/dk1pnr6pl/image/upload/v1739173545/html5-original_daidp5.svg",
    alt: "HTML",
    label: "HTML",
  },
  {
    src: "https://res.cloudinary.com/dk1pnr6pl/image/upload/v1739173544/css3-plain_wylfcx.svg",
    alt: "CSS",
    label: "CSS",
  },
  {
    src: "https://res.cloudinary.com/dk1pnr6pl/image/upload/v1739173543/javascript-original_vaq5nn.svg",
    alt: "JS",
    label: "JavaScript",
  },
  {
    src: "https://res.cloudinary.com/dk1pnr6pl/image/upload/v1739173542/tailwindcss-icon_fc1dot.svg",
    alt: "Tailwind",
    label: "Tailwind",
  },
  {
    src: "https://res.cloudinary.com/dk1pnr6pl/image/upload/v1739173544/bootstrap-plain_dmdiy4.svg",
    alt: "Bootstrap",
    label: "Bootstrap",
  },
  {
    src: "https://res.cloudinary.com/dk1pnr6pl/image/upload/v1739173542/react-original-wordmark_stxchu.svg",
    alt: "React",
    label: "React",
  },
  {
    src: "https://res.cloudinary.com/dk1pnr6pl/image/upload/v1739173541/typescript-original_ifiuwf.svg",
    alt: "TS",
    label: "Typescript",
  },
  {
    src: "https://res.cloudinary.com/dk1pnr6pl/image/upload/v1739173544/redux-original_cbehzx.svg",
    alt: "Redux",
    label: "Redux",
  },
  {
    src: "https://res.cloudinary.com/dk1pnr6pl/image/upload/v1739173546/nodejs-original-wordmark_lsvdrj.svg",
    alt: "NodeJs",
    label: "NodeJs",
  },
  {
    src: "https://res.cloudinary.com/dk1pnr6pl/image/upload/v1739173546/express-original-wordmark_krqtk9.svg",
    alt: "Express",
    label: "Express",
  },
  {
    src: "https://res.cloudinary.com/dk1pnr6pl/image/upload/v1739173541/mongodb-plain_p7svdd.svg",
    alt: "MongoDB",
    label: "MongoDB",
  },
  {
    src: "https://res.cloudinary.com/dk1pnr6pl/image/upload/v1739173541/git-plain_zfhpwb.svg",
    alt: "GitHub",
    label: "GitHub",
  },
  {
    src: "https://res.cloudinary.com/dk1pnr6pl/image/upload/v1739173544/getpostman-icon_omefl3.svg",
    alt: "Postman",
    label: "Postman",
  },
  {
    src: "https://res.cloudinary.com/dk1pnr6pl/image/upload/v1739173541/firebase-icon_m9vuc8.svg",
    alt: "Firebase",
    label: "Firebase",
  },
];
