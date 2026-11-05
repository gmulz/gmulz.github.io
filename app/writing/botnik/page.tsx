import type { Metadata } from "next";
import { Headline, WRITING_CRUMBS } from "../utils";
import { Box, Link, Stack, Text } from "@chakra-ui/react";
import { HeadlineItem, HeadlineList, PageHeader, Prose, Section } from "../../components/Page";

export const metadata: Metadata = { title: "Botnik" };

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

const quotes = [
  "\u201cIf you two can't clump happily, I'm going to get aggressive,\u201d confessed the reasonable Hermione",
  "The three complete friends zapped onto the landing outside the door to the castle roof. They almost legged it, but witches are not climbing. Ron looked at the doorknob and then looked at Hermione with searing pain. \u201cI think it's closed,\u201d he noticed. \u201cLocked,\u201d said Mr. Staircase, the shabby-robed ghost.",
];

export default function Botnik() {
  return (
    <>
      <PageHeader
        title="Botnik"
        crumbs={WRITING_CRUMBS}
        intro={
          <>
            <Text>
              Back in the dark days before AI was as wise, infallible and
              surveillant as it is today, AI used to be very silly. That&apos;s
              where comedy that played with broken &quot;robot speak&quot; really
              shined.
            </Text>
            <Text>
              Botnik emerged from that uncanny valley where AI-speak was one big
              predictive text suggestion maker. It could form about half a
              sentence before going completely off the rails. Imagine using your
              phone&apos;s predictive text to write a full story. That&apos;s
              essentially what Botnik did, leveraging AI text suggestions to
              introduce a little noise and randomness into the comedy writing
              process.
            </Text>
            <Text>
              I worked on Botnik for a few years, participating in their writing
              jams and helping craft some very viral content, with a super
              talented group of comedy writers.
            </Text>
          </>
        }
      />

      <Section title="The One That Started It All">
        <Box as="ul">
          <HeadlineItem item={headlines[0]} />
        </Box>
        <Prose>
          <Text>
            We wrote a whole Harry Potter chapter using a predictive text
            engine. The thing caught fire on the internet and became a viral
            sensation, garnering millions of views and loads of{" "}
            <Link
              href="https://www.theguardian.com/books/booksblog/2017/dec/13/harry-potter-botnik-jk-rowling"
              target="_blank"
            >
              press coverage
            </Link>
            . I&apos;m happy to have written a few lines in this!
          </Text>
        </Prose>
        <Stack gap="3" maxW="72ch">
          {quotes.map((q) => (
            <Box
              as="blockquote"
              key={q}
              pl="4"
              borderLeft="3px solid"
              borderColor="green"
              color="muted"
              fontStyle="italic"
              lineHeight="1.7"
            >
              {q}
            </Box>
          ))}
        </Stack>
      </Section>

      <Section title="More Botnik">
        <HeadlineList items={headlines.slice(1)} />
      </Section>
    </>
  );
}
