import * as React from "react";
import styled from "styled-components";

const StyledDot = styled.div`
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: ${(props) => props.theme.colors.black};
  border-radius: ${(props) => (props.square ? "0" : "100px")};
  margin-right: 7px;
`;

const Dot = ({ square }) => {
  return <StyledDot square={square} />;
};

export default Dot;
