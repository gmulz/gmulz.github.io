import { Flex, Heading, Text } from "@chakra-ui/react";

export default function SoftwareEngineering() {
  return (
    <Flex direction="column">
      <Heading size="5xl" color="green">
        Robots
      </Heading>

      <Text>
        I build robots as part of my work at Viam and as side projects! Most of
        these projects use Viam as their operating system, so I'm building as a
        hobbyist while also dogfooding my own work
      </Text>

      <Heading size="2xl">Salad Making Robot</Heading>
      <Text>
        In Viam's first Build on Viam hackathon, I led a team of 4 engineers to
        build a robot that uses two UFactory xArm 850s to lift food out of a
        refrigerated prep rail.
        <br />
        <br />
        This project won Viam's first internal hackathon, and other hackathons
        as Build on Viam continued
      </Text>
      <video
        controls
        src="/af31b61410d9b743e17d05e58fb005ee.MP4"
        width="480"
      ></video>

      <Heading size="2xl">Rosie the Flower Girl Robot</Heading>
      <Text>
        Created for a friend's wedding, this robot is a wheeled SCUTTLE robotics
        base with a SO-101 arm on the top of a raised platform that reaches into
        a bucket and drops flower petals. This debuted at my friend's wedding as
        her actual flower girl!
      </Text>
      <video controls src="/IMG_8203.MOV" width="480"></video>

      <Heading size="2xl">Driveway Gate</Heading>
      <Text>
        I automated my in-laws' driveway gate with two waterproof linear
        actuators, linear sensors, a few Raspberry Pi's mounted in project
        boxes, and an app to control it from your phone. Waterproofing was the
        real challenge with this one
      </Text>
      <video controls src="/IMG_2491.mov" width="480"></video>
    </Flex>
  );
}
