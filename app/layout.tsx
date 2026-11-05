import "./globals.css";

import type { Metadata } from "next";
import { Box, Flex } from "@chakra-ui/react";

import Providers from "./providers";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Grant Mulitz",
    template: "%s · Grant Mulitz",
  },
  description:
    "Grant Mulitz is a software engineer, robot builder, and comedy writer based in New York City.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Flex
            direction="column"
            minH="100vh"
            maxW="1100px"
            mx="auto"
            px={{ base: "5", md: "8" }}
          >
            <Header />
            <Box as="main" flex="1" w="100%" py={{ base: "8", md: "12" }}>
              {children}
            </Box>
            <Footer />
          </Flex>
        </Providers>
      </body>
    </html>
  );
}
