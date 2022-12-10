import { useState } from "react";
import { Flex } from "@chakra-ui/react";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Layout from "./components/Layout";
import { userData } from "./utils/types";


function App() {
  const [user, setUser] = useState(undefined as userData);

  return (
    <Flex justifyContent='center' width='100%' height='100vh' fontFamily='Inter'
          background={'linear-gradient(-45deg, #4439FF 0%, #AC53FF 100%)'}>
      <Layout>
        {user ? <Profile {...user} setUser={setUser}/> : <Login setUser={setUser}/>}
      </Layout>
    </Flex>
  );
}

export default App;
