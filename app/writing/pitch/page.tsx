import type { Metadata } from "next";
import { Headline, WRITING_CRUMBS } from "../utils";
import { Text } from "@chakra-ui/react";
import { HeadlineList, PageHeader, Section } from "../../components/Page";

export const metadata: Metadata = { title: "Pitch" };

const headlines: Headline[] = [
  {
    href: "https://twitter.com/pitchjokes/status/977286964280934400",
    headline: "That Kid From The Stable (image)",
  },
  {
    href: "https://twitter.com/pitchjokes/status/978392654382743552",
    headline: "Uma Thurman quote",
  },
  {
    href: "https://twitter.com/pitchjokes/status/984146583317921792",
    headline: "Facebook Glassdoor review (image)",
  },
  {
    href: "https://www.instagram.com/p/BhxMM9_AUtE/",
    headline: "Fruit of the Looming Threat of Nuclear War (image)",
  },
  {
    href: "https://www.instagram.com/p/Bh7mcTwgv93/",
    headline: "Fast duck on quack cocaine (caption)",
  },
  {
    href: "https://twitter.com/pitchjokes/status/988863358097997825",
    headline: "Better name for The Rock's new baby: Kid Rock",
  },
  {
    href: "https://twitter.com/pitchjokes/status/1166068533354258433",
    headline: "C3PO Moving in Reverse",
  },
];

export default function Pitch() {
  return (
    <>
      <PageHeader
        title="Pitch"
        crumbs={WRITING_CRUMBS}
        intro={
          <Text>
            I was a long time contributor to the now-defunct online comedy
            writing app Pitch, founded by Matt Klinman at Funny Or Die. I ranked
            consistently in the top 25 comedians for jokes pitched, bought, and
            published through the app. My jokes appeared on the Pitch social
            media channels, and a host of other clients that used pitch to
            connect with comedy writers. I got to work on special projects for
            advertising agencies, brands, tech companies and even political
            campaigns.
          </Text>
        }
      />
      <Section
        title="Jokes"
        intro={<Text>Here are a few public jokes of mine that made it onto the Pitch social channels.</Text>}
      >
        <HeadlineList items={headlines} />
      </Section>
    </>
  );
}
