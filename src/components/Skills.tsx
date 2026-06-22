import { skills, type SkillCategory } from "@/data/profile";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

const categories: SkillCategory[] = [
  "Technical",
  "Professional",
  "Management",
  "Tools & Platforms",
];

export default function Skills() {
  return (
    <section id="skills" className="bg-light-gray py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Expertise"
          title="Skills & Expertise"
          description="A structured overview of technical, professional, and management capabilities."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {categories.map((category) => {
            const items = skills.filter((s) => s.category === category);
            if (items.length === 0) return null;

            return (
              <div
                key={category}
                className="rounded-lg border border-silver bg-white p-6"
              >
                <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-blue">
                  {category}
                </h3>
                <ul className="mt-5 space-y-4">
                  {items.map((skill) => (
                    <li key={skill.name}>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-charcoal">
                          {skill.name}
                        </span>
                        <span className="text-graphite/60">{skill.level}%</span>
                      </div>
                      <div
                        className="mt-2 h-1.5 w-full rounded-full bg-silver"
                        role="progressbar"
                        aria-valuenow={skill.level}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={skill.name}
                      >
                        <div
                          className="h-1.5 rounded-full bg-muted-blue"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
