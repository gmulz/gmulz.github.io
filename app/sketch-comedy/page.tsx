import { Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { createGridItem, GridMenuItem } from "../utils";

const items: GridMenuItem[] = [
  {
    href: "/sketch-comedy/boogiemanja",
    src: "/boogie.png",
    caption: "BoogieManja",
  },
  // {
  //   href: "/sketch-comedy/indie",
  //   src: ""
  // }
];

export default function SketchComedy() {
  return (
    <Flex direction="column">
      <Heading size={"5xl"} color={"green"}>
        Sketch Comedy
      </Heading>
      <Text>
        I write digital and live sketch comedy, which has been viewed and
        performed all over New York City and at sketch comedy festivals across
        North America
      </Text>
      <Grid templateColumns="repeat(3, 1fr)">{items.map(createGridItem)}</Grid>
    </Flex>
  );
}
