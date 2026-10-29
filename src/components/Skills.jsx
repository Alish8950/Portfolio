import { education, skills } from "../data/profile";
import { Section, Tag } from "./Section";

export const Skills = () => (
  <Section id="skills" eyebrow="Skills" title="Tools I work with">
    <dl className="divide-y divide-line rounded-xl border border-line bg-surface">
      {skills.map((s) => (
        <div key={s.group} className="grid gap-3 p-5 sm:grid-cols-[200px_1fr] sm:gap-6">
          <dt className="text-sm font-semibold text-ink">{s.group}</dt>
          <dd className="flex flex-wrap gap-2">
            {s.items.map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </dd>
        </div>
      ))}
    </dl>
  </Section>
);

export const Education = () => (
  <Section id="education" eyebrow="Education" title="Education">
    <div className="flex flex-col gap-2 rounded-xl border border-line bg-surface p-6 sm:flex-row sm:items-baseline sm:justify-between">
      <div>
        <h3 className="text-lg font-semibold text-ink">{education.degree}</h3>
        <p className="mt-1 text-muted">
          {education.school} · {education.detail}
        </p>
      </div>
      <p className="shrink-0 text-sm font-medium text-muted">{education.period}</p>
    </div>
  </Section>
);
