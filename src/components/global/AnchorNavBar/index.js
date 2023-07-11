import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Grid from "components/global/Grid";
import { Link } from "react-scroll";
import Dot from "components/global/Dot";
import { myContext } from "provider";

const StyledContainer = styled.section`
  display: none;
  @media ${(props) => props.theme.minWidth.lg} {
    transform: translateY(${({ isHidden }) => isHidden && `-` + 105}px);
    transition: transform ${(props) => props.theme.transitionTime}s,
      top ${(props) => props.theme.transitionTime}s;
    ${(props) => props.theme.cubicBezier.base};
    position: sticky;
    top: ${({ theme, isNavHidden }) =>
      isNavHidden ? -1 : theme.headerHeight - 1}px;
    z-index: 1;
    background-color: white;
    display: block;
    margin: 100px -45px -40px;
    padding: 0 45px 10px;
  }
`;
const StyledGrid = styled(Grid)`
  border-top: ${({ theme }) => theme.border.black};
  padding-top: 10px;
  grid-template-columns: repeat(6, 1fr);
  h3,
  span {
    font-size: 13px;
    display: none;
    @media ${(props) => props.theme.minWidth.lg} {
      display: block;
      grid-column: 1 / span 2;
      grid-row: 1 / span 2;
    }
  }
`;
const StyledNavLink = styled(Link)`
  text-align: left;
  display: flex;
  align-items: first baseline;
  color: ${(props) => props.theme.colors.greyLight};
  margin-bottom: 6px;
  &.active,
  &:hover {
    p {
      color: ${(props) => props.theme.colors.black};
    }
    & > div {
      background-color: ${(props) => props.theme.colors.black};
    }
  }
  & > div {
    flex: 0 0 10px;
    background-color: ${(props) => props.theme.colors.greyLight};
  }
  p {
    font-size: 13px;
  }
`;

const AnchorNavBar = ({ data, eservices, twoPointsSectionRef }) => {
  const [isHidden, setIsHidden] = useState(false);
  const [isScrollToAnchorNav, setIsScrollToAnchorNav] = useState(false);
  const anchorNavRef = useRef(null);

  useEffect(() => {
    const handleIsHidden = () => {
      const twoPointsSectionPosition =
        twoPointsSectionRef.current.getBoundingClientRect().top;
      twoPointsSectionPosition < 300 ? setIsHidden(true) : setIsHidden(false);
    };
    const handleIsScrollToAnchorNav = () => {
      const anchorNavPosFromTop =
        anchorNavRef.current.getBoundingClientRect().top;
      anchorNavPosFromTop <= 0
        ? setIsScrollToAnchorNav(true)
        : setIsScrollToAnchorNav(false);
    };
    window.addEventListener("scroll", handleIsHidden);
    window.addEventListener("scroll", handleIsScrollToAnchorNav);
    return () => {
      window.removeEventListener("scroll", handleIsHidden);
      window.removeEventListener("scroll", handleIsScrollToAnchorNav);
    };
  }, [twoPointsSectionRef]);
  return (
    <myContext.Consumer>
      {(context) => (
        <StyledContainer
          isNavHidden={context?.isNavHidden}
          isHidden={isHidden}
          isScrollToAnchorNav={isScrollToAnchorNav}
          ref={anchorNavRef}
        >
          <StyledGrid>
            {eservices ? <h3>Solutions</h3> : <h3>Compétences</h3>}
            {data.map(({ title }, index) => (
              <StyledNavLink
                key={index}
                offset={-40}
                to={title}
                activeClass="active"
                smooth
                spy
              >
                <Dot square={eservices} />
                <p dangerouslySetInnerHTML={{ __html: title }}></p>
              </StyledNavLink>
            ))}
          </StyledGrid>
        </StyledContainer>
      )}
    </myContext.Consumer>
  );
};

export default AnchorNavBar;
