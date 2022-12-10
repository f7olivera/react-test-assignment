import React from "react";
import { Image, Input as ChakraInput, InputGroup, InputRightElement } from "@chakra-ui/react";
import { joinClassNames } from "../utils/joinClassNames";
import { inputProps } from "../utils/types";


const Input = ({ error, register, ...rest }: inputProps) => {

  return (
    <InputGroup>
      <InputRightElement
        height='100%'
        pointerEvents='none'
        children={error ? <Image src='/ic24-Cross.svg'/> : ''}/>
      <ChakraInput
        className={joinClassNames(['input', error ? 'input-error' : ''])}
        {...register}
        {...rest}/>
    </InputGroup>
  );
}

export default Input;
