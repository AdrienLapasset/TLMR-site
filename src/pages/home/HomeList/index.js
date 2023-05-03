import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledContainer = styled.div`
  margin: 70px 0 45px;
  div {
    display: flex;
    align-items: center;
    border-bottom: 0.5px solid ${(props) => props.theme.colors.black};
    padding-bottom: 10px;
  }
`;
const StyledCircle = styled.div`
  background-color: ${(props) => props.theme.colors.black};
  width: 14px;
  height: 14px;
  border-radius: ${(props) => (props.type === "Compétences" ? "100px" : "0")};
  margin-right: 10px;
`;
const StyledList = styled.ul`
  column-count: 2;
  column-gap: 20px;
  a {
    border-bottom: 0.5px solid ${(props) => props.theme.colors.grey};
    padding: 10px 0;
  }
`;

const HomeList = ({ type, list }) => {
  const listRender = list.map((element, index) => {
    return <Link key={index}>{element}</Link>;
  });

  return (
    <StyledContainer>
      <div>
        {type === "Compétences" ? <StyledCircle type={type} /> : null}
        <h3>{type}</h3>
      </div>
      <StyledList>{listRender}</StyledList>
    </StyledContainer>
  );
};

export default HomeList;
