import { Flex, Heading, Text, Link } from "@chakra-ui/react";

export default function Contact() {
  return (
    <Flex direction="column">
      <Heading color="green">Contact</Heading>
      <Text>
        If you want to get in touch, please email me at{" "}
        <Link color="green" href="mailto:gamulitz@gmail.com">
          gamulitz@gmail.com
        </Link>
      </Text>
    </Flex>
  );
}
