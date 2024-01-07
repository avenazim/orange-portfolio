import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Fade, Slide } from "react-awesome-reveal";
import { styled } from "styled-components";
import Accordion from "react-bootstrap/Accordion";
import { useTranslation } from "react-i18next";
import { colors } from "../../utils/colors.js";
import { queries } from "../../utils/queries.js";
import { SectionTitle } from "../../utils/typography.js";
import leafsImg from "../../images/leafs_skills.png";

const SkillsWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: ${colors.secondarylight};
  padding: 150px 0 80px;

  @media ${queries.tablet} {
    display: flex;
    flex-direction: column;
    align-items: inherit;
    justify-content: center;
    min-height: auto;
    height: 100vh;
    margin: auto 0;
  }
`;

const AccordionWrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: ${colors.primary};

  button {
    background-color: transparent !important;
    color: ${colors.secondary};
    box-shadow: none !important;
    font-weight: bold;
    outline: none !important;

    &:not(.collapsed) {
      color: ${colors.white} !important;
    }

    &:not(.collapsed)::after {
      color: ${colors.white};
    }
  }

  .accordion-body {
    color: ${colors.white};
  }

  @media ${queries.tablet} {
    background-color: transparent;
  }
`;

const Redzone = styled.div`
  @media ${queries.tablet} {
    position: absolute;
    top: 25vh;
    left: 0;
    width: 70vw;
    height: calc(100% - 50vh);
    max-width: 1200px;
    background-color: ${colors.primary};
  }
`;

const Square = styled.div`
  @media ${queries.tablet} {
    position: absolute;
    top: 50px;
    left: 30vw;
    right: 10vw;
    bottom: 50px;
    border: 2px solid ${colors.black};
  }

  @media ${queries.laptopL} {
    top: 250px;
    left: 30vw;
    right: 0vw;
    bottom: 250px;
  }
`;

const Leafs = styled.div`
  position: absolute;
  top: 1px;
  right: 5vw;
  height: 140px;
  width: 140px;

  img {
    margin-top: -5px;
    width: 100%;
  }

  @media ${queries.tablet} {
    height: 210px;
    width: 210px;
  }
`;

const TitleWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  z-index: 2;

  h2 {
    margin-bottom: 30px;
    font-weight: 900;
  }

  @media ${queries.tablet} {
    justify-content: start;

    h2 {
      margin-bottom: 0;
    }
  }
`;

const Skills = () => {
  const { t } = useTranslation();

  const hardSkills = [
    t("skills.hard.skill1"),
    t("skills.hard.skill2"),
    t("skills.hard.skill3"),
    t("skills.hard.skill4"),
    t("skills.hard.skill5"),
    t("skills.hard.skill6"),
    t("skills.hard.skill7"),
    t("skills.hard.skill8"),
    t("skills.hard.skill9"),
    t("skills.hard.skill10"),
  ];

  const softSkills = [
    t("skills.soft.skill1"),
    t("skills.soft.skill2"),
    t("skills.soft.skill3"),
    t("skills.soft.skill4"),
    t("skills.soft.skill5"),
    t("skills.soft.skill6"),
    t("skills.soft.skill7"),
    t("skills.soft.skill8"),
    t("skills.soft.skill9"),
    t("skills.soft.skill10"),
  ];

  const languages = [
    {
      language: t("skills.languages.language1"),
      level: t("skills.languages.native"),
    },
    {
      language: t("skills.languages.language2"),
      level: t("skills.languages.advanced"),
    },
    {
      language: t("skills.languages.language3"),
      level: t("skills.languages.basic"),
    },
    {
      language: t("skills.languages.language4"),
      level: t("skills.languages.basic"),
    },
  ];

  return (
    <SkillsWrapper id="skills">
      <Square />
      <Slide
        direction="left"
        triggerOnce
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          top: "10px",
        }}
      >
        <Redzone />
      </Slide>
      <Leafs>
        <Slide direction="down" delay={500} triggerOnce>
          <img src={leafsImg} alt="leafs" />
        </Slide>
      </Leafs>
      <Container>
        <Row>
          <Col xs={{ span: 12, order: 2 }} md={{ span: 8, order: 1 }}>
            <Fade delay={1200} triggerOnce>
            <AccordionWrapper>
              <Accordion defaultActiveKey="0">
                <Accordion.Item
                  eventKey="0"
                  style={{
                    background: "transparent",
                    border: "none",
                    boxShadow: `0 3px 0px -2px ${colors.secondary}`,
                  }}
                >
                  <Accordion.Header>
                    {t("skills.hard.title").toUpperCase()}
                  </Accordion.Header>
                  <Accordion.Body>
                    {hardSkills.join(", ").toUpperCase()}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  eventKey="1"
                  style={{
                    background: "transparent",
                    border: "none",
                    boxShadow: `0 3px 0px -2px ${colors.secondary}`,
                  }}
                >
                  <Accordion.Header>
                    {t("skills.soft.title").toUpperCase()}
                  </Accordion.Header>
                  <Accordion.Body>{softSkills.join(", ").toUpperCase()}</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  eventKey="2"
                  style={{
                    background: "transparent",
                    border: "none",
                    boxShadow: `0 3px 0px -2px ${colors.secondary}`,
                  }}
                >
                  <Accordion.Header>
                    {t("skills.languages.title").toUpperCase()}
                  </Accordion.Header>
                  <Accordion.Body>
                    {languages?.map((group) => (
                      <React.Fragment key={group.language}>
                        <span>
                          {group.language} - {group.level}
                        </span>
                        <br></br>
                      </React.Fragment>
                    ))}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              </AccordionWrapper>
              </Fade>
          </Col>
          <Col xs={{ span: 12, order: 1 }} md={{ span: 4, order: 2 }}>
            <TitleWrapper>
              <Fade delay={1000} triggerOnce>
                <SectionTitle
                  text={t("skills.title")}
                  variant="secondary"
                  uppercase="true"
                />
              </Fade>
            </TitleWrapper>
          </Col>
        </Row>
      </Container>
    </SkillsWrapper>
  );
};

export default Skills;
