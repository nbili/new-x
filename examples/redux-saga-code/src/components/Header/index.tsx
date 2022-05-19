import "./index.scss";
import styled from "styled-components";

export function Header() {
  return (
    <Nav>
      <h1></h1>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;
  text-decoration: dashed;
`;
