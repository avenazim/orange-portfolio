import React, { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import {isMobile} from 'react-device-detect';
import { FaBars, FaTimes } from "react-icons/fa";
import { styled } from "styled-components";
import { queries } from "../../utils/queries.js";
import { colors } from "../../utils/colors.js";
import Link from "../atoms/Link.js";
import LanguagePicker from "../atoms/LanguagePicker.js";

const TopbarWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  display: flex;
  padding: 0 15px;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.primary};
  z-index: 10;

  @media ${queries.tablet} {
    padding: 0 25px;
  }

  @media ${queries.laptop} {
    background-color: transparent;
  }
`;

const List = styled.ul`
  display: flex;
  position: fixed;
  right: -100%;
  top: 80px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 80px);
  text-align: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
  background-color: ${colors.primary900};
  transition: all 0.4s cubic-bezier(0.5, 0.24, 0, 1);
  z-index: 8;

  &.active {
    right: 0;
  }

  @media ${queries.tablet} {
    width: 400px;
  }

  @media ${queries.laptop} {
    position: initial;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    background-color: transparent;
  }
`;

const ListElement = styled.li`
  justify-content: center;
  padding: 0.5rem;
  margin: 0.5rem;
  text-transform: uppercase;
  cursor: pointer;

  a {
    font-family: "Raleway", san-serif;
    color: ${colors.white};

    &:hover {
      color: ${colors.white};
    }
  }

  @media ${queries.laptop} {
    a {
      color: ${colors.secondary};

      &:hover {
        color: ${colors.secondary};
      }
    }
  }
`;

const Hamburger = styled.div`
  display: flex;
  padding: 1rem;
  cursor: pointer;

  @media ${queries.laptop} {
    display: none;
  }
`;

const Topbar = ({ lang, handleLanguageChange }) => {
  const { t } = useTranslation();
  const topbarRef = useRef(null);
  const menuOptions = [
    { text: t("topbar.home"), section: "header" },
    { text: t("topbar.skills"), section: "skills" },
    { text: t("topbar.experience"), section: "experience" },
    { text: t("topbar.my_work"), section: "my_work" },
    { text: t("topbar.about_me"), section: "about_me" },
    { text: t("topbar.contact"), section: "contact" },
  ];

  const [click, setClick] = useState(false);

  const handleClick = () => setClick((prev) => !prev);

  const handleClickOutside = (event) => {
    if (topbarRef.current && !topbarRef.current.contains(event.target)) {
      setClick(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleClickScroll = (goTo) => {
    var elementPosition = document.getElementById(goTo);
    var elementPositionOffset = document.getElementById(goTo).offsetTop;

    if (elementPosition === "topbar") {
      scrollToTop();
    } else if (elementPosition && isMobile) {
      window.scrollTo({ top: elementPositionOffset - 80, behavior: "smooth" });
    }
    else if (elementPosition && !isMobile){
      window.scrollTo({ top: elementPositionOffset, behavior: "smooth" });
    }

    handleClick();
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <TopbarWrapper ref={topbarRef}>
      <List className={click && "active"}>
        {menuOptions.map((option) => (
          <ListElement
            href="#"
            key={option.text}
            onClick={() => handleClickScroll(option.section)}
          >
            <Link>{option.text}</Link>
          </ListElement>
        ))}
        <LanguagePicker
          lang={lang}
          handleLanguageChange={handleLanguageChange}
        />
      </List>
      <Hamburger onClick={handleClick}>
        {click ? (
          <FaTimes size={30} style={{ color: colors.white }} />
        ) : (
          <FaBars size={30} style={{ color: colors.white }} />
        )}
      </Hamburger>
    </TopbarWrapper>
  );
};

export default Topbar;
