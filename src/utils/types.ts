import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { Input } from "@chakra-ui/input";

export type loginParameters = {
  email: string,
  password: string
}

export type response<T> = {
  data?: T,
  error?: string
}

export type userData = {
  avatar: string,
  name: string
}

export type user = userData | undefined;

export type profileProps = userData & {
  setUser: React.Dispatch<React.SetStateAction<user>>
}

export type inputProps = {
  error: FieldError | undefined,
  register?: UseFormRegisterReturn
} & React.ComponentProps<typeof Input>
