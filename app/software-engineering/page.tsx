import type { Metadata } from "next";
import { Text } from "@chakra-ui/react";
import { PageHeader, Prose } from "../components/Page";

export const metadata: Metadata = { title: "Software Engineering" };

export default function SoftwareEngineering() {
  return (
    <>
      <PageHeader
        title="Software Engineering"
        intro={
          <Text>
            I&apos;m a tenured software engineer passionate about solving
            challenging, real-world problems at the frontier.
          </Text>
        }
      />
      <Prose>
        <Text>
          I have 10+ years of experience as a SWE, and currently work as Lead
          Engineer of the Robot Fleet Management team at Viam. In addition to
          working across the full stack, including on-device, I manage a team
          of 3-6 engineers.
        </Text>
        <Text>
          I became a tech lead manager in 2023, and have since enjoyed being a
          leader and mentor in my company, having ownership over my team&apos;s
          project domains and roadmap, while staying hands-on and building
          major features. I also get to build{" "}
          <a href="/robots">cool robots</a>!
        </Text>
        <Text>
          I&apos;ve had amazing opportunities working across small early-stage
          startups, big late-stage startups, and well-established industry
          leaders in fintech, health tech and workforce tech.
        </Text>
      </Prose>
    </>
  );
}
