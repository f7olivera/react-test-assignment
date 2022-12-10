import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { Input as ChakraInput } from "@chakra-ui/input";

export type loginParameters = {
  email: string,
  password: string
}

export type loginSucess = {
  data: {
    avatar: string,
    name: string
  }
}

export type loginError = {
  error: string
}

export type userData = loginSucess["data"] & {loggedIn: boolean} | undefined;

export type profileProps = userData & {
  setUser: React.Dispatch<React.SetStateAction<userData>>
}

export type inputProps = {
  error: FieldError | undefined,
  register?: UseFormRegisterReturn
} & React.ComponentProps<typeof ChakraInput>
