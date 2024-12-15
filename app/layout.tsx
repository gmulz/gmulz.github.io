'use client'
import "./globals.css";


import { ChakraProvider,  Flex } from "@chakra-ui/react";

import theme from './theme'
import Header from "./components/Header";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <html lang="en" suppressHydrationWarning>
        <body>
        <ChakraProvider value={theme}>
          <Flex 
            direction="column" 
            align="center" 
            maxW={{ xl: "1200px"}} 
            m="3rem auto"
            padding="0 2rem">
          <Header />
          <Flex width="100%" direction="row">
            {children}
          </Flex>
          </Flex>
        </ChakraProvider>
        </body>
      </html>
    
  );
}
