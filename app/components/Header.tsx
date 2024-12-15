import { Flex, Heading, Text, Button, Icon } from "@chakra-ui/react";

import { IoMenu } from "react-icons/io5";

import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
  // MenuTriggerItem,
} from "@/components/ui/menu";

type HeaderMenuItem = {
  value: string;
  title: string;
};

const menuItems: HeaderMenuItem[] = [
  {
    title: "About",
    value: "about",
  },
  {
    title: "Writing",
    value: "writing",
  },
  {
    title: "Sketch Comedy",
    value: "sketch-comedy",
  },
  {
    title: "Software Engineering",
    value: "tech",
  },
];

const createMenuItem = (obj: HeaderMenuItem) => {
  return (
    <MenuItem
      value={obj.value}
      backgroundColor="grey"
      color="green"
      padding="2"
      cursor="pointer"
      asChild
    >
      <a href={`/${obj.value}`}>{obj.title}</a>
    </MenuItem>
  );
};

export default function Header() {
  return (
    <Flex
      align="start"
      w="100%"
      direction="row"
      marginBottom="5"
      justify="space-between"
      alignItems="center"
    >
      <a href="/">
        <Flex direction="column">
          <Heading color="green" fontSize="6xl" lineHeight="normal">
            Grant Mulitz
          </Heading>
          <Text color="green" fontFamily="subHeading">
            Comedy Writer &#8756; Engineer &#8756; Nerd
          </Text>
        </Flex>
      </a>

      <MenuRoot positioning={{ placement: "bottom-end" }}>
        <MenuTrigger asChild>
          <Button padding="2" color="green" backgroundColor="grey">
            <Icon fontSize="3xl">
              <IoMenu />
            </Icon>
          </Button>
        </MenuTrigger>
        <MenuContent background="grey">
          {menuItems.map(createMenuItem)}
          {/* <MenuRoot positioning={{ placement: 'left-end', gutter: 0}}>
            <MenuTriggerItem value="writing" backgroundColor="grey" color="green" padding="2">
              Writing
            </MenuTriggerItem>
            <MenuContent background="grey">
              <MenuItem value="clickhole" backgroundColor="grey" color="green" padding="2">ClickHole</MenuItem>
            </MenuContent>
          </MenuRoot> */}
        </MenuContent>
      </MenuRoot>
    </Flex>
  );
}
