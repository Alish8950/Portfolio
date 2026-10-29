import { projects } from "../data/profile";
import { ArrowUpRightIcon } from "./Icons";
import { Section, Tag } from "./Section";

const Projects = () => (
  <Section id="projects" eyebrow="Projects" title="Products I've helped build">
    <div className="grid gap-6 sm:grid-cols-2">
      {projects.map((p) => (
        <a
          key={p.name}
          href={p.url}
          target="_blank"
          rel="noreferrer"
          className="group flex flex-col overflow-hidden rounded-xl border border-line bg-surface transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-lg"
        >
          <div className="aspect-[16/9] overflow-hidden border-b border-line bg-accent-soft">
            {p.img ? (
              <img
                src={p.img}
                alt={`${p.name} screenshot`}
                loading="lazy"
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="grid h-full place-items-center">
                <span className="text-4xl font-bold tracking-tight text-accent">{p.name}</span>
              </div>
            )}
          </div>
          <div className="flex flex-1 flex-col p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold text-ink">{p.name}</h3>
                <p className="text-sm text-muted">{p.org}</p>
              </div>
              <ArrowUpRightIcon className="shrink-0 text-muted transition-colors group-hover:text-accent" />
            </div>
            <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">{p.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>
        </a>
      ))}
    </div>
  </Section>
);

export default Projects;
