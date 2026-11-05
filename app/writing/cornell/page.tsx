import type { Metadata } from "next";
import { Headline, WRITING_CRUMBS } from "../utils";
import { Text } from "@chakra-ui/react";
import { HeadlineList, PageHeader, Section } from "../../components/Page";

export const metadata: Metadata = { title: "Cornell University" };

const cuNooz: Headline[] = [
  {
    headline: "Graduating Senior Finally Has Time To Enjoy College",
    href: "http://cunooz.com/2017/05/26/graduating-senior-finally-has-time-to-enjoy-college/",
  },
  {
    headline: "OP-ED: Frat Bro Want Go Party Now",
    href: "http://cunooz.com/2017/03/10/op-ed-frat-bro-want-go-party-now/",
  },
  {
    headline:
      "7 Places On Camps Where Carl Sagan Tried To Send Himself Into Space",
    href: "http://cunoozfeed.com/2016/04/19/7-places-on-campus-where-carl-sagan-tried-to-send-himself-into-space-2/",
  },
  {
    headline: "Professor Selling Signed Copies of Own Fluid Mechanics Textbook",
    href: "http://cunooz.com/2016/08/22/professor-selling-signed-copies-of-own-fluid-mechanics-textbook/",
  },
  {
    headline:
      "Do Not Help This Little Boy Climb The Slope. He Must Do This On His Own",
    href: "http://cunoozfeed.com/2016/06/15/do-not-help-this-little-boy-climb-the-slope-he-must-do-this-on-his-own/",
  },
  {
    headline: "“UPenn Studnets Beter Than Conrell” Reports UPenn Student",
    href: "http://cunooz.com/2016/02/18/upenn-studnets-beter-than-conrell-reports-upenn-student/",
  },
  {
    headline: "OP-ED: Is This Going To Be on the Exam?",
    href: "http://cunooz.com/2016/02/22/op-ed-is-this-going-to-be-on-the-exam/",
  },
  {
    headline: "Ithaca Airport Ranked Best Place To Be Delayed for Nine Hours",
    href: "http://cunooz.com/2016/01/07/ithaca-airport-ranked-best-place-to-be-delayed-for-nine-hours/",
  },
  {
    headline: "Freshman Relieved He Didn’t Have To Bring Own Clock Tower",
    href: "http://cunooz.com/2015/08/21/freshman-relieved-he-didnt-have-to-bring-own-clock-tower/",
  },
  {
    headline: "Salmon Shorts Migrate Upstream for Spawning Season",
    href: "http://cunooz.com/2015/04/13/salmon-shorts-migrate-upstream-for-spawning-season/",
  },
  {
    headline: "Motel School Opens for Low-Achieving Hotel Students",
    href: "http://cunooz.com/2015/02/19/motel-school-opens-for-low-achieving-hotel-students/",
  },
  {
    headline: "Little Big Littler Than Big Little",
    href: "http://cunooz.com/2015/02/22/little-big-littler-than-big-little/",
  },
  {
    headline: "“What the Fuck” Forecasted for This Week",
    href: "http://cunooz.com/2014/04/15/what-the-fuck-forecasted-for-this-week/",
  },
  {
    headline: "Bill Gates “Just About Finished” Building Gates Hall",
    href: "http://cunooz.com/2013/10/21/bill-gates-just-about-finished-building-gates-hall/",
  },
];

const lunatic: Headline[] = [
  {
    headline: `The Recycle This Issue ("Recycled Essays")`,
    href: "http://cornelllunatic.com/Winter2014.pdf",
  },
  {
    headline: `("Superpowers from a Radioactive Bear", "A Nigerian Prince Email Correspondence")`,
    href: "http://cornelllunatic.com/Spring2016.pdf",
  },
];
export default function Cornell() {
  return (
    <>
      <PageHeader
        title="Cornell University"
        crumbs={WRITING_CRUMBS}
        intro={
          <Text>
            As an undergraduate, I wrote comedy at Cornell from my freshman year
            onward. I was on the founding team of Cornell&apos;s satire
            newspaper, CU Nooz, and served as its editor in chief my junior and
            senior years. I also occasionally wrote longer form humor for
            Cornell&apos;s humor newspaper, The Cornell Lunatic.
          </Text>
        }
      />
      <Section
        title="CU Nooz"
        intro={
          <Text>
            CU Nooz is Cornell University&apos;s online Onion-style satire
            newspaper. I joined the founding staff as their only freshman writer
            in 2013, and served as Editor-in-Chief for three semesters from
            2015-2016. During my tenure as EiC, I grew the site&apos;s
            readership and staff, helped define its voice and tone, and oversaw
            the creation of a second satire website, CU Noozfeed, a
            ClickHole-style site satirizing campus buzz/clickbait articles in
            the style of Buzzfeed and Upworthy. Here are a few of the many
            articles I wrote over the years:
          </Text>
        }
      >
        <HeadlineList items={cuNooz} />
      </Section>
      <Section
        title="The Cornell Lunatic"
        intro={
          <Text>
            The Cornell Lunatic is Cornell&apos;s print humor magazine
            publishing short prose. I wrote several pieces for them during my
            time in college.
          </Text>
        }
      >
        <HeadlineList items={lunatic} />
      </Section>
    </>
  );
}
