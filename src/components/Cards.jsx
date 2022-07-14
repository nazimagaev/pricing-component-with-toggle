import React, { useContext } from "react";
import styled from "styled-components";
import { PricingContext } from "../context/PricingContext";
import { LearnMoreButton } from "./ui";

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 64px;
`;

const CardStyled = styled.div`
  padding: 31px 31px;

  padding: ${(props) => (props.selected ? "55px 31px" : "31px 31px")};

  background: ${(props) =>
    props.selected
      ? "linear-gradient(135.06deg, #A2A7F0 -0.05%, #696EDD 100.05%);"
      : "#fff"};

  box-shadow: 0px 20px 40px rgba(212, 210, 244, 0.5);

  border-radius: ${(props) =>
    props.selected ? "10px" : "10px 0px 0px 10px"};

  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
    color: ${(props) => (props.selected ? "#fff" : "#4A4D60")};
  }
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;

  margin-top: 24px;
  color: ${(props) => (props.selected ? "#fff" : "#4A4D60")};

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 62px;
    line-height: 71px;
    letter-spacing: -2.16px;
  }

  span {
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 49px;
    text-align: center;
    letter-spacing: -1.2px;
    margin-right: 8px;
  }
`;

const OffersContainer = styled.ul`
  margin-top: 30px;
  margin-bottom: 30px;
  list-style: none;

  li {
    color: ${(props) => (props.selected ? "#fff" : "#4A4D60")};
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 28px;
    text-align: center;

    padding-top: 12px;
    padding-bottom: 12px;

    border-top: 1px solid rgba(110, 114, 142, 0.25);
    border-top: ${(props) =>
      props.selected
        ? "1px solid rgba(255, 255, 255, 0.25)"
        : "1px solid rgba(110, 114, 142, 0.25)"};

    &:last-child {
      border-bottom: ${(props) =>
        props.selected
          ? "1px solid rgba(255, 255, 255, 0.25)"
          : "1px solid rgba(110, 114, 142, 0.25)"};
    }
  }
`;

const Cards = () => {
  const { plansForAnnually, plansForMonthly, checked } =
    useContext(PricingContext);
  return (
    <CardsContainer>
      {checked
        ? plansForAnnually.map((plan) => {
            return (
              <CardStyled selected={plan.selected ? "selected" : ""}>
                <h3>{plan.title}</h3>
                <PriceContainer selected={plan.selected ? "selected" : ""}>
                  <span>$</span>
                  <h1>{plan.price}</h1>
                </PriceContainer>
                <OffersContainer
                  selected={plan.selected ? "selected" : ""}
                >
                  <li>{plan.adress}</li>
                  <li>{plan.state}</li>
                  <li>{plan.location}</li>
                </OffersContainer>
                <LearnMoreButton
                  selected={plan.selected ? "selected" : ""}
                >
                  LEARN MORE
                </LearnMoreButton>
              </CardStyled>
            );
          })
        : plansForMonthly.map((plan) => {
            return (
              <CardStyled selected={plan.selected ? "selected" : ""}>
                <h3>{plan.title}</h3>
                <PriceContainer selected={plan.selected ? "selected" : ""}>
                  <span>$</span>
                  <h1>{plan.price}</h1>
                </PriceContainer>
                <OffersContainer
                  selected={plan.selected ? "selected" : ""}
                >
                  <li>{plan.adress}</li>
                  <li>{plan.state}</li>
                  <li>{plan.location}</li>
                </OffersContainer>
                <LearnMoreButton
                  selected={plan.selected ? "selected" : ""}
                >
                  LEARN MORE
                </LearnMoreButton>
              </CardStyled>
            );
          })}
    </CardsContainer>
  );
};

export default Cards;

// {plansForAnnually.map((plan)=>
// (    <CardStyled>
//    <h3>Professional</h3>
//    <PriceContainer>
//      <span>$</span>
//      <h1>249.99</h1>
//    </PriceContainer>
//    <OffersContainer>
//      <li>1 TB Storage</li>
//      <li>5 Users Allowed</li>
// //      <li>Send up to 10 GB</li>
//    </OffersContainer>
//  </CardStyled>)}
