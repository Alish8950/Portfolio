import { Resume } from "../assets";
import { profile } from "../data/profile";
import { DownloadIcon, GithubIcon, LinkedinIcon, MailIcon } from "./Icons";

const Contact = () => (
  <section id="contact" className="scroll-mt-24 py-16 sm:py-20">
    <div className="rounded-2xl border border-line bg-surface p-8 text-center sm:p-12">
      <p className="text-sm font-semibold uppercase tracking-wider text-accent">Contact</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">Let&apos;s talk</h2>
      <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
        I&apos;m open to remote frontend roles. The quickest way to reach me is email.
      </p>
      <a
        href={`mailto:${profile.email}`}
        className="mt-8 inline-flex max-w-full items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold break-all text-on-accent transition-opacity hover:opacity-90"
      >
        <MailIcon className="shrink-0" />
        {profile.email}
      </a>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-medium">
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-muted hover:text-ink">
          <LinkedinIcon /> LinkedIn
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-muted hover:text-ink">
          <GithubIcon /> GitHub
        </a>
        <a href={Resume} download="Alish_Allawadhi_Resume.pdf" className="inline-flex items-center gap-2 text-muted hover:text-ink">
          <DownloadIcon /> Resume (PDF)
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
