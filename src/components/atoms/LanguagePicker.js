import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { styled } from "styled-components";
import { colors } from "../../utils/colors.js";
import { queries } from "../../utils/queries.js";
import { languages } from "../../utils/languages.js";
import Loader from "./Loader.js";

const LanguagePickerWrapper = styled.div`
  div {
    border: none;

    @media ${queries.laptop} {
      background: transparent;
    }
  }

  button,
  button:hover,
  button:active,
  button:focus-visible {
    background: none !important;
    font-weight: 600;
    border: none;
    color: ${colors.white};
    outline: none;

    @media ${queries.laptop} {
      color: ${colors.secondary} !important;
    }
  }

  a {
    color: ${colors.primary};
    font-weight: 600;
    width: 60px;

    @media ${queries.laptop} {
      color: ${colors.secondary};
    }

    &:hover {
      background: none;
      color: ${colors.primary};
    }
  }

  @media ${queries.laptop} {
    select {
      color: ${colors.primary};
    }
  }
`;

const LanguagePicker = ({ lang, handleLanguageChange }) => {

  const filteredLanguages = languages.filter(item => item.value !== lang);

  if (!lang) {
    return <Loader />
  }
  
  return (
    <LanguagePickerWrapper>
      <Dropdown title="Select language" onChange={handleLanguageChange}>
        <Dropdown.Toggle id="dropdown-basic">
          {lang.toUpperCase()}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {filteredLanguages.map(item => {
              return (
                <Dropdown.Item key={item.value} href={`?lng=${item.value}`}>
                  {item.value.toUpperCase()}
                </Dropdown.Item>
              );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </LanguagePickerWrapper>
  );
};

export default LanguagePicker;
