import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledContainer = styled.div`
  margin: 50px 0 0 0;
  @media ${(props) => props.theme.minWidth.sm} {
    margin: 70px 0 30px;
  }
  @media ${(props) => props.theme.minWidth.md} {
    margin: 55px 0 40px;
  }
  div {
    display: flex;
    align-items: center;
    border-bottom: 0.8px solid ${(props) => props.theme.colors.black};
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
    column-gap: ${(props) => props.theme.columnGap.mobile};
    column-count: 2;
  }
  @media ${(props) => props.theme.minWidth.xl} {
    grid-column-gap: ${(props) => props.theme.columnGap.desktop};
  }
  a {
    font-size: 15px;
    @media ${(props) => props.theme.minWidth.lg} {
      font-size: 16px;
    }
  }
  li {
    border-bottom: 0.8px solid black;
    padding: 7px 0;
    @media ${(props) => props.theme.minWidth.sm} {
      padding: 10px 0;
    }
    &.blank {
      height: 21px;
      display: none;
      &.blank {
        @media ${(props) => props.theme.minWidth.md} {
          display: block;
        }
      }
    }
  }
`;

const HomeList = ({ type, list }) => {
  return (
    <StyledContainer>
      <div>
        <StyledCircle type={type} />
        <h3>{type}</h3>
      </div>
      <StyledList>
        {list?.map((sectionTitle) => {
          return (
            <li key={sectionTitle}>
              <Link
                to={
                  type === "e-Services"
                    ? "/e-services/#" + sectionTitle
                    : "/expertises/#" + sectionTitle
                }
                dangerouslySetInnerHTML={{ __html: sectionTitle }}
              ></Link>
            </li>
          );
        })}
        {type === "e-Services" ? <li className="blank"></li> : null}
      </StyledList>
    </StyledContainer>
  );
};

export default HomeList;
