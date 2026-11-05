import type { Metadata } from "next";
import { Headline, Shareable, WRITING_CRUMBS } from "../utils";
import { Link, Text } from "@chakra-ui/react";
import { HeadlineList, ImageGrid, PageHeader, Section } from "../../components/Page";

export const metadata: Metadata = { title: "Branded Content" };

const meh: Headline[] = [
  {
    headline: "The ¯\\_(ツ)_/¯ Bundle",
    href: "https://meh.com/deals/the-help-name-this-bundle-bundle",
    subtitles: ["The Convince Friends You're Sober, Awake, and Relaxed Kit"],
  },
  {
    headline: "Future Weed Ads",
    href: "https://x.com/wearemeh/status/1025133289290522625?s=21",
    subtitles: ["LEGO Build Your Own Bong"],
  },
  {
    headline: "iRobot Roomba 650 Robotic Vacuum (Refurbished)",
    href: "https://meh.com/deals/irobot-roomba-650-robotic-vacuum-refurbished-",
    subtitles: [
      "What about a Roomba that just came with one completely functional human finger? Is that too much to ask?",
    ],
  },
];

const ucb: Shareable[] = [
  {
    src: "/ucb_meme_1.png",
    href: "",
  },
  {
    src: "/ucb_meme_2.png",
    href: "",
  },
];

export default function BrandedContent() {
  return (
    <>
      <PageHeader
        title="Branded Content"
        crumbs={WRITING_CRUMBS}
        intro={
          <Text>
            I&apos;ve had the opportunity to &quot;ghost-write&quot; a few memes
            and jokes for a few outlets. As the statute of limitations has long
            passed, I&apos;ll claim a few of those here:
          </Text>
        }
      />
      <Section
        title="Meh.com"
        intro={
          <Text>
            I&apos;ve sold jokes to daily deals website{" "}
            <Link href="http://meh.com" target="_blank">
              meh.com
            </Link>
            , which have appeared in their sales copy and on social media feeds.
          </Text>
        }
      >
        <HeadlineList items={meh} />
      </Section>
      <Section
        title="UCB Comedy"
        intro={
          <Text>
            (UCB wiped these from their Instagram after they were restructured
            in 2020. Why they wouldn&apos;t want to keep these gems is beyond me)
          </Text>
        }
      >
        <ImageGrid items={ucb} />
      </Section>
    </>
  );
}
