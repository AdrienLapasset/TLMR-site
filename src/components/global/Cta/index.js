import * as React from "react";
import styled, { css } from "styled-components";
import { Link } from "gatsby";

const StyledCta = css`
  text-decoration: underline;
  text-underline-offset: 7px;
  font-size: 16px;
  @media ${(props) => props.theme.minWidth.md} {
    font-size: 15px;
  }
`;

const StyledLink = styled(Link)`
  ${StyledCta}
`;
const StyledButton = styled.button`
  ${StyledCta}
`;
const StyledA = styled.a`
  ${StyledCta}
`;

const Cta = ({ as, children, className, onClick, href, to }) => {
  if (onClick)
    return (
      <StyledButton className={className} onClick={() => onClick()}>
        {children}
      </StyledButton>
    );
  if (to)
    return (
      <StyledLink
        to={to}
        as={as}
        className={className}
        onClick={() => onClick()}
        href={href}
      >
        {children}
      </StyledLink>
    );
  if (href)
    return (
      <StyledA className={className} href={href}>
        {children}
      </StyledA>
    );
};

export default Cta;
