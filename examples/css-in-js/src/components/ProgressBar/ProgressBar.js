import styled from "styled-components";

function ProgressBar({ value, size }) {
  return (
    <BarWrapper
      role="progressbar"
      aria-valuenow="20"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      {/* 20 % */}
      <Bar style={{ "--width": value + "%" }} />
    </BarWrapper>
  );
}

const BarWrapper = styled.div`
  border-radius: 4px;

  overflow: hidden;
`;

const Bar = styled.div`
  width: var(--width);
  height: 8px;
  background-color: blue;
  border-radius: 4px 0 0 4px;
`;

export default ProgressBar;
