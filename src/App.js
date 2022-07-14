import styled from "styled-components";
import Cards from "./components/Cards";
import Title from "./components/Title";
import Toggle from "./components/Toggle";
import { Container } from "./components/ui";

const AppStyled = styled.div`
  margin-top: 70px;
`;

function App() {
  return (
    <>
      <AppStyled>
        <Container>
          <Title />
          <Toggle />
          <Cards />
        </Container>
      </AppStyled>
    </>
  );
}

export default App;
