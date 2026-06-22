import { references } from "@/data/profile";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

export default function References() {
  return (
    <section id="references" className="bg-light-gray py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Professional References"
          description="Feedback from colleagues and managers who have worked closely on past engagements."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {references.map((reference) => (
            <figure
              key={reference.name}
              className="rounded-lg border border-silver bg-white p-6"
            >
              <blockquote className="text-base leading-7 text-graphite/90">
                &ldquo;{reference.recommendation}&rdquo;
              </blockquote>
              <figcaption className="mt-5 border-t border-silver pt-4">
                <p className="font-semibold text-navy">{reference.name}</p>
                <p className="text-sm text-graphite/70">
                  {reference.position}, {reference.company}
                </p>
                <p className="text-sm text-graphite/50">
                  {reference.relationship}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
