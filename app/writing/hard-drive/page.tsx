import {
  Flex,
  Heading,
  Text,
  Link,
  GridItem,
  Grid,
  Image,
} from "@chakra-ui/react";
import { createHeadline, Headline } from "../utils";

const headlines: Headline[] = [
  {
    href: "https://thehardtimes.net/harddrive/settlers-of-catan-player-receives-passive-aggressive-longest-turn-card/",
    headline:
      'Settlers Of Catan Player Receives Passive-Aggressive "Longest Turn" Card',
  },
  {
    href: "https://thehardtimes.net/harddrive/melee-player-cant-believe-someone-would-just-throw-out-zenith-crt-tv-with-built-in-vcr-from-2005/",
    headline:
      "Melee Player Can't Believe Someone Would Just Throw Out Zenith CRT TV With Built-In VCR From 2005",
  },
  {
    href: "https://thehardtimes.net/harddrive/sim-philosophers-debate-whether-free-will-truly-set-to-high/",
    headline: "Sim Philosophers Debate Whether Free Will Truly Set To High",
  },
  {
    href: "https://thehardtimes.net/harddrive/gamer-at-new-job-opens-every-door-in-office-building",
    headline: "Gamer At New Job Opens Every Door In Office Building",
  },
  {
    href: "https://thehardtimes.net/harddrive/life-spent-playing-doom-pays-off-for-gamer-sent-to-hell/",
    headline: "Life Spent Playing 'Doom' Pays Off For Gamer Sent To Hell",
  },
  {
    href: "https://thehardtimes.net/harddrive/gaming-addiction-study-participant-pretty-sure-he-got-placebo-game/",
    headline:
      "Gaming Addiction Study Participant Pretty Sure He Got Placebo Game",
  },
  {
    href: "https://thehardtimes.net/harddrive/pikachu-overcome-by-own-mortality-realizing-he-will-one-day-die-and-become-duskull/",
    headline:
      "Pikachu Overcome By Own Mortality Realizing He Will One Day Die And Become Duskull",
  },
  {
    href: "https://thehardtimes.net/harddrive/review-this-super-mario-plush-toy-could-never-beat-having-a-real-plumber-live-in-your-house/",
    headline:
      "Review: This Super Mario Plush Toy Could Never Beat Having A Real Plumber Live In Your House",
  },
  {
    href: "https://thehardtimes.net/harddrive/35-year-old-man-still-sees-pediatrician-with-n64-in-waiting-room/",
    headline:
      "35 Year-Old Man Still Sees Pediatrician With N64 in Waiting Room",
  },
  {
    href: "https://thehardtimes.net/harddrive/disney-breeds-dozens-of-new-frog-species-to-expand-national-geographic-streaming-content/",
    headline:
      "Disney Breeds Dozens of New Frog Species to Expand National Geographic Streaming Content",
  },
  {
    href: "https://thehardtimes.net/harddrive/cool-black-car-with-neon-green-accents-must-be-owners-gaming-car/",
    headline:
      "Cool Black Car With Neon Green Accents Must Be Owner's Gaming Car",
  },
  {
    href: "https://thehardtimes.net/harddrive/study-85-of-christians-still-do-not-believe-humans-evolved-from-donkey-kong/",
    headline:
      "Study: 85% Of Christians Still Do Not Believe Humans Evolved From Donkey Kong",
  },
  {
    href: "https://thehardtimes.net/harddrive/firefly-fan-also-canceled/",
    headline: "Firefly Fan Also Canceled",
  },
  {
    href: "https://thehardtimes.net/harddrive/proto-man-reveals-that-while-arm-cannon-nice-he-would-give-anything-to-have-left-hand-back/",
    headline:
      "Proto-Man Reveals That, While Arm Cannon Nice, He Would Give Anything To Have Left Arm Back",
  },
  {
    href: "https://thehardtimes.net/harddrive/the-5-best-gaming-headsets-for-just-listening-to-a-nice-audiobook-once-in-a-while/",
    headline:
      "The 5 Best Gaming Headsets For Just Listening To A Nice Audiobook Once In A While",
  },
  {
    href: "https://thehardtimes.net/harddrive/psychic-beats-shit-out-of-man-counting-tarot-cards/",
    headline: "Psychic Beats Shit Out Of Man Counting Tarot Cards",
  },
  {
    href: "https://thehardtimes.net/harddrive/coup-player-clearly-lying-about-being-your-friend/",
    headline: "Coup Player Clearly Lying About Being Your Friend",
  },
  {
    href: "https://thehardtimes.net/harddrive/museum-of-natural-history-acquires-4-million-year-old-dry-bones/",
    headline: "Museum Of Natural History Acquires 4 Million Year Old Dry Bones",
  },
  {
    href: "https://thehardtimes.net/harddrive/gamers-health-care-plan-mainly-jumping-head-first-into-red-heart-logo-outside-cvs/",
    headline:
      "Gamer's Healthcare Plan Mainly Jumping Headfirst Into Red Heart Logo Outside CVS",
  },
  {
    href: "https://thehardtimes.net/harddrive/sleep-study-finds-40-of-people-produce-giant-inflating-snot-bubble-during-rem-cycle/",
    headline:
      "Sleep Study Finds 40% Of People Produce Giant Inflating Snot Bubble During REM Cycle",
  },
  {
    href: "https://thehardtimes.net/harddrive/every-star-wars-easter-egg-you-missed-in-my-apartment/",
    headline: "Every Star Wars Easter Egg You Missed In My Apartment",
  },
  {
    href: "https://thehardtimes.net/harddrive/parents-blame-poorly-made-video-games-for-sons-annoying-glitchy-outbursts/",
    headline:
      "Parents Blame Poorly Made Video Game For Son's Annoying, Glitchy Outbursts",
  },
];

export default function HardDrive() {
  return (
    <Flex direction="column">
      <Heading size="5xl" color="green">
        Hard Drive
      </Heading>
      <Text>
        I was a{" "}
        <Link color="green" href="https://hard-drive.net/author/grant-mulitz/">
          contributor
        </Link>
        , to Hard Drive, a video game and nerd culture website that's a spinoff
        of The Hard Times. I participated in Hard Drive's "featured contributor"
        program committing to ten headlines per week for four weeks, during
        which I had over a dozen articles published on the site.
      </Text>
      <Grid templateColumns="repeat(3, 1fr)">
        <GridItem colSpan={1} padding="4">
          <Image src="/star-wars-easter-egg.png" />
          <br />
          <Image src="/doom-guy.png" />
          <br />
          <Image src="/placebo-game.png" />
          <br />
        </GridItem>
        <GridItem colSpan={2}>{headlines.map(createHeadline)}</GridItem>
      </Grid>
    </Flex>
  );
}
