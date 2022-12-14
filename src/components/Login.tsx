import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import Input from "./Input";
import Button from "./Button";
import ErrorMessage from "./ErrorMessage";
import { login } from '../api';
import { user, loginParameters, response, userData } from "../utils/types";
import { CommonInputProps } from "../utils/constants";


function Login({ setUser }: {setUser: React.Dispatch<React.SetStateAction<user>>}) {
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState('');
  const { register, handleSubmit, formState: { errors } } = useForm<loginParameters>();

  const onSubmit: SubmitHandler<loginParameters> = async data => {
    setIsLoading(true);
    const loginResponse: response<userData> = await login({ email: data.email, password: data.password });

    if (loginResponse.error) {
      setIsLoading(false);
      setLoginError(loginResponse.error);
    } else {
      setUser({ ...loginResponse.data as userData });
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
            noValidate={true}
            width='100%' gap='0.5rem'
            alignItems='center'>
        <Input error={errors.email} placeholder='Email' type='email'
               {...CommonInputProps}
               register={register("email", {
                 required: "This field is required.",
                 pattern: /.+@.+/ig
               })}/>
        <ErrorMessage message={errors.email && (errors.email.message || "Incorrect email")}/>

        <Input error={errors.password} placeholder='Password' type='password'
               {...CommonInputProps}
               register={register("password", { required: "This field is required." })}/>
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
