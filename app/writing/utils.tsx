import { Link, GridItem, Flex, Image } from "@chakra-ui/react";

export type Headline = {
  headline: string;
  href: string;
  subtitles?: string[];
};

export type Shareable = {
  src: string;
  href: string;
};

export const createShareable = (obj: Shareable) => {
  return (
    <GridItem
      display="flex"
      justifyContent="center"
      alignItems="center"
      padding="2"
    >
      <Flex height="100%">
        <Link href={obj.href} target="_blank">
          <Image src={obj.src} />
        </Link>
      </Flex>
    </GridItem>
  );
};
export const createHeadline = (obj: Headline) => {
  return (
    <>
      <Link
        href={obj.href}
        textDecoration="underline"
        color="green"
        fontSize="larger"
        marginBottom="4"
        target="_blank"
      >
        {obj.headline}
      </Link>
      {obj.subtitles?.map((s) => <li>{s}</li>)}
    </>
  );
};
