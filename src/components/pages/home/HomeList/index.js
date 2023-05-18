import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledContainer = styled.div`
  margin: 50px 0 0 0;
  @media ${(props) => props.theme.minWidth.sm} {
    margin: 70px 0 45px;
  }
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
  column-count: 1;
  @media ${(props) => props.theme.minWidth.md} {
    column-gap: ${(props) => props.theme.columnGap.lg};
    column-count: 2;
  }
  @media ${(props) => props.theme.minWidth.xl} {
    grid-column-gap: ${(props) => props.theme.columnGap.xl};
  }
  a,
  aside {
    border-bottom: 0.5px solid ${(props) => props.theme.colors.greyLight};
    padding: 10px 0;
  }
  aside {
    height: 21px;
    display: none;
    &.blank {
      @media ${(props) => props.theme.minWidth.md} {
        display: block;
      }
    }
  }
`;

const HomeList = ({ type, list }) => {
  const listRender = list?.map((element, index) => {
    return <Link key={index}>{element}</Link>;
  });

  return (
    <StyledContainer>
      <div>
        <StyledCircle type={type} />
        <h3>{type}</h3>
      </div>
      <StyledList>
        {listRender}
        {type === "e-Services" ? <aside className="blank"></aside> : null}
      </StyledList>
    </StyledContainer>
  );
};

export default HomeList;
