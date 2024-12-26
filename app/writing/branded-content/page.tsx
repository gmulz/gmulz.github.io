import { Flex, Text, Heading, Grid, Link } from "@chakra-ui/react";
import { createHeadline, createShareable, Headline, Shareable } from "../utils";

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
    <Flex direction="column">
      <Heading size="5xl" color="green">
        Branded Content
      </Heading>
      <Text>
        I've had the opportunity to "ghost-write" a few memes and jokes for a
        few outlets. As the statute of limitations has long passed, I'll claim a
        few of those here:
      </Text>
      <Heading size="3xl" color="green">
        {" "}
        Meh.com
      </Heading>
      <Text>
        I've sold jokes to daily deals website{" "}
        <Link href="http://meh.com" target="_blank" color="green">
          meh.com
        </Link>
        , which have appeared in their sales copy and on social media feeds.
      </Text>
      {meh.map(createHeadline)}
      <Heading size="3xl" color="green">
        UCB Comedy
      </Heading>
      <Text>
        (UCB wiped these from their Instagram after they were restructured in
        2020. Why they wouldn't want to keep these gems is beyond me)
      </Text>
      <Grid templateColumns={"repeat(3, 1fr)"}>{ucb.map(createShareable)}</Grid>
    </Flex>
  );
}
