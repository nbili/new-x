import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.4em;
  text-align: "center";
  color: blue;
`;

function App() {
  return (
    <div>
      <Title>css in js</Title>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
