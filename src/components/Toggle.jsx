import React, { useContext } from "react";
import styled from "styled-components";
import { PricingContext } from "../context/PricingContext";

const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;

  input {
    margin: 0 25px;
    position: absolute;
    left: -9999px;
  }

  label {
    background: linear-gradient(135deg, #a2a7f0 0%, #696edd 100%);
    border-radius: 50px;
    cursor: pointer;
    display: inline-block;
    margin: 0 10px;
    position: relative;
    height: 30px;
    width: 60px;

    &:hover {
      background: #cacaf4;
    }
  }
`;

const ToggleButton = styled.button`
  background-color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  top: 2.5px;
  left: 2.5px;
  height: 25px;
  width: 25px;
  transition: transform 0.4s ease;
  transform: ${(props) =>
    props.checked === true ? "translateX(30px)" : "translateX(0px)"};
`;

const PlanElementStyled = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 28px;
  text-align: right;
  color: #6e728e;
  mix-blend-mode: normal;
  opacity: 0.5;
`;

const Toggle = () => {
  const { checked, setChecked } = useContext(PricingContext);

  return (
    <ToggleContainer className="toggle-container">
      <PlanElementStyled>Annually</PlanElementStyled>
      <span onClick={() => setChecked(!checked)}>
        <input type="checkbox" name="toggle" />
        <label htmlFor="toggle">
          <ToggleButton checked={checked} className="ball" />
        </label>
      </span>
      <PlanElementStyled>Monthly</PlanElementStyled>
    </ToggleContainer>
  );
};

export default Toggle;
