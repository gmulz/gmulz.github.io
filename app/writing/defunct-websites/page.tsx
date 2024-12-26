import { Flex, Heading, Text, Link } from "@chakra-ui/react";
import { createHeadline, Headline } from "../utils";

const blaffo: Headline[] = [
  {
    headline:
      "Catholic Church Provides Flint Residents Faucet-Mounted Water Sanctifiers",
    href: "https://www.blaffo.com/catholic-church-provides-flint-residents-faucet-mounted-water-sanctifiers/",
  },
  {
    headline:
      "Poll: Americans Receive Majority of News from Dark Recesses of Subconscious",
    href: "https://www.blaffo.com/poll-americans-receive-majority-news-dark-recesses-subconscious/",
  },
  {
    headline:
      "Education Department to Integrate Shootings into School Curriculum",
    href: "https://www.blaffo.com/education-department-integrate-school-shootings-school-curriculum/",
  },
];

const newsForDogs: Headline[] = [
  {
    headline: "Dog Jealous Of Owner's Walk Of Shame",
    href: "https://www.instagram.com/p/Bd_OE1CgM-y/",
  },
  {
    headline: "Owner Not Actually Holding Treat",
    href: "https://www.instagram.com/p/BeEsPThgzsW/",
  },
  {
    headline: "Dog Can't Believe Owner Wearing Same Sweater",
    href: "https://www.instagram.com/p/BgUP9ydgBSw/",
  },
];

const goListYourself = [
  {
    headline: "6 Do-It-Yourself Ways To Gentrify Your Neighborhood",
    href: "",
  },
  {
    headline:
      "4 Insanely Weird Sex Moves You Better Beg Us To Tell You More About",
    href: "",
  },
  {
    headline: "7 Things I Learned From My Dad About The Entertainment Industry",
    href: "",
  },
];

const timsTesseract: Headline[] = [
  { headline: "Ensign's Log: Star Date 41153.8", href: "" },
  { headline: "Ensign's Log: The Enemy Looks Funny", href: "" },
  {
    headline:
      "Ensign's Log: You Can’t Spell “Wesley Crusher” Without “Wesley Crush”",
    href: "",
  },
  { headline: "The Evolution Of The Kill Bot", href: "" },
  { headline: "Is She Cheating On YOU With The Secret Service?!?!", href: "" },
  { headline: "The Underscore: 2022 MLB Recap", href: "" },
];

export default function DefunctWebsites() {
  return (
    <Flex direction="column">
      <Heading size="5xl" color="green">
        Defunct Comedy Websites
      </Heading>
      <Text>
        Over the many years, I've written for small indie websites, satire rags
        and 'zines. Many of these are now defunct, their domain names long since
        expired, and their jokes vaporized.
      </Text>
      <Text>
        Still, I like keeping an excruciatingly detailed list of everything I've
        written that's ever been published.
      </Text>

      <Heading size="3xl" color="green">
        Blaffo
      </Heading>
      <Text>
        Blaffo was a satire website with a somewhat apocalyptic theme. It was
        founded by Scott Dikkers, better known as the founder of The Onion. I
        was an early contributor to the site, but the project was very
        short-lived
      </Text>
      {blaffo.map(createHeadline)}

      <Heading size="3xl" color="green">
        News For Dogs
      </Heading>
      <Text>
        Exactly what it sounds like. A satire news website focused on dogs. The
        website is no more, but these used to be full articles, not just
        headlines
      </Text>
      {newsForDogs.map(createHeadline)}

      <Heading size="3xl" color="green">
        Go List Yourself
      </Heading>
      <Text>
        <Link href="https://www.instagram.com/golistyourself/" color="green">
          Go List Yourself
        </Link>{" "}
        was a small website satirizing millennial culture and the "buzz" news
        trends of the mid-2010s.
      </Text>
      {goListYourself.map(createHeadline)}

      <Heading size="3xl" color="green">
        Tim's Tesseract
      </Heading>
      <Text>
        Tim's Tesseract was a sci-fi/horror comedy website. I wrote a monthly
        Star Trek-themed column titled Ensign's Log, the journal entries of a
        lowly ensign aboard the U.S.S. Enterprise NCC-1701-D.
      </Text>
      {timsTesseract.map(createHeadline)}
    </Flex>
  );
}
