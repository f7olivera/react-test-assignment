import React from "react";
import { Button as ChakraButton } from "@chakra-ui/react";
import { buttonProps } from "../utils/types";


function Button({ children, loading, onClick }: buttonProps) {

  return (
    <ChakraButton
      type="submit" backgroundColor='accent.alpha.100' color='white' width='75%' gap={2}
      height='3rem' fontWeight='normal' py='1rem' borderRadius='lg' transition='all 0.25s ease-out'
      disabled={loading}
      onClick={onClick}
      _disabled={{
        backgroundColor: 'accent.pressed',
      }}
      boxShadow='0 8px 24px -4px var(--chakra-colors-accent-alpha-50);'
      _active={{
        backgroundColor: 'accent.pressed',
      }}
      _hover={{
        boxShadow: '0 8px 24px -4px var(--chakra-colors-accent-alpha-100);'
      }}>
      {children}
    </ChakraButton>
  );
}

export default Button;
