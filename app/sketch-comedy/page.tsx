import type { Metadata } from "next";
import { Text } from "@chakra-ui/react";
import { PageHeader, Tile, TileGrid } from "../components/Page";

export const metadata: Metadata = { title: "Sketch Comedy" };

const items: Tile[] = [
  {
    href: "/sketch-comedy/boogiemanja",
    src: "/boogie.png",
    caption: "BoogieManja",
    blurb: "NYC sketch collective at the PIT",
  },
];

export default function SketchComedy() {
  return (
    <>
      <PageHeader
        title="Sketch Comedy"
        intro={
          <Text>
            I write digital and live sketch comedy, which has been viewed and
            performed all over New York City and at sketch comedy festivals
            across North America.
          </Text>
        }
      />
      <TileGrid items={items} />
    </>
  );
}
