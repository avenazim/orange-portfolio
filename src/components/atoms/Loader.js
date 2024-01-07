import React from "react";
import { styled } from "styled-components";
import { colors } from "../../utils/colors";

const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${colors.secondarylight};
`;

const LoaderProps = styled.div`
  width: 150px;
  height: 150px;
  margin: auto;
  border: 6px solid ${colors.secondary};
  border-top: 6px solid ${colors.primary};
  border-radius: 50%;
  animation: spin 1.6s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loader = () => {
  return (
    <LoaderWrapper>
      <LoaderProps />
    </LoaderWrapper>
  );
};

export default Loader;
