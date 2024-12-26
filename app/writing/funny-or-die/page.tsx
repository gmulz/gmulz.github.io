import { Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { createHeadline, createShareable, Headline, Shareable } from "../utils";

const headlines: Headline[] = [
  {
    headline: "13 Other Things Donald Trump Could Use Russia's Help With",
    href: "https://funnyordie.tumblr.com/post/148306598100/13-other-things-donald-trump-could-use-russias",
    subtitles: [
      "This one’s for Mr. Gorbachev: help me put up this wall. Gorbachev knows walls. His last wall was gorgeous and lasted a very, very long time.",
      "I want my Trump University students to study abroad there, thanks. The ones who complain I want them to study in Siberia or wherever, you know, that cold part you got over there.",
    ],
  },
  {
    headline: "10 Ways To Meet Your Favorite Celebrity",
    href: "https://funnyordie.tumblr.com/post/150756222502/10-ways-to-meet-your-favorite-celebrity-get/amp",
    subtitles: [
      "Put a fresh baked pie on a windowsill and wait for Scorsese to show up",
    ],
  },
  {
    headline: "16 Things You Can Legally Do On An Airplane",
    href: "https://funnyordie.tumblr.com/post/151581947839/16-things-you-can-legally-do-on-an-airplane-when",
    subtitles: ["Flip off passing airplanes"],
  },
  {
    headline: "10 Not Yet Announced Features Of The Nintendo Switch",
    href: "https://funnyordie.tumblr.com/post/152690600127/10-not-yet-announced-features-of-the-nintendo",
    subtitles: ["Port for you to blow into when it's not working"],
  },
  {
    headline: "10 Excellent Ways To Get Your Brain Functioning In The Morning",
    href: "https://funnyordie.com/2016/12/17/81711/10-excellent-ways-to-get-your-brain-functioning-in-the-morning/?amp=1",
    subtitles: [
      "Unplug it and plug it back in",
      "Half-finish a crossword puzzle",
    ],
  },
  {
    headline: "12 Sure-Fire Ways To Keep Your New Year's Resolutions",
    href: "https://funnyordie.com/2017/01/03/81754/12-sure-fire-ways-to-keep-your-new-years-resolutions/",
    subtitles: [`Just to be safe, end every resolution with "or maybe not"`],
  },
  {
    headline: "Last Night's Golden Globe Awards' Most Outrageous Moments",
    href: "https://funnyordie.com/2017/01/09/81851/last-nights-golden-globe-awards-most-outrageous-moments/?amp=1",
    subtitles: ["#GoldenGlobesSoGolden somehow trended"],
  },
  {
    headline: "12 Signs Russia Is Exercising Influence On America",
    href: "https://funnyordie.com/2017/01/18/81881/12-signs-russia-is-exercising-influence-on-america/",
    subtitles: [
      "Instead of red, white and blue, the American flag is now red, red and red",
    ],
  },
  {
    headline: "13 Alarming Crimes That Will Exist In The Future",
    href: "https://funnyordie.com/2017/01/19/81935/13-alarming-crimes-that-will-exist-in-the-future/?amp=1",
    subtitles: [
      "Asking someone a question you could just figure out on your own",
    ],
  },
  {
    headline:
      "9 Lines That Might Get You Hired But Will Definitely Get You Laid",
    href: "https://funnyordie.com/2017/01/19/81923/9-lines-that-might-get-you-hired-but-will-definitely-get-you-laid/",
    subtitles: ["I'm willing to bend over backward to get everything done"],
  },
  {
    headline: "12 Funny Church Signs From This Week (1/30/2017)",
    href: "https://funnyordie.com/2016/11/11/125458/12-funny-church-signs-from-this-week/",
    subtitles: ["God's way, not Conway"],
  },
  {
    headline: "What Your Dog Is Thinking When He Sees You Naked",
    href: "",
    subtitles: ["I am a dog"],
  },
  {
    headline: "Mike Pence Facts: Can You Believe It?",
    href: "https://www.instagram.com/p/BLhn4nCAvy9/",
    subtitles: [
      "A Boston Market in Indiana named him their #1 customer in 2004",
    ],
  },
  {
    headline: "10 Gritty Nintendo Games We Need To See As Movies",
    href: "https://funnyordie.com/2017/06/15/128573/10-gritty-nintendo-games-we-need-to-see-as-movies/",
    subtitles: ["Nintendog Fighting"],
  },
  {
    headline: "11 Game Of Thrones Plot Points You Forgot About",
    href: "https://funnyordie.com/2017/07/13/98341/11-game-of-thrones-plot-points-you-forgot-about/",
    subtitles: [
      "Bran was denied healthcare",
      "Sansa said 'yes' to two boys asking her to prom",
    ],
  },
  {
    headline: "11 Ways To Know This Is Real Life And Not A Dream",
    href: "https://funnyordie.com/2017/07/13/98213/11-ways-to-know-this-is-real-life-and-not-a-dream/?amp=1",
    subtitles: ["Guac is extra"],
  },
  {
    headline: "12 Things That Will Make A Bartender Angry",
    href: "https://funnyordie.com/2017/09/26/130330/12-things-that-will-make-a-bartender-angry/",
    subtitles: ["Prohibition"],
  },
  {
    headline: "13 Things You Do That Remind You That You're Just An Animal",
    href: "",
    subtitles: [
      "When I open my mouth to yawn a bunch of birds fly in and clean my teeth",
    ],
  },
  {
    headline: "11 Totally F'd Up Things Your Cat Dreams About",
    href: "",
    subtitles: ["Pooping on an endless beach"],
  },
  {
    headline: "12 Weird Things For Rappers To Brag About",
    href: "",
    subtitles: ["George Takei retweeted them"],
  },
  {
    headline: "The Mindblowing-est Twists In The New Season Of Black Mirror",
    href: "https://funnyordie.com/2017/12/13/130963/the-mindblowing-est-twists-in-the-new-season-of-black-mirror/",
    subtitles: [
      "Arkangel: Jenny McCarthy was right about vaccinations all along",
    ],
  },
  {
    headline: "Benefits Of Having A Flat Earth",
    href: "https://x.com/funnyordie/status/942213016434589697",
    subtitles: ["No globe, no global warming", "Easier to draw"],
  },
  {
    headline: "Most Forgotten Lines From 'The Star Spangled Banner'",
    href: "https://funnyordie.com/2018/01/17/131167/most-forgotten-lines-from-the-star-spangled-banner/",
    subtitles: [`When I say "United" you say "States!"`],
  },
  {
    headline: "7 Legitimate Reasons To Get Ghosted",
    href: "https://funnyordie.com/2018/01/23/131233/7-legitimate-reasons-to-get-ghosted/",
    subtitles: [
      "They got super busy all of a sudden but mostly hated spending time with you but come on you get it you weren't really trying anyway",
    ],
  },
  {
    headline: "Botnik Presents: The Best Rom Coms On Netflix",
    href: "",
    subtitles: [
      "Kate And Julia And Maude And Leopold: four strangers in Queens love Doctor Who, but it’s a singer without fame who makes love with all of them.",
    ],
  },
];

const shareables: Shareable[] = [
  {
    src: "/emotions.jpg",
    href: "https://www.instagram.com/p/BUavyRQjipr/",
  },
  {
    src: "/fleming.jpg",
    href: "https://www.instagram.com/p/BWbJFmoDqaG/",
  },
  {
    src: "/mantis.jpg",
    href: "https://x.com/funnyordie/status/907356598728761344",
  },
  {
    src: "/babysitter.jpg",
    href: "https://x.com/funnyordie/status/981691162741194752",
  },
  {
    src: "/flatearth.jpg",
    href: "https://x.com/funnyordie/status/942213016434589697",
  },
  {
    src: "/mikepencefacts.jpg",
    href: "https://www.instagram.com/p/BLhn4nCAvy9/",
  },
];

export default function FunnyOrDie() {
  return (
    <Flex direction="column">
      <Heading size="5xl" color="green">
        Funny Or Die
      </Heading>
      <Text>
        I was a freelance contributor to Funny Or Die. I sold jokes to FOD which
        appeared in online articles (mainly listicles) and on their social media
        channels. Believe it or not, Funny Or Die used to publish written
        content on their website before they got rid of their editorial
        department and focused solely on video and TV.
      </Text>
      <Text>
        Here are some contributions I made for those written pieces. The links
        are mostly broken or no longer on the website, but there are a few
        tumblr and social posts that still reference them, just to prove they
        once existed...
      </Text>
      {headlines.map(createHeadline)}
      <Grid templateColumns={"repeat(3, 2fr)"}>
        {shareables.map(createShareable)}
      </Grid>
    </Flex>
  );
}
