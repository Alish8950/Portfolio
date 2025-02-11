import { Box, Typography } from "@mui/material";
import React from "react";

const ContactMe = () => {
  return (
    <>
      <Box>
        <Typography className="text-center !text-4xl !mt-5 xs:!text-5xl xs:!mt-10 md:!mt-15">
          Contact Me!
        </Typography>
        <Box className="mt-4">
          <Typography className="!text-3xl !font-semibold !text-primary-light dark:text-primary-dark">
            Contact with me
          </Typography>
          <Typography className="!text-xl !mt-2">
            Feel free to reach out if you'd like to learn more about me, my
            work, or even just to say hi! I'd be delighted to connect and hear
            from you. 😊
          </Typography>
          <Box>
            
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ContactMe;
