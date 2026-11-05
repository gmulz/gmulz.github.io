import { Flex, Link, Text } from "@chakra-ui/react";
import { EMAIL } from "./nav";

export default function Footer() {
  return (
    <Flex
      as="footer"
      w="100%"
      py="8"
      mt="8"
      borderTop="1px solid"
      borderColor="greyLight"
      justify="space-between"
      align={{ base: "start", sm: "center" }}
      direction={{ base: "column", sm: "row" }}
      gap="2"
      color="muted"
      fontSize="sm"
    >
      <Text>© {new Date().getFullYear()} Grant Mulitz · New York City</Text>
      <Link href={`mailto:${EMAIL}`} color="green" _hover={{ textDecoration: "underline" }}>
        {EMAIL}
      </Link>
    </Flex>
  );
}
