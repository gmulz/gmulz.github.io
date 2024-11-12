import Image from "next/image";
import styles from "./page.module.css";
import { Flex, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex width="100%" direction="column">
      <Text textAlign="justify" fontSize="xl">
      This is Grant Mulitz's website, and I am Grant Mulitz. 
      I'm a comedy writer and software engineer based in New York City.
      I'm a headline contributor for ClickHole. My written work has appeared in Hard Drive, 
      Funny Or Die, published books, branded content, and slews of other, now-defunct humor publications. 
      I've written sketch comedy for four years with the NYC sketch collective BoogieManja, where
      I wrote sketches for monthly shows across three teams performing at the People's Improv 
      Theatre in Chelsea. I have also directed and edited award-nominated video 
      sketches, short films, and music videos.
      <br /><br />
      I work full-time as a Staff Software Engineer in the tech industry. 
      I'm also a freelance web developer who has worked on many independent technical projects, 
      including for the viral AI/comedy collective Botnik Studios, and the United Nations.
      </Text>
    </Flex>
  );
}
