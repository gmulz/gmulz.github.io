import { Flex, Heading, Link, Text } from "@chakra-ui/react";
import { createHeadline, Headline } from "../utils";

const headlines: Headline[] = [
  {
    headline:
      "Harry Potter And The Portrait Of What Looked Like A Large Pile Of Ash",
    href: "https://botnik.org/content/harry-potter.html",
  },
  {
    headline: "Cooking With Botnik: Thanksgiving",
    href: "https://www.youtube.com/watch?v=-0uLbqEbEd0",
    subtitles: [
      "Jokes aside, let's return this roasted turkey back into the wild",
    ],
  },
  {
    headline: " Botnik Presents: The Best Rom Coms On Netflix",
    href: "",
    subtitles: [
      "Kate And Julia And Maude And Leopold: four strangers in Queens love Doctor Who, but it’s a singer without fame who makes love with all of them.",
    ],
  },
];

export default function Botnik() {
  return (
    <Flex direction="column">
      <Heading size="5xl" color="green">
        Botnik
      </Heading>
      <Text>
        Back in the dark days before AI was as wise, infallible and surveillant
        as it is today, AI used to be very silly. That's where comedy that
        played with broken "robot speak" really shined.
      </Text>
      <Text>
        Botnik emerged from that uncanny valley where AI-speak was one big
        predictive text suggestion maker. It could form about half a sentence
        before going completely off the rails. Imagine using your phone's
        predictive text to write a full story. That's essentially what Botnik
        did, leveraging AI text suggestions to introduce a little noise and
        randomness into the comedy writing process.
      </Text>
      <Text>
        I worked on Botnik for a few years, participaing in their writing jams
        and helping craft some very viral content, with a super talented group
        of comedy writers
      </Text>

      {createHeadline(headlines[0])}
      <Text>
        The Botnik creation that started it all. We wrote a whole Harry Potter
        chapter using a predictive text engine. The thing caught fire on the
        internet and became a viral sensation, garnering millions of views and
        loads of{" "}
        <Link
          href="https://www.theguardian.com/books/booksblog/2017/dec/13/harry-potter-botnik-jk-rowling"
          color="green"
          target="_blank"
        >
          press coverage.
        </Link>{" "}
        I'm happy to have written a few lines in this!
        <li>
          "If you two can't clump happily, I'm going to get aggressive,"
          confessed the reasonable Hermione
        </li>
        <li>
          The three complete friends zapped onto the landing outside the door to
          the castle roof. They almost legged it, but witches are not climbing.
          Ron looked at the doorknob and then looked at Hermione with searing
          pain. "I think it's closed," he noticed. "Locked," said Mr. Staircase,
          the shabby-robed ghost.
        </li>
      </Text>
      {createHeadline(headlines[1])}
      {createHeadline(headlines[2])}
    </Flex>
  );
}
