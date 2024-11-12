import { Flex, Heading, Text } from "@chakra-ui/react";


export default function Header() {
  return (
    <Flex align="start" w="100%" direction="row" marginBottom="5">
      <Flex direction="column">
      <Heading color="green" fontSize="6xl" lineHeight="normal">Grant Mulitz</Heading>
        <Text color="green" fontFamily="subHeading">Comedy Writer &#8756; Engineer &#8756; Nerd</Text>
      </Flex>
      
    </Flex>
  )
}