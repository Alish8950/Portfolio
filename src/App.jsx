import { useContext, useEffect, useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { ThemeContext } from "./context/themeContext";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);

  // useEffect(() => {
  //   // Apply theme class to `document.documentElement`
  //   document.documentElement.classList.toggle("dark", theme === "dark");

  //   // Save the selected theme to localStorage
  //   if (theme === "system") {
  //     // localStorage.removeItem("theme");
  //     localStorage.setItem(
  //       "theme",
  //       window.matchMedia("(prefers-color-scheme: dark)").matches
  //         ? "dark"
  //         : "light"
  //     );
  //     setTheme(
  //       window.matchMedia("(prefers-color-scheme: dark)").matches
  //         ? "dark"
  //         : "light"
  //     );
  //   } else {
  //     localStorage.setItem("theme", theme);
  //   }
  // }, [theme]);
  useEffect(() => {
    const root = document.documentElement;

    const applyTheme = (theme) => {
      root.classList.toggle("dark", theme === "dark");
      localStorage.setItem("theme", theme);
    };

    if (theme === "system") {
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const resolvedTheme = systemPrefersDark ? "dark" : "light";
      applyTheme(resolvedTheme);
      setTheme(resolvedTheme);
    } else {
      applyTheme(theme);
    }
  }, [theme]);
  return (
    <>
      <div className="h-screen overflow-auto bg-bg-light w-full dark:bg-bg-dark">
        <div className="max-w-[1440px] mx-auto w-full px-6 py-5">
          <Header/>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
