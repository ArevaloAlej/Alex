import { profile } from "@/data/profile";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="Professional Background"
          description={profile.mission}
        />

        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="text-base leading-7 text-graphite/90">
              {profile.summary}
            </p>
            <p className="mt-4 text-base leading-7 text-graphite/90">
              {profile.leadershipStyle}
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3">
              <div>
                <dt className="text-sm text-graphite/60">Experience</dt>
                <dd className="mt-1 text-2xl font-semibold text-navy">
                  {profile.yearsExperience}+ yrs
                </dd>
              </div>
              <div className="col-span-2 sm:col-span-2">
                <dt className="text-sm text-graphite/60">Industries</dt>
                <dd className="mt-1 text-base font-medium text-navy">
                  {profile.industries.join(", ")}
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-lg border border-silver bg-light-gray p-6">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-blue">
              Core Strengths
            </h3>
            <ul className="mt-4 space-y-3">
              {profile.coreStrengths.map((strength) => (
                <li
                  key={strength}
                  className="flex items-start gap-2 text-sm text-graphite/90"
                >
                  <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-gold" />
                  {strength}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
