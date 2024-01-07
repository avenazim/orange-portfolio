import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { useTranslation } from "react-i18next";
import { colors } from "../utils/colors";
import Topbar from "../components/modules/Topbar";
import Header from "../components/modules/Header";
import Skills from "../components/modules/Skills";
import Experience from "../components/modules/Experience";
import Projects from "../components/modules/Projects";
import Loader from "../components/atoms/Loader";
import About from "../components/modules/About";
import Footer from "../components/modules/Footer";
import CookieConsent from "react-cookie-consent";

const HomeWrapper = styled.div`
  background: ${colors.secondarylight};
`;

const HomeArea = styled.div`
  max-width: 1600px;
  overflow: hidden;
  margin: 0 auto;
`;

const Home = ({ lang, handleLanguageChange }) => {
    const { t } = useTranslation();

  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setisLoading(false), 500);
  }, []);

  return !isLoading ? (
    <HomeWrapper>
      <HomeArea>
        <Topbar lang={lang} handleLanguageChange={handleLanguageChange} />
        <Header />
        <Skills />
        <Experience />
        <Projects />
        <About />
        <Footer />
        <CookieConsent
        location="bottom"
        cookieName="myAwesomeCookieName"
        buttonText={t("cookies.confirm")}
        style={{
          background: colors.primary,
          fontFamily: "Roboto Slab",
          fontSize: "12px",
        }}
        buttonStyle={{
          background: colors.white,
          color: colors.primary,
          fontSize: "13px",
        }}
        overlay
      >
        {t("cookies.alert")}
      </CookieConsent>
      </HomeArea>
    </HomeWrapper>
  ) : (
    <Loader />
  );
};

export default Home;
