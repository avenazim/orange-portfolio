import React from "react";
import { styled } from "styled-components";
import { colors } from "../../utils/colors";

const ButtonWrapper = styled.button`
  background-color: ${(props) => (props.type === "primary" ? colors.primary : props.type === "secondary" ? colors.secondary : props.backgroundcolor ? props.backgroundcolor : colors.white)};
  color: ${(props) => (props.type==="primary" ? colors.white : props.type==="secondary" ? colors.white : props.color ? props.color : colors.white)};
  margin-bottom: 8px;
  padding: 8px 15px;
  border-radius: 5px;
  border: none;
  font-weight: 600;
  letter-spacing: 0.6px;
  text-transform: ${(props) => (props.uppercase ? "uppercase" : "unset")};
  text-align: center;
  font-family: "Mooli", san-serif;
`;

const CustomButton = ({ onClick, uppercase, text, type, backgroundcolor, color}) => {
  return (
    <ButtonWrapper
      onClick={onClick}
          uppercase={uppercase}
          type={type ? type : "primary"}
          backgroundcolor={backgroundcolor}
          color={color}
    >
      {text}
    </ButtonWrapper>
  );
};

export default CustomButton;
