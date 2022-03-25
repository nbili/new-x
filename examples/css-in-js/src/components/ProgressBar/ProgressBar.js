import styled from "styled-components";

function ProgressBar({ value, size }) {
  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <VisuallyHidden>20 %</VisuallyHidden>
      <Bar style={{ "--width": value + "%" }} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border-radius: 4px;
  background-color: #8fbc8fa3;

  overflow: hidden;
`;

const Bar = styled.div`
  width: var(--width);
  height: 8px;
  background-color: blue;
  border-radius: 4px 0 0 4px;
`;

const VisuallyHidden = styled.div`
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
`;

export default ProgressBar;
