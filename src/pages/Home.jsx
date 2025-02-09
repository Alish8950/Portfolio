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

const CircularText = ({ items }) => {
  return (
    <div className="relative w-64 h-64 mx-auto">
      <div className="absolute inset-0 rounded-full border border-gray-300"></div>
      {items.map((item, index) => {
        const angle = (index / items.length) * 360; // Calculate angle for each item
        const x = 50 + 40 * Math.cos((angle * Math.PI) / 180); // 40 is the radius
        const y = 50 + 40 * Math.sin((angle * Math.PI) / 180);

        return (
          <div
            key={index}
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              transform: `translate(-50%, -50%) rotate(${angle}deg)`,
              transformOrigin: `${x}% ${y}%`,
            }}
          >
            <div className="transform -rotate-90">{item}</div>
          </div>
        );
      })}
    </div>
  );
};

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const skills = ["JavaScript", "TypeScript", "Node.js", "React", "Tailwind", "HTML", "CSS"];

  return (
    <>
      <Box className="mt-30">
        <Box className="grid grid-cols-2 gap-4">
          <Box className="">
            <Typography className="!text-7xl ">Hi, I am Alish</Typography>
            <TypeAnimation
              className="text-5xl font-bold text-primary-light dark:text-primary-dark"
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
              <a className="transition-transform duration-300 w-15 block hover:scale-120" href="mailto:alishallawadhi5@gmail.com">
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
          <Box>
            
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
