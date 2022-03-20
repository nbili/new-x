import React from "react";
import ReactDOM from "react-dom";
// import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";

// import Quote from "./components/Quote";
import Breadcrumbs, { Crumb } from "./components/Breadcrumbs";

// const Title = styled.h1`
//   font-size: 1.4em;
//   text-align: center;
//   color: blue;
// `;

// const Description = styled.p`
//   font-size: 1em;
//   color: gray;
// `;

function App() {
  return (
    <div>
      {/* <Title>css in js</Title>
      <Description>this is a Description</Description> */}

      {/* <Quote by="子曰" source="https://ctext.org/analects/xue-er/zhs">
        学而时习之，不亦说乎？有朋自远方来，不亦乐乎？人不知而不愠，不亦君子乎？
      </Quote> */}

      <Breadcrumbs>
        <Crumb href={`/home`}>Home</Crumb>
        <Crumb href={`/course`}>Course</Crumb>
        <Crumb href={`/cache`}>Cache</Crumb>
        <Crumb href={`/session`}>Session</Crumb>
      </Breadcrumbs>

      <GlobalStyles />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
