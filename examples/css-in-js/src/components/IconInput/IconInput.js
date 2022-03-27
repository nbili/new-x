import { useState } from "react";
import styled from "styled-components";

function IconInput({ width = 250, height = 24, ...delegated }) {
  const [value, setValue] = useState("");
  return (
    <Wrapper>
      <IconWrapper>✏️</IconWrapper>
      <TextInput
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        style={{ "--width": width + "px", "--height": height / 16 + "rem" }}
      ></TextInput>
    </Wrapper>
  );
}

const Wrapper = styled.label`
  display: block;
  position: relative;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
`;

const TextInput = styled.input`
  width: var(--width);
  height: var(--height);
  outline-offset: 2px;
  border: none;
  border-bottom: 1px solid black;
  padding-left: 24px;
`;

export default IconInput;
