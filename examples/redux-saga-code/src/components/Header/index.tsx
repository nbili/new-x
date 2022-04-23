import "./index.scss";
import styles from "../../header.module.scss";
import styled from "styled-components";

export function Header() {
  return (
    <Nav>
      <p className={styles.header}>This is Header</p>
      <p className={styles.header}>Right</p>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;
  text-decoration: dashed;
`;
