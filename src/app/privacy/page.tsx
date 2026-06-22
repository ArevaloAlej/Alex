import type { Metadata } from "next";
import { profile } from "@/data/profile";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: `Privacy Policy | ${profile.fullName}`,
  description: `Privacy policy for ${profile.fullName}'s professional portfolio website.`,
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white py-20">
      <Container className="max-w-3xl">
        <h1 className="text-3xl font-semibold text-navy">Privacy Policy</h1>
        <p className="mt-4 text-sm text-graphite/60">
          Last updated {profile.resumeVersionDate}
        </p>

        <div className="mt-8 space-y-6 text-base leading-7 text-graphite/85">
          <p>
            This website collects only the information you voluntarily submit
            through the contact form (name, email address, subject, and
            message). This information is used solely to respond to your
            inquiry and is not sold, shared, or used for advertising purposes.
          </p>
          <p>
            No analytics or third-party tracking scripts are loaded on this
            site beyond what is required for hosting and basic performance
            monitoring by the deployment provider.
          </p>
          <p>
            For any questions regarding this policy or a request to delete
            data you have submitted, please use the contact form on the
            homepage.
          </p>
        </div>
      </Container>
    </main>
  );
}
