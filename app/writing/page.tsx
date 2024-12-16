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
    caption: "",
    src: "clickhole.png",
  },
  {
    href: "/writing/harddrive",
    caption: "",
    src: "harddrive.png",
  },
  {
    href: "/writing/funnyordie",
    caption: "",
    src: "funnyordie.png",
  },
  {
    href: "/writing/books",
    caption: "",
    src: "welcometothefuture.jpg",
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
