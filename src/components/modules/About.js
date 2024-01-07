import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { Container, Row } from "react-bootstrap";
import "react-vertical-timeline-component/style.min.css";
import { styled } from "styled-components";
import { useTranslation } from "react-i18next";
import { colors } from "../../utils/colors.js";
import { queries } from "../../utils/queries.js";
import { Paragraph, SectionTitle, Span } from "../../utils/typography.js";
import meImg from "../../../src/images/about.jpg";

const AboutWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background-color: ${colors.secondarylight};
  overflow: visible;

  @media ${queries.tablet} {
    height: 100vh;
    flex-direction: row;
  }
`;

const FrameWrapper = styled.div`
  position: absolute;
  display: none;
  width: 100%;
  height: 100%;
  z-index: 2;

  @media ${queries.tablet} {
    display: block;
  }
`;
const Frame = styled.div`
  @media ${queries.tablet} {
    position: absolute;
    top: 20vh;
    left: 20px;
    height: 60vh;
    width: 65vw;
    border: 3px solid black;
  }

  @media ${queries.laptopL} {
    left: 0px;
    max-width: 900px;
  }
`;

const LeftColumn = styled.div`
  width: 100%;

  @media ${queries.tablet} {
    width: 50%;
  }
`;

const TextWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${colors.primary};
  padding: 60px 15px;

  @media ${queries.tablet} {
    height: 100vh;
    padding: 150px 15px;
  }
`;

const DescriptionWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 0 25px;
  text-align: justify;

  span {
    font-weight: 700;
    color: ${colors.primary};
  }
`;

const ImageSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background-color: ${colors.secondarylight};
  width: 100%;

  img {
    width: 100vw;
    height: 100%;
    max-height: 400px;
    object-fit: cover;
    object-position: 50% 50%;
  }

  @media ${queries.tablet} {
    height: 100vh;
    width: 50%;

    img {
      width: 100%;
      height: 100vh;
      max-height: unset;
      object-fit: cover;
      object-position: 50% 50%;
    }
  }
`;

const About = () => {
  const { t } = useTranslation();

  return (
    <AboutWrapper id="about_me">
      <FrameWrapper>
        <Fade delay={600} triggerOnce>
          <Frame />
        </Fade>
      </FrameWrapper>
      <LeftColumn>
        <Slide direction="left" triggerOnce>
          <TextWrapper>
            <Container>
              <Row>
                <Fade triggerOnce delay={300}>
                  <SectionTitle
                    text={t("about_me.title")}
                    uppercase="true"
                    centered="true"
                    padding="0 20px"
                    color={colors.white}
                    marginBottom="100px"
                  />
                </Fade>
              </Row>
              <Row>
                <DescriptionWrapper>
                  <Paragraph color={colors.secondary}>
                    {t("about_me.intro")}
                  </Paragraph>
                  <Paragraph color={colors.white}>
                    {t("about_me.content")}
                  </Paragraph>
                </DescriptionWrapper>
              </Row>
            </Container>
          </TextWrapper>
        </Slide>
      </LeftColumn>
      <ImageSection>
        <Slide direction="down" triggerOnce>
          <img src={meImg} alt="woman" />
        </Slide>
      </ImageSection>
    </AboutWrapper>
  );
};

export default About;
