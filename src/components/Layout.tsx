import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";


function Layout({ children }: {children: React.ReactNode}) {

  return (
    <Flex maxWidth='md' flexDirection='column' flexBasis='100%' justifyContent='start' alignItems='center'>
      <Flex flexDirection='column' flexGrow={0.55} pt='7vh' pb={4}>
        <Image src='mercdev-logo.svg' height='3rem' filter='brightness(0) invert(1)'/>
      </Flex>
      <Flex flexDirection='column' width='90%' px='12%' py={10} backgroundColor='white' borderRadius='2xl'
            color='#4a4c51' justifyContent='space-evenly' alignItems='center' gap={8}>
        {children}
      </Flex>
      <Box flexGrow={1} height='3rem'/>
    </Flex>
  );
}

export default Layout;
