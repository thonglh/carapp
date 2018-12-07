import React from "react";
import styled from "styled-components";

import GameCanvas from "./components/GameCanvas";
import GameControl from "./components/GameControl";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Header = styled.div`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 20px;
  padding: 10px;
`;

const Body = styled.div`
  display: flex;
  padding: 10px;
`;

const GameContainer = styled.div`
  flex: 1;
  padding: 10px;
  border: 1px solid #dcdcdc;
  display: flex;
  flex-direction: column;
`;

const OnlineListContainer = styled.div`
  max-width: 300px;
  padding: 10px;
  flex: 1;
`;

const App = () => (
  <Container>
    <Header>Zaro server</Header>
    <Body>
      <GameContainer>
        <GameCanvas />
        <GameControl />
      </GameContainer>
      <OnlineListContainer>User online</OnlineListContainer>
    </Body>
  </Container>
);

export default App;
