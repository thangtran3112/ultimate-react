import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";

//This component will extends all props from <h1> component
const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      {/* Global styled component cannot have any children. Similar to Material UI CSSBaseline */}
      <GlobalStyle />
      <StyledApp>
        <H1>The Wild Oasis</H1>
        <Button>Check In</Button>
        <Button>Check Out</Button>
        <Input type="number" placeholder="Number of guests" />
      </StyledApp>
    </>
  );
}

export default App;
