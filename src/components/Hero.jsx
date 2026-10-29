import { Resume } from "../assets";
import { profile, stats } from "../data/profile";
import { DownloadIcon, GithubIcon, LinkedinIcon, MailIcon, MapPinIcon } from "./Icons";

const Hero = () => (
  <section id="top" className="pt-14 pb-16 sm:pt-20">
    <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-muted">
      <span className="size-2 rounded-full bg-emerald-500" />
      {profile.availability}
    </span>

    <h1 className="mt-6 text-4xl font-bold tracking-tight text-ink sm:text-6xl">{profile.name}</h1>
    <p className="mt-3 text-xl font-semibold text-accent sm:text-2xl">
      {profile.role} · {profile.focus.join(" · ")}
    </p>
    <p className="mt-3 flex items-center gap-1.5 text-sm text-muted">
      <MapPinIcon width={16} height={16} />
      {profile.location}
    </p>

    <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{profile.summary}</p>

    <div className="mt-8 flex flex-wrap items-center gap-3">
      <a
        href={Resume}
        download="Alish_Allawadhi_Resume.pdf"
        className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-on-accent transition-opacity hover:opacity-90"
      >
        <DownloadIcon />
        Download resume
      </a>
      <a
        href={`mailto:${profile.email}`}
        className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent"
      >
        <MailIcon />
        Email me
      </a>
      <div className="flex items-center gap-1">
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid size-11 place-items-center rounded-lg text-muted transition-colors hover:text-ink">
          <LinkedinIcon width={20} height={20} />
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="grid size-11 place-items-center rounded-lg text-muted transition-colors hover:text-ink">
          <GithubIcon width={20} height={20} />
        </a>
      </div>
    </div>

    <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line lg:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="bg-surface p-5">
          <dt className="sr-only">{s.label}</dt>
          <dd className="text-3xl font-bold tracking-tight text-ink">{s.value}</dd>
          <dd className="mt-1 text-sm text-muted">{s.label}</dd>
        </div>
      ))}
    </dl>
  </section>
);

export default Hero;
