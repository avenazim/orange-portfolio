import React from "react";
import "react-vertical-timeline-component/style.min.css";
import { styled } from "styled-components";
import { useTranslation } from "react-i18next";
import { colors } from "../../utils/colors.js";
import { queries } from "../../utils/queries.js";
import { Paragraph} from "../../utils/typography.js";

const FooterBarWrapper = styled.div`
  background-color: ${colors.primary};
  color: ${colors.white};
  width: 100%;
  padding: 10px;

  @media ${queries.tablet} {
    position: absolute;
    bottom:0;
    left:0;
  }
`;

const FooterBar = () => {
  const { t } = useTranslation();

  return (
      <FooterBarWrapper>
        <Paragraph centered="true">
          {t("footer.copyright")}
        </Paragraph>
      </FooterBarWrapper>
  );
};

export default FooterBar;
