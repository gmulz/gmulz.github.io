"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { Flex, Heading, Text, Button, Icon, HStack, Link } from "@chakra-ui/react";
import { IoMenu } from "react-icons/io5";

import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { navItems } from "./nav";

const isActive = (pathname: string, href: string) =>
  pathname === href || pathname.startsWith(`${href}/`);

export default function Header() {
  const pathname = usePathname() ?? "/";

  return (
    <Flex
      as="header"
      w="100%"
      pt={{ base: "6", md: "10" }}
      pb={{ base: "4", md: "6" }}
      justify="space-between"
      align="center"
      gap="6"
      borderBottom="1px solid"
      borderColor="greyLight"
    >
      <NextLink href="/">
        <Flex direction="column">
          <Heading
            color="green"
            fontSize={{ base: "4xl", md: "5xl" }}
            lineHeight="1.1"
          >
            Grant Mulitz
          </Heading>
          <Text color="green" fontFamily="subHeading" fontSize={{ base: "sm", md: "md" }}>
            Engineer &#8756; Comedy Writer &#8756; Nerd
          </Text>
        </Flex>
      </NextLink>

      {/* Desktop: links are always visible */}
      <HStack as="nav" gap="6" display={{ base: "none", md: "flex" }}>
        {navItems.map((item) => {
          const active = isActive(pathname, item.href);
          return (
            <Link
              key={item.href}
              asChild
              fontFamily="heading"
              fontSize="lg"
              color={active ? "green" : "white"}
              borderBottom="2px solid"
              borderColor={active ? "green" : "transparent"}
              pb="1"
              _hover={{ color: "green", textDecoration: "none" }}
              transition="color 0.15s"
            >
              <NextLink href={item.href} aria-current={active ? "page" : undefined}>
                {item.title}
              </NextLink>
            </Link>
          );
        })}
      </HStack>

      {/* Mobile: hamburger menu */}
      <MenuRoot positioning={{ placement: "bottom-end" }}>
        <MenuTrigger asChild>
          <Button
            display={{ base: "inline-flex", md: "none" }}
            padding="2"
            color="green"
            backgroundColor="grey"
            aria-label="Open navigation menu"
          >
            <Icon fontSize="3xl">
              <IoMenu />
            </Icon>
          </Button>
        </MenuTrigger>
        <MenuContent background="grey">
          {navItems.map((item) => (
            <MenuItem
              key={item.href}
              value={item.href}
              backgroundColor="grey"
              color="green"
              padding="3"
              fontSize="md"
              cursor="pointer"
              asChild
            >
              <NextLink href={item.href}>{item.title}</NextLink>
            </MenuItem>
          ))}
        </MenuContent>
      </MenuRoot>
    </Flex>
  );
}
