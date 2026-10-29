import { experience } from "../data/profile";
import { RichText, Section, Tag } from "./Section";

const Experience = () => (
  <Section id="experience" eyebrow="Experience" title="Where I've worked">
    <ol className="relative space-y-10 border-l border-line pl-6 sm:pl-8">
      {experience.map((job, i) => (
        <li key={job.company} className="relative">
          <span
            className={`absolute top-1.5 -left-[31px] size-3.5 rounded-full border-2 border-bg sm:-left-[39px] ${
              i === 0 ? "bg-accent" : "bg-line"
            }`}
          />
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-lg font-semibold text-ink">
              {job.role} <span className="text-muted">·</span> {job.company}
            </h3>
            <p className="shrink-0 text-sm font-medium text-muted">
              {job.period} · {job.location}
            </p>
          </div>
          {job.context && <p className="mt-1 text-sm italic text-muted">{job.context}</p>}
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-muted marker:text-line">
            {job.bullets.map((b) => (
              <li key={b}>
                <RichText text={b} />
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            {job.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </li>
      ))}
    </ol>
  </Section>
);

export default Experience;
