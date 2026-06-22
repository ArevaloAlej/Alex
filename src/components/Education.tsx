import { certifications, education } from "@/data/profile";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Background" title="Education & Certifications" />

        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-blue">
              Education
            </h3>
            <ul className="mt-5 space-y-5">
              {education.map((entry) => (
                <li key={`${entry.institution}-${entry.startYear}`}>
                  <p className="font-semibold text-navy">{entry.credential}</p>
                  <p className="text-sm text-graphite/85">
                    {entry.field} · {entry.institution}
                  </p>
                  <p className="text-sm text-graphite/60">
                    {entry.startYear} — {entry.endYear}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-blue">
              Certifications
            </h3>
            <ul className="mt-5 space-y-5">
              {certifications.map((cert) => (
                <li key={`${cert.name}-${cert.year}`}>
                  <p className="font-semibold text-navy">{cert.name}</p>
                  <p className="text-sm text-graphite/85">{cert.issuer}</p>
                  <p className="text-sm text-graphite/60">{cert.year}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
