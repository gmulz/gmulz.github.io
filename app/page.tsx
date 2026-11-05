import NextLink from "next/link";
import {
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  LuArrowRight,
  LuBot,
  LuCode,
  LuDrama,
  LuPenLine,
} from "react-icons/lu";
import { Prose, Section } from "./components/Page";
import { EMAIL } from "./components/nav";

const areas = [
  {
    href: "/software-engineering",
    title: "Software Engineering",
    blurb: "10+ years as a SWE. Lead Engineer for Fleet Management at Viam.",
    icon: LuCode,
  },
  {
    href: "/robots",
    title: "Robots",
    blurb:
      "Salad-making arms, a flower girl robot, and one very waterproof gate.",
    icon: LuBot,
  },
  {
    href: "/writing",
    title: "Writing",
    blurb: "ClickHole, Hard Drive, Funny Or Die, Botnik, books and more.",
    icon: LuPenLine,
  },
  {
    href: "/sketch-comedy",
    title: "Sketch Comedy",
    blurb: "Four years writing, directing and editing with BoogieManja.",
    icon: LuDrama,
  },
];

export default function Home() {
  return (
    <Stack gap="0">
      {/* Hero */}
      <Flex
        direction={{ base: "column", md: "row" }}
        gap={{ base: "8", md: "12" }}
        align={{ base: "stretch", md: "center" }}
      >
        <Image
          src="/headshot.jpg"
          alt="Grant Mulitz"
          w={{ base: "100%", md: "340px" }}
          maxW={{ base: "420px", md: "340px" }}
          aspectRatio={4 / 5}
          objectFit="cover"
          borderRadius="lg"
          flexShrink={0}
          mx={{ base: "auto", md: "0" }}
        />
        <Stack gap="5">
          <Heading
            as="h1"
            fontSize={{ base: "3xl", md: "4xl" }}
            lineHeight="1.2"
            color="green"
          >
            This is Grant Mulitz&apos;s website, and I am Grant Mulitz.
          </Heading>
          <Prose fontSize="lg">
            <Text>
              I&apos;m a software engineer and comedy writer based in New York
              City. I work in the Robotics and Physical AI space as the Lead
              Engineer for the Fleet Management team at{" "}
              <a
                href="https://www.viam.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Viam
              </a>
              , where my team is building an open-source platform for robotics,
              IoT and devices of all kinds, including agentic workflows for
              robotics software development.
            </Text>
            <Text>
              As a comedy writer, I&apos;m a headline contributor for ClickHole,
              and my work has appeared in Hard Drive, Funny Or Die, published
              books, branded content, and slews of other, now-defunct humor
              publications.
            </Text>
            <Text>
              I&apos;ve written sketch comedy for four years with the NYC sketch
              collective BoogieManja, writing sketches for monthly shows across
              three teams performing at the People&apos;s Improv Theatre in
              Chelsea. I have also directed and edited award-nominated video
              sketches, short films, and music videos.
            </Text>
            <Text>
              I&apos;m also a freelance web developer who has worked on many
              independent technical projects, including for the viral AI/comedy
              collective Botnik Studios, and the United Nations.
            </Text>
            <Text>
              Want to work together, book a sketch, or talk robots? Email me at{" "}
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
            </Text>
          </Prose>
        </Stack>
      </Flex>

      {/* What I do */}
      <Section title="What I Do">
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap="4">
          {areas.map((a) => (
            <NextLink key={a.href} href={a.href}>
              <Stack
                role="group"
                h="100%"
                gap="3"
                p="5"
                bg="grey"
                borderRadius="md"
                border="1px solid"
                borderColor="transparent"
                transition="border-color 0.15s, transform 0.15s"
                _hover={{ borderColor: "green", transform: "translateY(-2px)" }}
              >
                <Icon fontSize="2xl" color="green">
                  <a.icon />
                </Icon>
                <Heading as="h3" fontSize="xl">
                  {a.title}
                </Heading>
                <Text color="muted" fontSize="sm" flex="1">
                  {a.blurb}
                </Text>
                <Flex
                  align="center"
                  gap="1"
                  color="green"
                  fontSize="sm"
                  fontFamily="heading"
                ></Flex>
              </Stack>
            </NextLink>
          ))}
        </SimpleGrid>
      </Section>
    </Stack>
  );
}
