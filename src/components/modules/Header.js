import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Fade, Slide } from "react-awesome-reveal";
import { styled } from "styled-components";
import { useTranslation } from "react-i18next";
import { colors } from "../../utils/colors.js";
import { queries } from "../../utils/queries.js";
import { Heading, Subheading } from "../../utils/typography.js";
import meImg from "../../../src/images/header.png";

const HeaderWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${colors.secondarylight};
  overflow: hidden;
  z-index: 2;

  @media ${queries.tablet} {
    height: 100vh;
    padding: 80px 0;
  }
`;

const Redzone = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 200px;
  width: 100%;
  background-color: ${colors.primary};
  z-index: 1;

  @media ${queries.tablet} {
    top: 0;
    bottom: auto;
    left: auto;
    right: 0;
    width: 40vw;
    height: 100%;
  }
`;

const DataWrapper = styled.div`
  display: block;
  min-height: 100vh;
  width: 100%;
  z-index: 2;

  @media ${queries.tablet} {
    min-height: auto;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 150px 0 50px;

  h1,
  h2 {
    text-align: center;
  }

  @media ${queries.tablet} {
    align-items: start;

    h1,
    h2 {
      text-align: unset;
    }
  }

  @media ${queries.laptop} {
    padding: 0;
  }
`;

const ImageWrapper = styled.img`
  display: block;
  max-width: 100%;
  max-height: 650px;
  margin: 0 auto;
`;

const Header = () => {
  const { t } = useTranslation();
  return (
    <HeaderWrapper id="header">
      <Slide
        direction="right"
        style={{ position: "absolute", height: "100%", width: "100%" }}
        triggerOnce
      >
        <Redzone />
      </Slide>
      <DataWrapper>
        <Container>
          <Row>
            <Col xs={12} md={4} lg={4}>
              <TextWrapper>
                <Fade triggerOnce>
                  <Heading text={t("header.heading")} variant="primary" />
                </Fade>
                <Fade delay={1000} triggerOnce>
                  <Subheading
                    text={t("header.subheading")}
                    variant="secondary"
                    italic="true"
                  />
                </Fade>
              </TextWrapper>
            </Col>
            <Col xs={12} md={8} lg={8}>
              <Slide direction="up" triggerOnce delay={500}>
                <ImageWrapper src={meImg} alt="me" />
              </Slide>
            </Col>
          </Row>
        </Container>
      </DataWrapper>
    </HeaderWrapper>
  );
};

export default Header;
