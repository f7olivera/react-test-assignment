import React from "react";
import { Box } from "@chakra-ui/react";

const ErrorMessage = ({ message }: {message: string | undefined}) => (
  <Box color='negative.alpha.100' pl={1} fontSize='sm' alignSelf='start' pb={1}>
    {message}&nbsp;
  </Box>
);

export default ErrorMessage;
