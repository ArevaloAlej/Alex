import { experience } from "@/data/profile";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Career"
          title="Professional Experience"
          description="A track record of measurable impact across roles and organizations."
        />

        <ol className="relative space-y-10 border-l border-silver pl-8">
          {experience.map((role) => (
            <li key={`${role.company}-${role.startDate}`} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-muted-blue"
              />
              <p className="text-sm font-medium text-graphite/60">
                {role.startDate} — {role.endDate}
              </p>
              <h3 className="mt-1 text-xl font-semibold text-navy">
                {role.position}
              </h3>
              <p className="text-base font-medium text-charcoal">
                {role.company} · {role.location}
              </p>

              {role.responsibilities.length > 0 ? (
                <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-6 text-graphite/85">
                  {role.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}

              {role.achievements.length > 0 ? (
                <ul className="mt-4 space-y-2">
                  {role.achievements.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm font-medium text-muted-blue"
                    >
                      <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
