import type { Metadata } from "next";
import { Box, Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { PageHeader, Prose } from "../components/Page";
import InstagramEmbed from "../components/InstagramEmbed";

export const metadata: Metadata = { title: "Robots" };

type Media = { video: string } | { instagram: string };

type Project = {
  title: string;
  media: Media[];
  body: ReactNode;
};

function MediaItem({ media }: { media: Media }) {
  if ("instagram" in media) {
    return <InstagramEmbed url={media.instagram} />;
  }
  return (
    <Box bg="grey" borderRadius="md" overflow="hidden">
      <video
        controls
        playsInline
        preload="metadata"
        src={`${media.video}#t=0.1`}
        style={{ width: "100%", maxHeight: "70vh", display: "block" }}
      />
    </Box>
  );
}

const projects: Project[] = [
  {
    title: "Salad Making Robot",
    media: [{ video: "/af31b61410d9b743e17d05e58fb005ee.MP4" }],
    body: (
      <>
        <Text>
          In Viam&apos;s first Build on Viam hackathon, I led a team of 4
          engineers to build a robot that uses two UFactory xArm 850s to lift
          food out of a refrigerated prep rail.
        </Text>
        <Text>
          This project won Viam&apos;s first internal hackathon, and other
          hackathons as Build on Viam continued.
        </Text>
      </>
    ),
  },
  {
    title: "Rosie the Flower Girl Robot",
    media: [
      { video: "/IMG_8203.MOV" },
      { instagram: "https://www.instagram.com/reel/DVYv2QIDd73/" },
    ],
    body: (
      <Text>
        Created for a friend&apos;s wedding, this robot is a wheeled SCUTTLE
        robotics base with a SO-101 arm on the top of a raised platform that
        reaches into a bucket and drops flower petals. This debuted at my
        friend&apos;s wedding as her actual flower girl!
      </Text>
    ),
  },
  {
    title: "Driveway Gate",
    media: [{ video: "/IMG_2491.mov" }],
    body: (
      <Text>
        I automated my in-laws&apos; driveway gate with two waterproof linear
        actuators, linear sensors, a few Raspberry Pi&apos;s mounted in project
        boxes, and an app to control it from your phone. Waterproofing was the
        real challenge with this one.
      </Text>
    ),
  },
];

export default function Robots() {
  return (
    <>
      <PageHeader
        title="Robots"
        intro={
          <Text>
            I build robots as part of my work at Viam and as side projects! Most
            of these projects use Viam as their operating system, so I&apos;m
            building as a hobbyist while also dogfooding my own work.
          </Text>
        }
      />
      <Stack gap={{ base: "12", md: "16" }}>
        {projects.map((p, i) => {
          const heading = (
            <Heading as="h2" color="green" fontSize={{ base: "2xl", md: "3xl" }}>
              {p.title}
            </Heading>
          );

          // Several clips: text on top, clips side by side underneath.
          if (p.media.length > 1) {
            return (
              <Stack as="article" key={p.title} gap="5">
                {heading}
                <Prose>{p.body}</Prose>
                <SimpleGrid
                  columns={{ base: 1, md: p.media.length }}
                  gap="6"
                  alignItems="start"
                  maxW={{ md: `${p.media.length * 380}px` }}
                >
                  {p.media.map((m, j) => (
                    <MediaItem key={j} media={m} />
                  ))}
                </SimpleGrid>
              </Stack>
            );
          }

          // One clip: text and clip side by side, alternating sides.
          return (
            <Flex
              as="article"
              key={p.title}
              direction={{ base: "column", md: i % 2 === 0 ? "row" : "row-reverse" }}
              gap={{ base: "5", md: "10" }}
              align={{ base: "stretch", md: "center" }}
            >
              <Stack gap="4" flex="1">
                {heading}
                <Prose>{p.body}</Prose>
              </Stack>
              <Box flexShrink={0} w={{ base: "100%", md: "360px" }}>
                <MediaItem media={p.media[0]} />
              </Box>
            </Flex>
          );
        })}
      </Stack>
    </>
  );
}
