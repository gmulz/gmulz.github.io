import NextLink from "next/link";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ReactNode } from "react";

/* ------------------------------------------------------------------ */
/* Page structure                                                      */
/* ------------------------------------------------------------------ */

export type Crumb = { label: string; href: string };

export function PageHeader({
  title,
  intro,
  crumbs,
}: {
  title: string;
  intro?: ReactNode;
  crumbs?: Crumb[];
}) {
  return (
    <Stack gap="4" mb={{ base: "8", md: "12" }}>
      {crumbs && crumbs.length > 0 && (
        <HStack as="nav" aria-label="Breadcrumb" gap="2" fontSize="sm" color="muted" wrap="wrap">
          {crumbs.map((c) => (
            <HStack key={c.href} gap="2">
              <Link asChild color="muted" _hover={{ color: "green" }}>
                <NextLink href={c.href}>{c.label}</NextLink>
              </Link>
              <Text as="span" aria-hidden>
                /
              </Text>
            </HStack>
          ))}
          <Text as="span" color="white">
            {title}
          </Text>
        </HStack>
      )}
      <Heading as="h1" color="green" fontSize={{ base: "4xl", md: "5xl" }} lineHeight="1.1">
        {title}
      </Heading>
      {intro && <Prose fontSize="lg">{intro}</Prose>}
    </Stack>
  );
}

export function Section({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <Stack as="section" gap="5" mt={{ base: "10", md: "14" }}>
      <Stack gap="3">
        <Heading
          as="h2"
          color="green"
          fontSize={{ base: "2xl", md: "3xl" }}
          pb="2"
          borderBottom="1px solid"
          borderColor="greyLight"
        >
          {title}
        </Heading>
        {intro && <Prose>{intro}</Prose>}
      </Stack>
      {children}
    </Stack>
  );
}

/** Readable block of paragraphs. Pass multiple children for multiple paragraphs. */
export function Prose({
  children,
  fontSize = "md",
}: {
  children: ReactNode;
  fontSize?: string;
}) {
  return (
    <Stack
      gap="4"
      maxW="72ch"
      fontSize={fontSize}
      lineHeight="1.7"
      css={{ "& a": { color: "var(--chakra-colors-green)" }, "& a:hover": { textDecoration: "underline" } }}
    >
      {children}
    </Stack>
  );
}

/* ------------------------------------------------------------------ */
/* Tiles (index pages)                                                 */
/* ------------------------------------------------------------------ */

export type Tile = {
  href: string;
  caption: string;
  src: string;
  blurb?: string;
};

export function TileGrid({ items }: { items: Tile[] }) {
  return (
    <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} gap={{ base: "4", md: "6" }}>
      {items.map((item) => (
        <NextLink key={item.href} href={item.href}>
          <Stack
            role="group"
            gap="0"
            h="100%"
            bg="grey"
            borderRadius="md"
            overflow="hidden"
            border="1px solid"
            borderColor="transparent"
            transition="border-color 0.15s, transform 0.15s"
            _hover={{ borderColor: "green", transform: "translateY(-2px)" }}
          >
            <Flex aspectRatio="1" p="4" align="center" justify="center">
              <Image src={item.src} alt="" maxH="100%" maxW="100%" objectFit="contain" />
            </Flex>
            <Stack gap="1" px="4" py="3" borderTop="1px solid" borderColor="greyLight">
              <Text fontFamily="heading" fontSize="lg" color="white" _groupHover={{ color: "green" }}>
                {item.caption}
              </Text>
              {item.blurb && (
                <Text fontSize="sm" color="muted">
                  {item.blurb}
                </Text>
              )}
            </Stack>
          </Stack>
        </NextLink>
      ))}
    </SimpleGrid>
  );
}

/* ------------------------------------------------------------------ */
/* Writing helpers                                                     */
/* ------------------------------------------------------------------ */

export type Headline = {
  headline: string;
  href: string;
  subtitles?: string[];
};

export function HeadlineItem({ item }: { item: Headline }) {
  return (
    <Box as="li" listStyleType="none" py="3" borderBottom="1px solid" borderColor="greyLight">
      <Link
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        color="green"
        fontSize="lg"
        lineHeight="1.4"
        _hover={{ textDecoration: "underline" }}
      >
        {item.headline}
      </Link>
      {item.subtitles && item.subtitles.length > 0 && (
        <Box as="ul" mt="2" pl="5" color="muted" css={{ listStyleType: "disc" }}>
          {item.subtitles.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </Box>
      )}
    </Box>
  );
}

export function HeadlineList({ items }: { items: Headline[] }) {
  return (
    <Box as="ul" borderTop="1px solid" borderColor="greyLight">
      {items.map((h) => (
        <HeadlineItem key={h.href + h.headline} item={h} />
      ))}
    </Box>
  );
}

export type Shareable = {
  src: string;
  href: string;
};

export function ImageGrid({ items, columns = 3 }: { items: Shareable[]; columns?: number }) {
  return (
    <SimpleGrid columns={{ base: 1, sm: 2, md: columns }} gap="4" alignItems="start">
      {items.map((item) => (
        <Link
          key={item.src}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          display="block"
          borderRadius="md"
          overflow="hidden"
          transition="opacity 0.15s"
          _hover={{ opacity: 0.85 }}
        >
          <Image src={item.src} alt="" w="100%" />
        </Link>
      ))}
    </SimpleGrid>
  );
}

/** Stacked screenshots shown next to a headline list (ClickHole / Hard Drive). */
export function WithSidebar({ images, children }: { images: string[]; children: ReactNode }) {
  return (
    // On mobile the headline list comes first so it isn't buried under screenshots.
    <Flex direction={{ base: "column-reverse", md: "row" }} gap={{ base: "8", md: "10" }} align="stretch">
      <Stack gap="4" w={{ base: "100%", md: "35%" }} flexShrink={0}>
        {images.map((src) => (
          <Image key={src} src={src} alt="" w="100%" borderRadius="md" />
        ))}
      </Stack>
      <Box flex="1" minW="0">
        {children}
      </Box>
    </Flex>
  );
}

/* ------------------------------------------------------------------ */
/* Video                                                               */
/* ------------------------------------------------------------------ */

export function YouTubeGrid({ ids }: { ids: string[] }) {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap="6">
      {ids.map((id) => (
        <Box key={id} aspectRatio="16 / 9" borderRadius="md" overflow="hidden" bg="grey">
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            title="YouTube video player"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{ border: 0, width: "100%", height: "100%" }}
          />
        </Box>
      ))}
    </SimpleGrid>
  );
}
