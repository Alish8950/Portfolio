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
          <Box className="flex w-full max-w-[192px] items-center gap-3 bg-gray-50 py-4 px-5 rounded-lg dark:bg-bg-light">
            <Box className="w-8">
              <img
                src="https://res.cloudinary.com/dk1pnr6pl/image/upload/v1739173545/html5-original_daidp5.svg"
                alt="HTML"
              />
            </Box>
            <Typography className=" !text-text-light">
              HTML
            </Typography>
          </Box>
          <Box className="flex w-full max-w-[192px] items-center gap-3 bg-gray-50 py-3 px-5 rounded-lg dark:bg-bg-light">
            <Box className="w-8">
              <img
                src="https://res.cloudinary.com/dk1pnr6pl/image/upload/v1739173544/css3-plain_wylfcx.svg"
                alt="CSS"
              />
            </Box>
            <Typography className=" !text-text-light">
              CSS
            </Typography>
          </Box>
          <Box className="flex w-full max-w-[192px] items-center gap-3 bg-gray-50 py-3 px-5 rounded-lg dark:bg-bg-light">
            <Box className="w-8">
              <img
                src="https://res.cloudinary.com/dk1pnr6pl/image/upload/v1739173543/javascript-original_vaq5nn.svg"
                alt="JS"
              />
            </Box>
            <Typography className=" !text-text-light">
              JavaScript
            </Typography>
          </Box>
          <Box className="flex w-full max-w-[192px] items-center gap-3 bg-gray-50 py-3 px-5 rounded-lg dark:bg-bg-light">
            <Box className="w-8">
              <img
                src="https://res.cloudinary.com/dk1pnr6pl/image/upload/v1739173542/tailwindcss-icon_fc1dot.svg"
                alt="Tailwind"
              />
            </Box>
            <Typography className=" !text-text-light">
                Tailwind
            </Typography>
          </Box>
          <Box className="flex w-full max-w-[192px] items-center gap-3 bg-gray-50 py-3 px-5 rounded-lg dark:bg-bg-light">
            <Box className="w-8">
              <img
                src="https://res.cloudinary.com/dk1pnr6pl/image/upload/v1739173544/bootstrap-plain_dmdiy4.svg"
                alt="Bootstrap"
              />
            </Box>
            <Typography className=" !text-text-light">
              Bootstrap
            </Typography>
          </Box>
          <Box className="flex w-full max-w-[192px] items-center gap-3 bg-gray-50 py-3 px-5 rounded-lg dark:bg-bg-light">
            <Box className="w-8">
              <img
                src="https://res.cloudinary.com/dk1pnr6pl/image/upload/v1739173542/react-original-wordmark_stxchu.svg"
                alt="React"
              />
            </Box>
            <Typography className=" !text-text-light">
              React
            </Typography>
          </Box>
          <Box className="flex w-full max-w-[192px] items-center gap-3 bg-gray-50 py-3 px-5 rounded-lg dark:bg-bg-light">
            <Box className="w-8">
              <img
                src="https://res.cloudinary.com/dk1pnr6pl/image/upload/v1739173541/typescript-original_ifiuwf.svg"
                alt="TS"
              />
            </Box>
            <Typography className=" !text-text-light">
              Typescript
            </Typography>
          </Box>
          <Box className="flex w-full max-w-[192px] items-center gap-3 bg-gray-50 py-3 px-5 rounded-lg dark:bg-bg-light">
            <Box className="w-8">
              <img
                src="https://res.cloudinary.com/dk1pnr6pl/image/upload/v1739173544/redux-original_cbehzx.svg"
                alt="Redux"
              />
            </Box>
            <Typography className=" !text-text-light">
              Redux
            </Typography>
          </Box>
          <Box className="flex w-full max-w-[192px] items-center gap-3 bg-gray-50 py-3 px-5 rounded-lg dark:bg-bg-light">
            <Box className="w-8">
              <img
                src="https://res.cloudinary.com/dk1pnr6pl/image/upload/v1739173546/nodejs-original-wordmark_lsvdrj.svg"
                alt="NodeJs"
              />
            </Box>
            <Typography className=" !text-text-light">
              NodeJs
            </Typography>
          </Box>
          <Box className="flex w-full max-w-[192px] items-center gap-3 bg-gray-50 py-3 px-5 rounded-lg dark:bg-bg-light">
            <Box className="w-8">
              <img
                src="https://res.cloudinary.com/dk1pnr6pl/image/upload/v1739173546/express-original-wordmark_krqtk9.svg"
                alt="Express"
              />
            </Box>
            <Typography className=" !text-text-light">
              Express
            </Typography>
          </Box>
          <Box className="flex w-full max-w-[192px] items-center gap-3 bg-gray-50 py-3 px-5 rounded-lg dark:bg-bg-light">
            <Box className="w-8">
              <img
                src="https://res.cloudinary.com/dk1pnr6pl/image/upload/v1739173541/mongodb-plain_p7svdd.svg"
                alt="MongoDB"
              />
            </Box>
            <Typography className=" !text-text-light">
              MongoDB
            </Typography>
          </Box>
          <Box className="flex w-full max-w-[192px] items-center gap-3 bg-gray-50 py-3 px-5 rounded-lg dark:bg-bg-light">
            <Box className="w-8">
              <img
                src="https://res.cloudinary.com/dk1pnr6pl/image/upload/v1739173541/git-plain_zfhpwb.svg"
                alt="GitHub"
              />
            </Box>
            <Typography className=" !text-text-light">
              GitHub
            </Typography>
          </Box>
          <Box className="flex w-full max-w-[192px] items-center gap-3 bg-gray-50 py-3 px-5 rounded-lg dark:bg-bg-light">
            <Box className="w-8">
              <img
                src="https://res.cloudinary.com/dk1pnr6pl/image/upload/v1739173544/getpostman-icon_omefl3.svg"
                alt="Postman"
              />
            </Box>
            <Typography className=" !text-text-light">
              Postman
            </Typography>
          </Box>
          <Box className="flex w-full max-w-[192px] items-center gap-3 bg-gray-50 py-3 px-5 rounded-lg dark:bg-bg-light">
            <Box className="w-8">
              <img
                src="https://res.cloudinary.com/dk1pnr6pl/image/upload/v1739173541/firebase-icon_m9vuc8.svg"
                alt="Firebase"
              />
            </Box>
            <Typography className=" !text-text-light">
              Firebase
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AboutMe;
