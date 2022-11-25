import { loginParameters, loginSucess, loginError } from "../utils/types";


export function login({ email, password }: loginParameters): Promise<loginSucess|loginError> {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (email === "elon@mercdev.com" && password === "twitter") {
        resolve({ data: { avatar: "/avatar.jpeg", name: "Elon" } });
      } else {
        resolve({ error: "Incorrect email or password" });
      }
    }, 1000);
  });
}
