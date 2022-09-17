import logo from "./logo.svg";
import "./App.css";
import SearchComponent from "./components/SearchComponent";
import styled from "styled-components";
import CardComponent from "./components/CardComponent";
import { useState } from "react";

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
`;

function App() {
  const [data, setData] = useState("");

  return (
    <Root>
      <SearchComponent data={data} setData={setData} />
      {data && <CardComponent data={data} setData={setData} />}
    </Root>
  );
}

export default App;
