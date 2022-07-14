import React from "react";
import styled from "styled-components";

const TitleStyled = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  text-align: center;
  color: #6e728e;
`;

const Title = () => {
  return (
    <>
      <TitleStyled>Our Pricing</TitleStyled>
    </>
  );
};

export default Title;
