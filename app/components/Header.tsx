import { Flex, Heading, Text, Button } from "@chakra-ui/react";

import {
  MenuContent, MenuItem, MenuRoot, MenuTrigger, MenuTriggerItem,
} from '@/components/ui/menu'



export default function Header() {
  return (
    <Flex 
      align="start"
       w="100%" 
       direction="row" 
       marginBottom="5" 
       justify="space-between"
       alignItems="center">
      <Flex direction="column">
        <Heading color="green" fontSize="6xl" lineHeight="normal">Grant Mulitz</Heading>
        <Text color="green" fontFamily="subHeading">Comedy Writer &#8756; Engineer &#8756; Nerd</Text>
      </Flex>
      
      <MenuRoot positioning={{ placement: "bottom-end"}}>
        <MenuTrigger asChild>
          <Button padding="4" color="green" backgroundColor="grey">
            Menu
          </Button>
        </MenuTrigger>
        <MenuContent background="grey">
          <MenuItem value="durr" backgroundColor="grey" color="green" padding="2">
            About
          </MenuItem>
          <MenuRoot positioning={{ placement: 'left-end', gutter: 0}}>
            <MenuTriggerItem value="writing" backgroundColor="grey" color="green" padding="2">
              Writing
            </MenuTriggerItem>
            <MenuContent background="grey">
              <MenuItem value="clickhole" backgroundColor="grey" color="green" padding="2">ClickHole</MenuItem>
            </MenuContent>
          </MenuRoot>
        </MenuContent>
      </MenuRoot>
      
    </Flex>
  )
}