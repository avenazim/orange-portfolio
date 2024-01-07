import React from "react";
import { Fade} from "react-awesome-reveal";
import { Container, Row } from "react-bootstrap";
import "react-vertical-timeline-component/style.min.css";
import { styled } from "styled-components";
import { useTranslation } from "react-i18next";
import { colors } from "../../utils/colors.js";
import { queries } from "../../utils/queries.js";
import { Paragraph, SectionTitle, Span } from "../../utils/typography.js";
import stainImg from "../../images/stain_beige.png";
import projectImg from "../../images/project.jpg";
import LeafImg from "../../images/leafs_project.png";

const ProjectsWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 60px 15px;
  background-color: ${colors.secondarylight};
  overflow-y: hidden;
  overflow-x: hidden;

  @media ${queries.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 80px 15px;
  }
`;

const StainImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  max-height: 800px;
  object-fit: contain;
  overflow: visible;

  @media ${queries.tablet} {
    width: 100vw;
    height: 100vh;
  }
`;

const LeafsImg = styled.img`
  position: absolute;
  top: 0px;
  left: -10px;
  width: unset;
  height: 200px;
  object-fit: contain;

  @media ${queries.tablet} {
    height: 250px;
  }
`;

const ProjectsSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  @media ${queries.tablet} {
    flex-direction: row;
  }
`;

const Project = styled.div`
  position: relative;
  width: 100%;
  z-index: 3;

  img {
    position: relative;
    object-fit: contain;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    z-index: 0;
    top: ${(props) => (props.id === 1 ? "-10px" : "unset")};
    bottom: ${(props) => (props.id === 2 ? "-10px" : "unset")};
    left: ${(props) => (props.id === 1 ? "-10px" : "unset")};
    right: ${(props) => (props.id === 2 ? "-10px" : "unset")};
    background-color: ${(props) =>
      props.id === 1
        ? colors.primary
        : props.id === 2
        ? colors.secondary
        : colors.white};
  }

  @media ${queries.tablet} {
    &::before {
      top: ${(props) => (props.id === 1 ? "-30px" : "unset")};
      bottom: ${(props) => (props.id === 2 ? "-30px" : "unset")};
      left: ${(props) => (props.id === 1 ? "-30px" : "unset")};
      right: ${(props) => (props.id === 2 ? "-30px" : "unset")};
      
    }
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: ${(props) =>
    props.id === 1
      ? colors.secondary800
      : props.id === 2
      ? colors.primary800
      : colors.white};
  opacity: 0;
  z-index: 2;

  &:hover {
    opacity: 1;
  }

  a {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: fit-content;
    margin: auto;
    color: ${colors.white} !important;
    font-weight: 900;
    font-size: 20px;
    text-align: center;
    z-index: 3;

    &:hover {
      opacity: 1;
    }
  }
`;

const GithubWrapper = styled.div`
  position: relative;
  padding: 50px 0 0;

  a {
    margin-left: 8px;
  }

  span {
    font-weight: 700;
    color: ${colors.primary};
  }
`;

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      name: t("my_work.project_1_name"),
      link: t("my_work.project_1_link"),
      image: projectImg,
    },
    {
      id: 2,
      name: t("my_work.project_2_name"),
      link: t("my_work.project_2_link"),
      image: projectImg,
    },
  ];

  return (
    <ProjectsWrapper id="my_work">
      <StainImg src={stainImg} alt="stain" />
      <LeafsImg src={LeafImg} alt="leafs" />
      <Container>
        <Row>
          <Fade triggerOnce delay={300}>
            <SectionTitle
              text={t("my_work.title")}
              uppercase="true"
              centered="true"
              position="relative"
              padding="0 20px"
              color={colors.brown}
              marginBottom="100px"
              zIndex="2"
            />
          </Fade>
          <ProjectsSectionWrapper>
            {projects.map((project) => (
              <Project key={project.name} id={project.id}>
                <img src={project.image} alt="project"/>
                <ImageOverlay id={project.id}>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    {project.name}
                  </a>
                </ImageOverlay>
              </Project>
            ))}
          </ProjectsSectionWrapper>
          <GithubWrapper>
            <Paragraph centered="true">
              {t("my_work.more")}
              <a href={t("my_work.github_link")} target="_blank" rel="noreferrer">
                <Span text={t("my_work.github")} />
              </a>
            </Paragraph>
          </GithubWrapper>
        </Row>
      </Container>
    </ProjectsWrapper>
  );
};

export default Projects;
