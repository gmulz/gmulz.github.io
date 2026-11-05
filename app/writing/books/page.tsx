import type { Metadata } from "next";
import { WRITING_CRUMBS } from "../utils";
import { Flex, Image, Link, Text } from "@chakra-ui/react";
import { PageHeader, Prose } from "../../components/Page";

export const metadata: Metadata = { title: "Books" };

export default function Books() {
  return (
    <>
      <PageHeader title="Books" crumbs={WRITING_CRUMBS} />
      <Flex direction={{ base: "column", md: "row" }} gap={{ base: "6", md: "10" }} align="start">
        <Image
          src="/welcometothefuture.jpg"
          alt="Welcome to the Future Which Is Mine by Not Elon Musk"
          w={{ base: "100%", md: "50%" }}
          borderRadius="md"
        />
        <Prose fontSize="lg">
          <Text fontFamily="heading" fontSize="2xl" color="green">
            Welcome to the Future Which Is Mine
          </Text>
          <Text>
            I contributed to this book! It is a parody book about Elon Musk,
            edited by Onion founder Scott Dikkers. You too can{" "}
            <Link
              href="https://www.amazon.com/Welcome-Future-Which-Mine-Elon/dp/153876413X/"
              target="_blank"
            >
              buy it on Amazon
            </Link>
            .
          </Text>
        </Prose>
      </Flex>
    </>
  );
}
