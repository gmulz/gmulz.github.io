import { Flex, Heading, Text, Button, Box } from "@chakra-ui/react";

import {
  MenuContent, MenuItem, MenuRoot, MenuTrigger, MenuTriggerItem,
} from '@/components/ui/menu'



export default function Header() {
  return (
    <Flex align="start" w="100%" direction="row" marginBottom="5" justify="space-between">
      <Flex direction="column">
        <Heading color="green" fontSize="6xl" lineHeight="normal">Grant Mulitz</Heading>
        <Text color="green" fontFamily="subHeading">Comedy Writer &#8756; Engineer &#8756; Nerd</Text>
      </Flex>
      
      <MenuRoot>
        <MenuTrigger asChild>
          <Button>
            Menu
          </Button>
        </MenuTrigger>
        <MenuContent>
          <MenuItem value="durr" >
            About
          </MenuItem>
          <MenuRoot positioning={{ placement: 'left-end', gutter: 2}}>
            <MenuTriggerItem value="writing">
              Writing
            </MenuTriggerItem>
            <MenuContent>
              <MenuItem value="clickhole">ClickHole</MenuItem>
            </MenuContent>
          </MenuRoot>
        </MenuContent>
      </MenuRoot>
      
    </Flex>
  )
}