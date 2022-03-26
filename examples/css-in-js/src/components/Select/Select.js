import styled from "styled-components";

function Select({ label, value, onChange, children }) {
  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalBit>Hello World</PresentationalBit>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  max-width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const PresentationalBit = styled.div`
  color: gray;
  background-color: beige;
  font-size: ${16 / 16} rem;
  padding: 12px 16px;
`;

export default Select;
