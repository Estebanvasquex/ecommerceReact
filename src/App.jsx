import "./App.css";
import Container from "@mui/material/Container";
import Main from "./Pages/Main/Main";
import { useState } from "react";

function App() {
  const [inputUser, setInputUser] = useState("Desayuno");
  const [userState, setUserState] = useState("inputUser");

  return (
    <div className="App">
      <Container
        maxWidth="xl"
        sx={{
          bgcolor: "#ffffff",
          boxshadow: "1px 3px 7px 0px #000000",
          borderRadius: "20px",
          paddingBottom: "20px",
        }}
      >
        <Main inputUser={inputUser} setInputUser={setInputUser} />
      </Container>
    </div>
  );
}

export default App;
