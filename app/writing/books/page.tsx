import { Flex, Heading, Image, Link, Text } from "@chakra-ui/react";

export default function Books() {
  return (
    <Flex direction="column">
      <Heading size="5xl" color="green">
        {" "}
        Books{" "}
      </Heading>
      <Image src="/welcometothefuture.jpg" />
      <Text>
        I contributed to this book! It is a parody book about Elon Musk, edited
        by Onion founder Scott Dikkers. You too can{" "}
        <Link
          color="green"
          href="https://www.amazon.com/Welcome-Future-Which-Mine-Elon/dp/153876413X/"
        >
          buy it on Amazon
        </Link>
      </Text>
    </Flex>
  );
}
