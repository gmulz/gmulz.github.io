import { createGridVideo, GridVideo } from "@/app/utils";
import { Flex, Grid, Heading, Image, Link, Text } from "@chakra-ui/react";

const auntColony: GridVideo[] = [
  {
    iframe: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/j4JVJOpDDqc?si=QdskqDe0js9kYZSj"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    ),
  },
];
const pointlessAppliance: GridVideo[] = [
  {
    iframe: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/X2TH3e9dFGM?si=Gr4-vzjA6gn0YDuz"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    ),
  },
  {
    iframe: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/WXqiBQr2Tb4?si=Hk2LjVsOZ5f7hgoz"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    ),
  },
  {
    iframe: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/VoP1Tz0UZcU?si=uu87u5H3__lp3bWl"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    ),
  },
  {
    iframe: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/qiRO8OjwWBY?si=d4mCl5pooCS0qU5c"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    ),
  },
  {
    iframe: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/4SHU_aTeMks?si=gzUKr4ppd64utlO8"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    ),
  },
  {
    iframe: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/r1v1VC8APdI?si=3-SYshmqMj6yFj0K"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    ),
  },
];

const boldLip: GridVideo[] = [
  {
    iframe: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Wj-peHQfduY?si=2mHQBxlJpkjYYWdP"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    ),
  },
  {
    iframe: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/zwCaIW07Dcw?si=kDkJkXmAnrVfIWEy"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    ),
  },
  {
    iframe: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/42nRc-9PpeY?si=M2PV9vijt8gf0pza"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    ),
  },
  {
    iframe: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/M-nPHVYpUb4?si=yaK8uSY1IPuC_iic"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    ),
  },
  {
    iframe: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/CqC0HoU8FGA?si=vTlz2Yjr--bzp6lz"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    ),
  },
  {
    iframe: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/fcxQWZvSm_o?si=su2F1MwZ3dyxq2BP"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    ),
  },
];

export default function BoogieManja() {
  return (
    <Flex direction="column">
      <Heading size="5xl" color="green">
        BoogieManja
      </Heading>
      <Text>
        BoogieManja is an established sketch comedy collective in New York City.
        Featuring 6-8 live sketch comedy teams, they hold weekly shows at the
        People's Improv Theatre in midtown Manhattan, each team performing once
        per month.
      </Text>
      <Text>
        I was a writer for BoogieManja from 2020-2024, having been part of four
        different teams, in which I wrote 1-3 sketches performed at each show.
      </Text>
      <Heading size="3xl" color="green">
        Aunt Colony
      </Heading>
      <Text>
        Aunt Colony was my most recent BoogieManja team, where I was a writer
        for one show in late 2023 before taking a hiatus
      </Text>
      <Grid templateColumns="repeat(2, 2fr)">
        {auntColony.map(createGridVideo)}
      </Grid>
      <Heading size="3xl" color="green">
        Pointless Appliance
      </Heading>
      <Flex direction="row">
        <Image src="/torontoselection2023.png" h="16" />
        <Image src="/seattlelogo.jpg" h="16" />
      </Flex>
      <Text>
        I was a writer for Pointless Appliance for two years, during which our
        team performed at sketch festivals in Toronto and Seattle. These are a
        few of my favorites from Pointless Appliance, but all the ones I wrote
        can be found in{" "}
        <Link
          href="https://www.youtube.com/playlist?list=PLpH1lOTsuOwovauJAbo7ijGR1-T4Qv4bk"
          color="green"
        >
          this playlist
        </Link>
      </Text>
      <Grid templateColumns="repeat(2, 2fr)">
        {pointlessAppliance.map(createGridVideo)}
      </Grid>
      <Heading size="3xl" color="green">
        Bold Lip
      </Heading>
      <Text>
        Bold Lip was my team for BoogieManja's all-digital Season 8 during the
        COVID-19 pandemic. Our all digital, pre-recorded sketches aired on
        Twitch streams monthly. You can see all the Bold Lip sketches I've
        written{" "}
        <Link
          href="https://www.youtube.com/playlist?list=PLpH1lOTsuOwohV9j5tSlNkzaHS3UE2bsy"
          color="green"
        >
          in this playlist
        </Link>
        . Below are some highlights of sketches I had`` written, edited and
        directed for the team:
      </Text>
      <Grid templateColumns="repeat(2, 2fr)">
        {boldLip.map(createGridVideo)}
      </Grid>
      <Heading size="3xl" color="green">
        Old Girl
      </Heading>
      <Text>
        I joined my first BoogieManja team, Old Girl mid-season in 2019. I wrote
        for a single show at the People's Improv Theatre until the COVID-19
        pandemic canceled the season halfway through. There are no videos of my
        sketches due to mix-ups with the recordings, but I swear they did
        happen.
      </Text>
    </Flex>
  );
}
