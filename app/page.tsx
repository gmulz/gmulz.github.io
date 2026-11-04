import { Flex, Text, Image } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex direction="column">
      <Image
        src="headshot.jpg"
        maxW="600px"
        maxH="400px"
        w="100%"
        margin="0 auto"
      />
      <Text textAlign="justify" fontSize="xl">
        This is Grant Mulitz's website, and I am Grant Mulitz. I'm a software
        engineer and comedy writer based in New York City. I work in the
        Robotics and Physical AI space, as the Lead Engineer for the Fleet
        Management team at Viam. My team is building an open-source platform for
        robotics, IoT and devices of all kind, including agentic workflows for
        robotics software development!
        <br />
        <br />
        As a comedy writer, I'm a headline contributor for ClickHole. My written
        work has appeared in Hard Drive, Funny Or Die, published books, branded
        content, and slews of other, now-defunct humor publications. I've
        written sketch comedy for four years with the NYC sketch collective
        BoogieManja, where I wrote sketches for monthly shows across three teams
        performing at the People's Improv Theatre in Chelsea. I have also
        directed and edited award-nominated video sketches, short films, and
        music videos.
        <br />
        <br />
        I'm also a freelance web developer who has worked on many independent
        technical projects, including for the viral AI/comedy collective Botnik
        Studios, and the United Nations.
      </Text>
      <br />
    </Flex>
  );
}
