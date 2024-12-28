import {
  Flex,
  Heading,
  Text,
  Grid,
  GridItem,
  Image,
  Link,
} from "@chakra-ui/react";

type WritingGridItem = {
  href: string;
  caption: string;
  src: string;
};

const createGridItem = (obj: WritingGridItem) => {
  return (
    <GridItem
      background="grey"
      display="flex"
      justifyContent="center"
      alignItems="center"
      padding="2"
    >
      <Flex height="100%">
        <Link href={obj.href}>
          <Image src={obj.src} />
        </Link>
      </Flex>
    </GridItem>
  );
};

const writingCategories: WritingGridItem[] = [
  {
    href: "/writing/clickhole",
    caption: "ClickHole",
    src: "clickhole.png",
  },
  {
    href: "/writing/hard-drive",
    caption: "Hard Drive",
    src: "harddrive.png",
  },
  {
    href: "/writing/funny-or-die",
    caption: "Funny Or Die",
    src: "funnyordie.png",
  },
  {
    href: "/writing/books",
    caption: "Books",
    src: "welcometothefuture.jpg",
  },
  {
    href: "/writing/pitch",
    caption: "Pitch",
    src: "pitch-app.jpg",
  },
  {
    href: "/writing/branded-content",
    caption: "Branded Content",
    src: "ucb.jpg",
  },
  {
    href: "/writing/botnik",
    caption: "Botnik",
    src: "botnik.jpg",
  },
  {
    href: "/writing/defunct-websites",
    caption: "Defunct Websites",
    src: "n4d.jpeg",
  },
  {
    href: "/writing/cornell",
    caption: "Cornell University",
    src: "cornell.png",
  },
];

export default function Writing() {
  return (
    <Flex direction="column">
      <Heading size="5xl" color="green">
        My Words
      </Heading>
      <Text>
        I'm primarily a comedy and satire writer. I've written headlines,
        short-form jokes and longer form articles for lots of publications.
        Check out the links below!
      </Text>
      <br />
      <br />

      <Grid templateColumns="repeat(4, 1fr)" gap="6">
        {writingCategories.map(createGridItem)}
      </Grid>
    </Flex>
  );
}
