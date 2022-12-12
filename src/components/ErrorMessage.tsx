import React from "react";
import { Box } from "@chakra-ui/react";

const ErrorMessage = ({ message, ...rest }: {message: string | undefined} & React.ComponentProps<typeof Box>) => (
  <Box color='var(--chakra-colors-red-100)' pl={1} fontSize='sm' alignSelf='start' pb={1} {...rest}>
    {message}&nbsp;
  </Box>
);

export default ErrorMessage;
