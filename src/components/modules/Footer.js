import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { Container, Row } from "react-bootstrap";
import "react-vertical-timeline-component/style.min.css";
import { styled } from "styled-components";
import { useTranslation } from "react-i18next";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { colors } from "../../utils/colors.js";
import { queries } from "../../utils/queries.js";
import { Paragraph, SectionTitle } from "../../utils/typography.js";
import Link from "../atoms/Link.js";
import CustomButton from "../atoms/Button.js";
import FooterBar from "./FooterBar";
import orangeImg from "../../../src/images/orange_lady.jpg";

const FooterWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${colors.secondarylight};

  @media ${queries.tablet} {
    height: 100vh;
    flex-direction: row;
  }
`;
const InfoSection = styled.div`
  width: 100%;

  @media ${queries.tablet} {
    width: 50%;
  }
`;

const TextSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 132px);
  padding: 60px 15px;
  background-color: ${colors.pink};

  @media ${queries.tablet} {
    height: 100vh;
    padding: 150px 15px;
  }
`;

const ContactDataWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 10px;
  padding: 0 25px;
  text-align: left;

  span {
    font-weight: 700;
    color: ${colors.primary};
  }

  @media ${queries.tablet} {
    align-items: flex-start;
    justify-content: start;
  }
`;

const ButtonWrapper = styled.div`
  text-align: center;

  button {
    margin-top: 50px;
  }

  @media ${queries.laptop} {
    button {
      margin-top: 100px;
    }
  }
`;

const SocialIconWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: start;
  gap: 10px;

  svg {
    width: 30px;
    height: 30px;
    color: ${colors.secondary};
    font-weight: 700;
  }
`;

const ImageSection = styled.div`
  display: none;

  @media ${queries.tablet} {
    display: block;
    height: 100vh;
    width: 50%;
    background-color: ${colors.pink};
    
    img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
    }
  }
`;

const Footer = () => {
  const { t } = useTranslation();

  return (
    <FooterWrapper id="contact">
      <InfoSection>
        <Fade triggerOnce>
          <TextSection>
            <Container>
              <Row>
                <Fade triggerOnce delay={300}>
                  <SectionTitle
                    text={t("contact.title")}
                    uppercase="true"
                    centered="true"
                    padding="0 20px"
                    color={colors.primary}
                    marginBottom="100px"
                  />
                </Fade>
              </Row>
              <Row>
                <ContactDataWrapper>
                  <Paragraph color={colors.secondary}>
                    {t("contact.city")}
                  </Paragraph>
                  <Link href={`mailto:{t("contact.mail")}`}>
                    {t("contact.mail")}
                  </Link>
                  <SocialIconWrapper>
                    <Link href={t("contact.linkedin")} blank>
                      <FaLinkedin />
                    </Link>
                    <Link href={t("contact.github")} blank>
                      <FaGithubSquare />
                    </Link>
                  </SocialIconWrapper>
                </ContactDataWrapper>
              </Row>
              <Row>
                <ButtonWrapper>
                  <CustomButton text={t("contact.button")} uppercase="true" />
                </ButtonWrapper>
              </Row>
            </Container>
          </TextSection>
        </Fade>
      </InfoSection>
      <ImageSection>
        <Slide direction="right" triggerOnce>
          <img src={orangeImg} alt="orange lady" />
        </Slide>
      </ImageSection>
      <FooterBar />
    </FooterWrapper>
  );
};

export default Footer;
