import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Flex, Heading, Image, Input, InputGroup, InputRightElement, Text, VStack } from "@chakra-ui/react";
import Button from "./Button";
import ErrorMessage from "./ErrorMessage";
import { login } from '../api';
import { userData } from "../utils/types";
import { CommonInputProps } from "../utils/constants";
import { joinClassNames } from "../utils/joinClassNames";

type Inputs = {
  email: string,
  password: string
};

function Login({ setUser }: {setUser: React.Dispatch<React.SetStateAction<userData>>}) {
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState('');
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async data => {
    setIsLoading(true);
    const loginResponse = await login({ email: data.email, password: data.password });

    if ('error' in loginResponse) {
      setIsLoading(false);
      setLoginError(loginResponse.error);
    } else {
      setUser({ ...loginResponse.data, loggedIn: true });
    }
  };

  return (
    <>
      <VStack gap='sm' color='gray.dark'>
        <Heading fontSize='xl' textAlign='center' fontFamily='inherit' color='inherit'>
          Welcome, Stranger!
        </Heading>
        <Text fontSize='md' textAlign='center' color='inherit'>
          Please log in to this form if you wish to pass the exam.
        </Text>
      </VStack>
      <Flex as='form' onInput={() => setLoginError('')} onSubmit={handleSubmit(onSubmit)} flexDirection='column'
            width='100%' gap='0.5rem'
            alignItems='center'>
        <InputGroup>
          <InputRightElement
            height='100%'
            pointerEvents='none'
            children={errors.email ? <Image src='/ic24-Cross.svg'/> : ''}
          />
          <Input placeholder='Email'
                 className={joinClassNames(['input', errors.email ? 'input-error' : ''])}
                 {...CommonInputProps}
                 {...register("email", {
                   required: "This field is required.",
                   pattern: /.+@.+/ig
                 })}/>
        </InputGroup>
        <ErrorMessage message={errors.email && (errors.email.message || "Incorrect email")}/>

        <InputGroup>
          <InputRightElement
            height='100%'
            pointerEvents='none'
            children={errors.password ? <Image src='/ic24-Cross.svg'/> : ''}/>
          <Input placeholder='Password'
                 className={joinClassNames(['input', errors.password ? 'input-error' : ''])}
                 type='password'
                 {...CommonInputProps}
                 {...register("password", { required: "This field is required." })}/>
        </InputGroup>
        <ErrorMessage message={errors.password?.message || loginError}/>

        <Button isLoading={isLoading}>
          {isLoading ?
            <Image src='/i24-loader.svg'/> :
            <>
              <Text fontSize='md' mr={1.5}>Login</Text>
              <Image src='arrow.svg'/>
            </>}
        </Button>
      </Flex>
    </>
  );
}

export default Login;
