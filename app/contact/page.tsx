import type { Metadata } from "next";
import { Link, Stack, Text } from "@chakra-ui/react";
import { PageHeader } from "../components/Page";
import { EMAIL } from "../components/nav";

export const metadata: Metadata = { title: "Contact" };

export default function Contact() {
  return (
    <>
      <PageHeader title="Contact" />

      <Text fontSize="lg">If you want to get in touch, please email me at</Text>
      <Link
        href={`mailto:${EMAIL}`}
        color="green"
        fontFamily="heading"
        fontSize={{ base: "xl", md: "2xl" }}
        _hover={{ textDecoration: "underline" }}
      >
        {EMAIL}
      </Link>
    </>
  );
}
