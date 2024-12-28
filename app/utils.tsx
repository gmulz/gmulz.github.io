import { GridItem, Flex, Link, Image } from "@chakra-ui/react";
import { ReactElement } from "react";

export type GridMenuItem = {
  href: string;
  caption: string;
  src: string;
};

export const createGridItem = (obj: GridMenuItem) => {
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

export type GridVideo = {
  iframe: ReactElement;
};

export const createGridVideo = (obj: GridVideo) => {
  return (
    <GridItem
      display="flex"
      justifyContent="center"
      alignItems="center"
      padding="2"
    >
      {obj.iframe}
    </GridItem>
  );
};
