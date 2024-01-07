import React from "react";
import { styled } from "styled-components";
import { colors } from "../../utils/colors";

const LinkWrapper = styled.a`
  font-weight: 600;
  color: ${colors.secondary};
  margin-bottom: 8px;
`;

const Link = ({href, blank, children}) => {
  return (
    <LinkWrapper href={href} target={blank ? "_blank" : "_self"}>
      {children}
    </LinkWrapper>
  );
};

export default Link;
