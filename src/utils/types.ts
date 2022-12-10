import React from "react";

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
