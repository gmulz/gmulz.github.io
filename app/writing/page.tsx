import type { Metadata } from "next";
import { Text } from "@chakra-ui/react";
import { PageHeader, Tile, TileGrid } from "../components/Page";

export const metadata: Metadata = { title: "Writing" };

const writingCategories: Tile[] = [
  { href: "/writing/clickhole", caption: "ClickHole", src: "/clickhole.png", blurb: "Headline contributor since 2021" },
  { href: "/writing/hard-drive", caption: "Hard Drive", src: "/harddrive.png", blurb: "Featured contributor" },
  { href: "/writing/funny-or-die", caption: "Funny Or Die", src: "/funnyordie.png", blurb: "Freelance jokes & listicles" },
  { href: "/writing/books", caption: "Books", src: "/welcometothefuture.jpg", blurb: "Elon Musk parody book" },
  { href: "/writing/pitch", caption: "Pitch", src: "/pitch-app.jpg", blurb: "Top 25 joke writer" },
  { href: "/writing/branded-content", caption: "Branded Content", src: "/ucb.jpg", blurb: "UCB Comedy, Meh.com" },
  { href: "/writing/botnik", caption: "Botnik", src: "/botnik.jpg", blurb: "Predictive-text comedy" },
  { href: "/writing/defunct-websites", caption: "Defunct Websites", src: "/n4d.jpeg", blurb: "RIP, small comedy sites" },
  { href: "/writing/cornell", caption: "Cornell University", src: "/cornell.png", blurb: "CU Nooz EiC, The Lunatic" },
];

export default function Writing() {
  return (
    <>
      <PageHeader
        title="My Words"
        intro={
          <Text>
            I&apos;m primarily a comedy and satire writer. I&apos;ve written
            headlines, short-form jokes and longer form articles for lots of
            publications. Pick one below!
          </Text>
        }
      />
      <TileGrid items={writingCategories} />
    </>
  );
}
