import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { SoftobizLogo } from "../assets";

const WorkEx = () => {
  return (
    <>
      <Box>
        <Typography className="text-center !text-4xl !mt-5 xs:!text-5xl xs:!mt-10 md:!mt-15">
          Work Experience
        </Typography>
        <Box className="mt-4">
          <Box className=" flex flex-col gap-5 items-center sm:flex sm:items-start sm:flex-row sm:gap-2">
            <Box className="mr-4">
              <Box className="bg-bg-light p-3 rounded-lg">
                <Box className="w-[120px]">
                  <img src={SoftobizLogo} alt="softobiz" />
                </Box>
              </Box>
              <Typography className="!text-gray-500 !font-medium !mt-0 sm:!mt-4 dark:!text-gray-50">
                Softobiz Technologies
              </Typography>
            </Box>
            <Divider className="!border-border-dark dark:!border-border-light" orientation="vertical" flexItem />
            <Box>
              <Typography className="!font-medium !text-xl leading-none">
                Frontend Developer
                <span className="text-xs italic text-gray-500 font-medium dark:text-gray-50">
                  ( Full-Time )
                </span>
              </Typography>
              <Typography className="!text-xs !font-medium">
                JUL 22 - Present | Mohali, Punjab (ON-SITE)
              </Typography>
              <Box className="mt-3 flex flex-col gap-2">
                <Typography className="!text-gray-500 !font-extralight !text-xl dark:!text-gray-50">
                  ⚡Developed interactive web applications using React, Next.js,
                  and Material-UI, delivering exceptional user experiences.
                </Typography>
                <Typography className="!text-gray-500 !font-extralight !text-xl dark:!text-gray-50">
                  ⚡Implemented robust backend services with Node.js,
                  Express.js, and MongoDB, ensuring smooth functionality.
                </Typography>
                <Typography className="!text-gray-500 !font-extralight !text-xl dark:!text-gray-50">
                  ⚡ Integrated third-party APIs and microservices to enhance
                  application capabilities and scalability.
                </Typography>
                <Typography className="!text-gray-500 !font-extralight !text-xl dark:!text-gray-50">
                  ⚡ Collaborated closely with cross-functional teams to design
                  and deploy scalable, user-centric web solutions.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default WorkEx;
