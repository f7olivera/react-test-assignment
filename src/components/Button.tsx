import React from "react";
import { Button as ChakraButton } from "@chakra-ui/react";


function Button({ children, isLoading, onClick }: React.ComponentProps<typeof ChakraButton>) {

  return (
    <ChakraButton
      type="submit" backgroundColor='accent.alpha.100' color='white' width='75%' gap={2}
      minHeight='3rem' fontWeight='normal' borderRadius='lg' transition='all 0.25s ease-out'
      disabled={isLoading}
      onClick={onClick}
      _disabled={{ backgroundColor: 'accent.pressed' }}
      boxShadow='0 8px 24px -4px var(--chakra-colors-accent-alpha-50);'
      _active={{ backgroundColor: 'accent.pressed' }}
      _hover={{ boxShadow: '0 8px 24px -4px var(--chakra-colors-accent-alpha-100);' }}>
      {children}
    </ChakraButton>
  );
}

export default Button;
