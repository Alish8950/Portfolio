import React, { useContext, useEffect, useState } from "react";
import { Box, Menu, MenuItem, Typography } from "@mui/material";
import { Moon, Resume, Sun } from "../assets";
import { ThemeContext } from "../context/themeContext";

const Header = () => {
  const [themeEl, setThemeEl] = useState(null);
  const { theme, setTheme } = useContext(ThemeContext);

  const open = Boolean(themeEl);
  const handleClick = (event) => {
    setThemeEl(event.currentTarget);
  };
  const handleClose = () => {
    setThemeEl(null);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = Resume;
    link.setAttribute("download", "Alish_Resume.pdf"); // Set the download file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Box
        // sx={{
        //   background: "#1f2937",
        //   backgroundImage:
        //     "linear-gradient(137deg, rgba(255, 255, 255, 0.05) 17%, transparent 37%, transparent 26%, rgba(255, 255, 255, 0.05) 43%, rgba(255, 255, 255, 0.05) 23%, transparent 65%, transparent)",
        // }}
        className={`sticky z-50 top-5 flex items-center bg-bg-light justify-between w-full border border-border-light rounded-full px-4 py-2 h-[65px] dark:border-border-dark ${
          theme === "dark" ? "header-dark" : "header-light"
        }`}
      >
        <a
          href="https://www.linkedin.com/in/alish-allawadhi-60a883219"
          className="font-[Agustina] text-primary-dark dark:text-primary-light mb-[14px]"
          target="_blank"
        >
          <span className="text-5xl inline-block w-2 h-2">&lt;</span>
          <span className="text-3xl inline-block">Alish</span>
          <span className="text-5xl inline-block w-2 h-2 ml-2 mr-[-8px]">
            /
          </span>
          <span className="text-5xl inline-block w-2 h-2 ml-[-8px]">&gt;</span>
        </a>
        <Box className="flex items-center gap-4">
          <Box className="group flex items-center gap-4">
            {/* <Box className="ease-out duration-300 transition-all text-text-light dark:text-text-dark font-medium cursor-pointer hover:text-primary-light-hover dark:hover:text-primary-dark-hover">
              Home
            </Box>
            <Box className="ease-out duration-300 transition-all text-text-light dark:text-text-dark font-medium cursor-pointer hover:text-primary-light-hover dark:hover:text-primary-dark-hover">
              About
            </Box>
            <Box className="ease-out duration-300 transition-all text-text-light dark:text-text-dark font-medium cursor-pointer hover:text-primary-light-hover dark:hover:text-primary-dark-hover">
              Experience
            </Box>*/}
            <Box onClick={handleDownload} className="ease-out duration-300 transition-all text-text-light dark:text-text-dark font-medium cursor-pointer hover:text-primary-light-hover dark:hover:text-primary-dark-hover">
              Resume
            </Box>
            <Box className="ease-out duration-300 transition-all text-text-light dark:text-text-dark font-medium cursor-pointer hover:text-primary-light-hover dark:hover:text-primary-dark-hover">
              <a href="https://forms.gle/2ptALRsCshB9xe5J9" target="_blank">
                Contact
              </a>
            </Box>
          </Box>
          <Box onClick={handleClick} className="w-5 cursor-pointer">
            {theme === "light" ? (
              <img src={Sun} alt="light" />
            ) : (
              <img src={Moon} alt="dark" />
            )}
            {/* <img src={Moon} alt="dark" /> */}
          </Box>
          <Menu
            anchorEl={themeEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            slotProps={{
              paper: {
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "&::before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 8,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={() => setTheme("light")}>Light</MenuItem>
            <MenuItem onClick={() => setTheme("dark")}>Dark</MenuItem>
            <MenuItem onClick={() => setTheme("system")}>System</MenuItem>
          </Menu>
        </Box>
      </Box>
    </>
  );
};

export default Header;
