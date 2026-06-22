"use client";

import { useMemo, useState } from "react";
import { projects, type ProjectCategory } from "@/data/profile";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import { ExternalLinkIcon } from "./icons";

const categories: (ProjectCategory | "All")[] = [
  "All",
  "Operations",
  "Marketing",
  "Technology",
  "Management",
  "Consulting",
];

export default function Projects() {
  const [active, setActive] = useState<ProjectCategory | "All">("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((p) => p.category === active),
    [active]
  );

  return (
    <section id="projects" className="bg-light-gray py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Portfolio"
          title="Projects"
          description="Selected work spanning strategy, execution, and measurable results."
        />

        <div
          role="group"
          aria-label="Filter projects by category"
          className="mb-10 flex flex-wrap gap-2"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              aria-pressed={active === category}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === category
                  ? "bg-navy text-white"
                  : "bg-white text-graphite hover:bg-silver"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {filtered.map((project) => (
            <article
              key={project.slug}
              className="flex flex-col rounded-lg border border-silver bg-white p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-blue">
                {project.category}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-navy">
                {project.name}
              </h3>
              <p className="mt-2 text-sm leading-6 text-graphite/85">
                {project.description}
              </p>

              <dl className="mt-4 space-y-2 text-sm text-graphite/80">
                <div>
                  <dt className="font-medium text-charcoal">Challenge</dt>
                  <dd>{project.challenge}</dd>
                </div>
                <div>
                  <dt className="font-medium text-charcoal">Solution</dt>
                  <dd>{project.solution}</dd>
                </div>
                <div>
                  <dt className="font-medium text-charcoal">Results</dt>
                  <dd>{project.results}</dd>
                </div>
              </dl>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-light-gray px-3 py-1 text-xs font-medium text-graphite"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-muted-blue hover:text-navy"
                >
                  View project
                  <ExternalLinkIcon className="h-4 w-4" />
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
