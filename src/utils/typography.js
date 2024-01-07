import React from "react";
import { styled } from "styled-components";
import { colors } from "./colors";
import { queries } from "./queries.js";

const HeadingProps = styled.h1`
  margin-bottom: 15px;
  font-weight: bold;
  color: ${(props) =>
    props.variant === "primary"
      ? `${colors.primary}`
      : props.variant === "secondary"
      ? `${colors.secondary}`
      : `${colors.black}`};
  letter-spacing: 1px;
  text-transform: ${(props) => (props?.uppercase ? "uppercase" : "unset")};
  font-size: 42px;
  font-style: ${(props) => (props?.italic ? "italic" : "unset")};
  text-wrap: nowrap;

  @media ${queries.tablet} {
    font-size: 56px;
  }

  @media ${queries.laptop} {
    font-size: 72px;
  }
`;

const SubheadingProps = styled.h2`
  margin-bottom: 12px;
  font-weight: lighter;
  color: ${(props) =>
    props.variant === "primary"
      ? `${colors.primary}`
      : props.variant === "secondary"
      ? `${colors.secondary}`
      : `${colors.black}`};
  letter-spacing: 0.9px;
  text-align: ${(props) => (props.centered ? "center" : "unset")};
  text-transform: ${(props) => (props.uppercase ? "uppercase" : "unset")};
  font-style: ${(props) => (props.italic ? "italic" : "unset")};
  font-weight: 700;
  font-family: "CroissantOne", san-serif;
  text-wrap: nowrap;

  @media ${queries.laptop} {
    font-size: 32px;
  }
`;

const SectionTitleProps = styled.h2`
  margin-bottom: 25px;
  font-weight: bolder;
  color: ${(props) =>
    props.variant === "primary"
      ? `${colors.primary}`
      : props.variant === "secondary"
      ? `${colors.secondary}`
      : `${colors.black}`};
  letter-spacing: 0.9px;
  text-align: ${(props) => (props.centered ? "center" : "unset")};
  text-transform: ${(props) => (props.uppercase ? "uppercase" : "unset")};
  font-style: ${(props) => (props.italic ? "italic" : "unset")};
  font-family: "Mooli", san-serif;

  @media ${queries.tablet} {
    margin-bottom: 50px;
  }

  @media ${queries.laptop} {
    font-size: 36px;
  }
`;

const ParagraphProps = styled.p`
    margin-bottom: 8px;
    font-weight: 700;
    color: ${colors.secondary};
    letter-spacing: 0.6px;
    text-transform: ${(props) => (props.uppercase ? "uppercase" : "unset")};
    text-align: ${(props) =>
      props.justified ? "justify" : props.centered ? "center" : "unset"};
    font-family: "Mooli", san-serif;
    font-style: ${(props) => (props.italic ? "italic" : "unset")};
}
`;

const SpanProps = styled.span`
    display: inline-flex;
    font-weight: 400;
    color: #333;
    letter-spacing: 0.6px;
    text-transform: ${(props) => (props.uppercase ? "uppercase" : "unset")};
    font-family: "Mooli", san-serif;
    font-style: ${(props) => (props.italic ? "italic" : "unset")};
}
`;

export function Heading({ variant, text, uppercase, italic, ...props }) {
  return (
    <HeadingProps
      variant={variant}
      uppercase={uppercase}
      italic={italic}
      style={{ ...props }}
    >
      {text}
    </HeadingProps>
  );
}

export function Subheading({
  variant,
  text,
  uppercase,
  italic,
  centered,
  ...props
}) {
  return (
    <SubheadingProps
      variant={variant}
      uppercase={uppercase}
      italic={italic}
      centered={centered}
      style={{ ...props }}
    >
      {text}
    </SubheadingProps>
  );
}

export function SectionTitle({
  variant,
  text,
  uppercase,
  italic,
  centered,
  ...props
}) {
  return (
    <SectionTitleProps
      variant={variant}
      uppercase={uppercase}
      italic={italic}
      centered={centered}
      style={{ ...props }}
    >
      {text}
    </SectionTitleProps>
  );
}

export function Paragraph({
  text,
  children,
  uppercase,
  italic,
  justified,
  centered,
  ...props
}) {
  return (
    <ParagraphProps
      uppercase={uppercase}
      italic={italic}
      justified={justified}
      centered={centered}
      style={{ ...props }}
    >
      {text} {children}
    </ParagraphProps>
  );
}
export function Span({ text, uppercase, italic, ...props }) {
  return (
    <SpanProps uppercase={uppercase} italic={italic} style={{ ...props }}>
      {text}
    </SpanProps>
  );
}
