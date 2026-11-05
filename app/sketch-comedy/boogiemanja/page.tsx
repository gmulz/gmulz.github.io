import type { Metadata } from "next";
import { HStack, Image, Link, Text } from "@chakra-ui/react";
import { PageHeader, Section, YouTubeGrid } from "@/app/components/Page";

export const metadata: Metadata = { title: "BoogieManja" };

const auntColony = ["j4JVJOpDDqc"];

const pointlessAppliance = [
  "X2TH3e9dFGM",
  "WXqiBQr2Tb4",
  "VoP1Tz0UZcU",
  "qiRO8OjwWBY",
  "4SHU_aTeMks",
  "r1v1VC8APdI",
];

const boldLip = [
  "Wj-peHQfduY",
  "zwCaIW07Dcw",
  "42nRc-9PpeY",
  "M-nPHVYpUb4",
  "CqC0HoU8FGA",
  "fcxQWZvSm_o",
];

export default function BoogieManja() {
  return (
    <>
      <PageHeader
        title="BoogieManja"
        crumbs={[{ label: "Sketch Comedy", href: "/sketch-comedy" }]}
        intro={
          <>
            <Text>
              BoogieManja is an established sketch comedy collective in New York
              City. Featuring 6-8 live sketch comedy teams, they hold weekly
              shows at the People&apos;s Improv Theatre in midtown Manhattan,
              each team performing once per month.
            </Text>
            <Text>
              I was a writer for BoogieManja from 2020-2024, having been part of
              four different teams, in which I wrote 1-3 sketches performed at
              each show.
            </Text>
          </>
        }
      />

      <Section
        title="Aunt Colony"
        intro={
          <Text>
            Aunt Colony was my most recent BoogieManja team, where I was a
            writer for one show in late 2023 before taking a hiatus.
          </Text>
        }
      >
        <YouTubeGrid ids={auntColony} />
      </Section>

      <Section
        title="Pointless Appliance"
        intro={
          <>
            <HStack gap="3">
              <Image src="/torontoselection2023.png" alt="Toronto Sketch Comedy Festival 2023 official selection" h="16" />
              <Image src="/seattlelogo.jpg" alt="Seattle Sketchfest" h="16" />
            </HStack>
            <Text>
              I was a writer for Pointless Appliance for two years, during which
              our team performed at sketch festivals in Toronto and Seattle.
              These are a few of my favorites from Pointless Appliance, but all
              the ones I wrote can be found in{" "}
              <Link href="https://www.youtube.com/playlist?list=PLpH1lOTsuOwovauJAbo7ijGR1-T4Qv4bk" target="_blank">
                this playlist
              </Link>
              .
            </Text>
          </>
        }
      >
        <YouTubeGrid ids={pointlessAppliance} />
      </Section>

      <Section
        title="Bold Lip"
        intro={
          <Text>
            Bold Lip was my team for BoogieManja&apos;s all-digital Season 8
            during the COVID-19 pandemic. Our all digital, pre-recorded sketches
            aired on Twitch streams monthly. You can see all the Bold Lip
            sketches I&apos;ve written{" "}
            <Link href="https://www.youtube.com/playlist?list=PLpH1lOTsuOwohV9j5tSlNkzaHS3UE2bsy" target="_blank">
              in this playlist
            </Link>
            . Below are some highlights of sketches I had written, edited and
            directed for the team:
          </Text>
        }
      >
        <YouTubeGrid ids={boldLip} />
      </Section>

      <Section
        title="Old Girl"
        intro={
          <Text>
            I joined my first BoogieManja team, Old Girl mid-season in 2019. I
            wrote for a single show at the People&apos;s Improv Theatre until
            the COVID-19 pandemic canceled the season halfway through. There
            are no videos of my sketches due to mix-ups with the recordings, but
            I swear they did happen.
          </Text>
        }
      />
    </>
  );
}
