import styled from "styled-components";

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

export const LearnMoreButton = styled.button`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 1.39286px;
  color: ${(props) => (props.selected ? "#6D72DE" : "#fff")};

  background: ${(props) =>
    props.selected
      ? "#fff"
      : "linear-gradient(135deg, #a2a7f0 0%, #696edd 100%)"};
  border-radius: 6px;

  padding: 14px 66px;
  width: 100%;
  border: none;
  cursor: pointer;

  text-align: center;

  &:hover {
    border-color: red;
  }
`;
