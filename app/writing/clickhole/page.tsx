import {
  Flex,
  Heading,
  Text,
  Grid,
  GridItem,
  Link,
  Image,
} from "@chakra-ui/react";

import { Headline, Shareable, createHeadline, createShareable } from "../utils";

const headlines: Headline[] = [
  {
    headline:
      "Incredibly Gifted: This 8th Grader Is So Horny His Teachers Let Him Take Sex Ed At The High School Level",
    href: "https://clickhole.com/incredibly-gifted-this-8th-grader-is-so-horny-his-teachers-let-him-take-sex-ed-at-the-high-school-level/",
  },
  {
    headline:
      "‘Out, Out, Brief Candle!’: This Little Boy Whose Pet Gecko Passed Away Is Wailing About Losing His Only Heir",
    href: "https://clickhole.com/out-out-brief-candle-this-little-boy-whose-pet-gecko-passed-away-is-wailing-about-losing-his-only-heir/",
  },
  {
    headline:
      "Clearing Things Up: Paul Simon Has Revealed The Crime He Sings About In ‘Me And Julio Down By The Schoolyard’ Is Huffing Nitrous In A Two-Person Superman Costume",
    href: "https://clickhole.com/clearing-things-up-paul-simon-has-revealed-the-crime-he-sings-about-in-me-and-julio-down-by-the-schoolyard-is-huffing-nitrous-in-a-two-person-superman-costume/",
  },
  {
    headline:
      "Deeply Troubling: Hackers Just Leaked Subway’s Training Videos Online, Giving Foreign Adversaries Everything They Need To Construct Italian BMTs Of Their Own",
    href: "https://clickhole.com/deeply-troubling-hackers-just-leaked-subways-training-videos-online-giving-foreign-adversaries-everything-they-need-to-construct-italian-bmts-of-their-own/",
  },
  {
    headline:
      "No Longer Science Fiction: Researchers Have Discovered A Kind Of Tart That Can Go In The Toaster",
    href: "https://clickhole.com/no-longer-science-fiction-researchers-have-discovered-a-kind-of-tart-that-can-go-in-the-toaster/",
  },
  {
    headline:
      "It’s Scary How They Know This Much About You: Facebook Just Sent A Notification To Wish You A Happy Birthday",
    href: "https://clickhole.com/its-scary-how-they-know-this-much-about-you-facebook-just-sent-a-notification-to-wish-you-a-happy-birthday/",
  },
  {
    headline:
      "Devastating: Barack Obama Just Visited The White House To Relive His Glory Days But No One There Even Remembers Him Anymore",
    href: "https://clickhole.com/devastating-barack-obama-just-visited-the-white-house-to-relive-his-glory-days-but-no-one-there-even-remembers-him-anymore/",
  },
  {
    headline:
      "Ending World Hunger: A New UN Initiative Aims To Teach Starving People That You Can Get All The Food You Want From A Vending Machine If You Have A Quarter On A String",
    href: "https://clickhole.com/ending-world-hunger-a-new-un-initiative-aims-to-teach-starving-people-that-you-can-get-all-the-food-you-want-from-a-vending-machine-if-you-have-a-quarter-on-a-string/",
  },
  {
    headline:
      "Get Down On Your Knees And Show Them The Respect They’ve Earned: Here Are 8 People Who Are Older Than You",
    href: "https://clickhole.com/get-down-on-your-knees-and-show-them-the-respect-theyve-earned-here-are-8-people-who-are-older-than-you/",
  },
  {
    headline:
      "Body Positivity Win! This Old Hag Who Lives In The Forest Is Telling Lost, Overweight Children That They Look Delicious",
    href: "https://clickhole.com/body-positivity-win-this-old-hag-who-lives-in-the-forest-is-telling-lost-overweight-children-that-they-look-delicious/",
  },
  {
    headline:
      "Sorry But You’re Not Getting That Granite Tombstone: 5 Ridiculous Demands Grandma Made When She Was Being A Total Funeral-zilla About Planning Her Memorial Service",
    href: "https://clickhole.com/sorry-but-youre-not-getting-that-granite-tombstone-5-ridiculous-demands-grandma-made-when-she-was-being-a-total-funeral-zilla-about-planning-her-memorial-service/",
  },
  {
    headline:
      "The End Of His Prime: This Man No Longer Has The Fertile Imagination And Boundless Creative Energy To Build His Own Subway Sandwich And Has To Order From The Regular Menu",
    href: "https://clickhole.com/the-end-of-his-prime-this-man-no-longer-has-the-fertile-imagination-and-boundless-creative-energy-to-build-his-own-subway-sandwich-and-has-to-order-from-the-regular-menu/",
  },
];

const TSWs: Shareable[] = [
  {
    src: "/asbestosTSW.png",
    href: "https://www.instagram.com/p/CVdiB4WF7MV/",
  },
  {
    src: "/SpikeLee.png",
    href: "https://www.instagram.com/p/Ca-J2VPvdaH/",
  },
  {
    src: "/PopeQuote.png",
    href: "https://www.instagram.com/p/ClPS0NTvPmt/",
  },
  {
    src: "/CrowsTSW.png",
    href: "https://www.instagram.com/p/Cu0BI8LBk7g/",
  },
];

const shareables: Shareable[] = [
  {
    src: "/jacknicholson.png",
    href: "https://www.instagram.com/p/CvNxGFfv0Aj/",
  },
  {
    src: "/cow_law.png",
    href: "https://www.instagram.com/p/C0zyfvrRJNB/",
  },
  {
    src: "/clickhole_souvenir_ad.png",
    href: "https://www.instagram.com/p/C4grnPSh58k",
  },
];

export default function ClickHole() {
  return (
    <Flex direction="column">
      <Heading size="5xl" color="green">
        ClickHole
      </Heading>
      <Text>
        I've been a headline contributor to ClickHole since 2021. I've written
        and submitted literally thousands of headlines, social media content,
        and celebrity quotes weekly, a small subset of which has made it to
        publication.
      </Text>
      <Grid templateColumns="repeat(3, 1fr)">
        <GridItem colSpan={1} padding="4">
          <Image src="/sex-ed.png" />
          <br />
          <Image src="/gecko-boy.png" />
          <br />
          <Image src="/toaster_tart.png" />
        </GridItem>
        <GridItem colSpan={2}>
          <Heading size="3xl" color="green">
            Headlines
          </Heading>
          {headlines.map(createHeadline)}
        </GridItem>
      </Grid>
      <Heading size="3xl" color="green">
        They Said What?!
      </Heading>
      <Grid templateColumns={"repeat(3, 2fr)"}>
        {TSWs.map(createShareable)}
      </Grid>

      <Heading size="3xl" color="green">
        Shareables
      </Heading>
      <Grid templateColumns={"repeat(3, 2fr)"}>
        {shareables.map(createShareable)}
      </Grid>
    </Flex>
  );
}
