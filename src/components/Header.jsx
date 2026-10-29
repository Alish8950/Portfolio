import { useContext, useState } from "react";
import { ThemeContext } from "../context/themeContext";
import { Resume } from "../assets";
import { profile } from "../data/profile";
import { CloseIcon, DownloadIcon, MenuIcon, MoonIcon, SunIcon } from "./Icons";

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="text-base font-bold tracking-tight text-ink">
          {profile.name}
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="grid size-9 cursor-pointer place-items-center rounded-lg text-muted transition-colors hover:bg-surface hover:text-ink"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <a
            href={Resume}
            download="Alish_Allawadhi_Resume.pdf"
            className="hidden items-center gap-2 rounded-lg bg-accent px-3.5 py-2 text-sm font-semibold text-on-accent transition-opacity hover:opacity-90 sm:inline-flex"
          >
            <DownloadIcon width={16} height={16} />
            Resume
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid size-9 cursor-pointer place-items-center rounded-lg text-ink hover:bg-surface md:hidden"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-line bg-bg px-4 pb-4 md:hidden" aria-label="Mobile">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-line py-3 text-sm font-medium text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href={Resume}
            download="Alish_Allawadhi_Resume.pdf"
            className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-on-accent"
          >
            <DownloadIcon width={16} height={16} />
            Download resume
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
