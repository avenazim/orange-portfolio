import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { styled } from "styled-components";
import { useTranslation } from "react-i18next";
import { colors } from "../../utils/colors.js";
import { queries } from "../../utils/queries.js";
import { SectionTitle } from "../../utils/typography.js";
import meImg from "../../../src/images/exp.jpg";

const ExpWrapper = styled.div`
  position: relative;
  background-color: ${colors.secondarylight};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  @media ${queries.tablet} {
    height: 100vh;
    flex-direction: row;
  }
`;

const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px 15px;
  width: 100%;

  @media ${queries.laptop} {
    height: 100vh;
    align-items: center;
    justify-content: center;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;

  img {
    max-height: 350px;
  }

  @media ${queries.tablet} {
    img {
      max-height: 100%;
    }
  }

  @media ${queries.laptop} {
    height: 100vh;
  }
`;

const Overlay = styled.div`
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: ${colors.primary500};
  opacity: 0.2;
`;

const BackgroundImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: 50% 50%;
  background: ${colors.primary};

  @media ${queries.tablet} {
    height: 100vh;
  }
`;

const Experience = () => {
  const { t } = useTranslation();
  return (
    <ExpWrapper id="experience">
      <ImageWrapper>
        <Zoom triggerOnce delay={500}>
          <div>
            <BackgroundImage src={meImg} alt="me" />
            <Overlay />
          </div>
        </Zoom>
      </ImageWrapper>
      <DataWrapper>
        <Fade triggerOnce delay={300}>
          <SectionTitle
            text={t("exp.title")}
            variant="primary"
            uppercase="true"
            centered="true"
            padding="0 20px"
          />
        </Fade>
        <div>
          <VerticalTimeline
            visible={false}
            layout="1-column-left"
            lineColor="black"
            style={{ width: "1px" }}
          >
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "transparent",
                color: colors.secondary,
                boxShadow: "none",
              }}
              contentArrowStyle={{
                borderRight: `7px solid ${colors.secondary}`,
                top: "30px",
              }}
              date= {t('exp.firm_1_years')}
              iconStyle={{
                background: "transparent",
                color: colors.secondary,
                display: "none",
              }}
            >
              <h4
                className="vertical-timeline-element-title"
                style={{ color: `${colors.brown}`, fontWeight: "bold" }}
              >
                {t('exp.firm_1_name')}
              </h4>
              <p>{t('exp.firm_1_role')}</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "transparent",
                color: colors.secondary,
                boxShadow: "none",
              }}
              contentArrowStyle={{
                borderRight: `7px solid ${colors.secondary}`,
                top: "30px",
              }}
              date= {t('exp.firm_2_years')}
              iconStyle={{
                background: "transparent",
                color: colors.secondary,
                display: "none",
              }}
            >
              <h4
                style={{ color: `${colors.brown}`, fontWeight: "bold" }}
                className="vertical-timeline-element-title"
              >
                 {t('exp.firm_2_name')}
              </h4>
              <p> {t('exp.firm_2_role')}</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </DataWrapper>
    </ExpWrapper>
  );
};

export default Experience;
