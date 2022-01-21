import styled from "styled-components";
import SearchPanel from "./containers/SearchPanel";
import "./reset.css";
import "./app.css"


const Wrapper = styled.section`
  display: flex;
  background-color: black;
  min-height: 100vh;
  padding: 1rem calc((110vw - 1200px) / 2);
  @media (max-width: 1200px) {
    padding: 1rem 2rem;
  }
`;
function App() {
  return (
    <Wrapper className="App">
      <SearchPanel />
    </Wrapper>
  );
}

export default App;
