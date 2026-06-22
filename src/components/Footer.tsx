import { profile } from "@/data/profile";
import Container from "./Container";
import { LinkedInIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="bg-charcoal py-10 text-silver/80">
      <Container className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-sm">
          © {new Date().getFullYear()} {profile.fullName}. All rights reserved.
        </p>

        <nav aria-label="Footer" className="flex items-center gap-6 text-sm">
          <a href="#top" className="hover:text-white">
            Home
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
          <a href="/privacy" className="hover:text-white">
            Privacy Policy
          </a>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-white"
          >
            <LinkedInIcon className="h-4 w-4" />
            LinkedIn
          </a>
        </nav>
      </Container>
    </footer>
  );
}
