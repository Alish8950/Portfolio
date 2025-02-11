import { Box, Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
// import GithubLogo from "../components/GithubLogo";
import {
  GithubLogo,
  GithubLogoWhite,
  GmailLogo,
  InstaLogo,
  LinkedinLogo,
} from "../assets";
import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import SkillsOrbit from "../components/SkillsOrbit";
import AboutMe from "../components/AboutMe";
import WorkEx from "../components/WorkEx";
import Projects from "../components/Projects";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Box className="mt-10 xs:mt-15 sm:mt-20 lg:mt-25">
        <Box className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Box>
            <Typography className="!text-[40px] lg:!text-7xl xs:!text-5xl">
              Hi, I am Alish
            </Typography>
            <TypeAnimation
              className="text-[28px] font-bold text-primary-light dark:text-primary-dark lg:text-5xl xs:text-4xl"
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Frontend Developer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Full Stack Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
            <Typography className="!mt-5 !text-xl">
              A performance-oriented software engineer specializing in
              full-stack development, delivering top-notch, user-focused
              solutions within agile frameworks.
            </Typography>
            <Box className="mt-5 flex items-center gap-4">
              <a
                className="transition-transform duration-300 w-12 block hover:scale-120"
                href="https://github.com/Alish8950"
                target="_blank"
              >
                {theme === "dark" ? (
                  <img src={GithubLogoWhite} alt="github" />
                ) : (
                  <img src={GithubLogo} alt="github" />
                )}
              </a>
              <a
                className="transition-transform duration-300 w-12 block hover:scale-120"
                href="https://www.linkedin.com/in/alish-allawadhi-60a883219"
                target="_blank"
              >
                {theme === "dark" ? (
                  <img src={LinkedinLogo} alt="linkedin" />
                ) : (
                  <img src={LinkedinLogo} alt="linkedin" />
                )}
              </a>
              <a
                className="transition-transform duration-300 w-15 block hover:scale-120"
                href="mailto:alishallawadhi5@gmail.com"
              >
                {theme === "dark" ? (
                  <img src={GmailLogo} alt="gmail" />
                ) : (
                  <img src={GmailLogo} alt="gmail" />
                )}
              </a>
              <a
                className="transition-transform duration-300 w-12 block hover:scale-120"
                href="https://www.instagram.com/alish_allawadhi/"
                target="_blank"
              >
                {theme === "dark" ? (
                  <img src={InstaLogo} alt="insta" />
                ) : (
                  <img src={InstaLogo} alt="insta" />
                )}
              </a>
            </Box>
          </Box>
          <SkillsOrbit />
        </Box>
        <AboutMe />
        <WorkEx />
        <Projects />
      </Box>
    </>
  );
};

export default Home;
