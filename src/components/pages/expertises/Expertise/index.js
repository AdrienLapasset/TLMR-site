import * as React from "react";
import styled from "styled-components";
import Grid from "components/global/Grid";
import Title from "components/global/Title";
import Accordion from "../Accordion";

const StyledContainer = styled.div`
  margin-top: 110px;
  border-top: ${(props) => props.theme.border.black};
  padding-top: 5px;
  aside {
    margin-bottom: 40px;
    span {
      margin-left: 10px;
    }
  }
  & > p {
    border-top: ${(props) => props.theme.border.black};
    padding-top: 5px;
  }
`;
const StyledDot = styled.div`
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: ${(props) => props.theme.colors.black};
  border-radius: 100px;
  margin-right: 7px;
  @media ${(props) => props.theme.minWidth.md} {
    width: 14px;
    height: 14px;
    margin-right: 10px;
  }
`;

const Expertise = ({ expertise }) => {
  return (
    <StyledContainer>
      <Title type="h2" small lowercase>
        {expertise.title}
      </Title>
      <aside>
        <p className="small">
          <StyledDot />
          Leaders League & Le Point
          <span className="greyLight">
            Le cabinet est classé parmis les meilleurs cabinets français pour
            son expertise
          </span>
        </p>
      </aside>
      <p
        dangerouslySetInnerHTML={{
          __html: expertise.description,
        }}
      ></p>
      <Accordion data={expertise.accordion} />
    </StyledContainer>
  );
};

export default Expertise;
