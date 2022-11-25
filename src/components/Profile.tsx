import React from "react";
import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import Button from "./Button";
import { profileProps } from "../utils/types";


function Profile({ avatar, name, setUser }: profileProps) {

  return (
    <VStack gap='1rem' width='100%' py={4}>
      <Image src={avatar} width='5rem' borderRadius='50%'/>
      <Heading as='h2' size='md' fontWeight='semibold' mt='0 !important' textAlign='center' color='gray.dark'>
        That's it, {name}!
      </Heading>
      <Button onClick={() => setUser(undefined)} loading={false}>
        <Image src='ic24-Out.svg'/>
        <Text fontSize='md'>Logout</Text>
      </Button>
    </VStack>
  );
}

export default Profile;
