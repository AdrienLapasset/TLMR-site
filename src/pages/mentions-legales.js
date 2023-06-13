import * as React from "react";
import Layout from "components/Layout";
import Title from "components/global/Title";
import Grid from "components/global/Grid";
import styled from "styled-components";

const StyledTitleContainer = styled.div`
  margin: 100px 0;
`;
const StyledTitle = styled(Title)`
  margin: 0;
  display: flex;
  span {
    flex: 0 0 40px;
  }
`;
const StyledGrid = styled(Grid)`
  border-top: ${({ theme }) => theme.border.black};
  padding-top: 10px;
  @media ${({ theme }) => theme.minWidth.sm} {
    display: block;
  }
  @media ${({ theme }) => theme.minWidth.md} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-top: 15px;
  }
  aside {
    font-size: 80px;
    font-family: "SöhneBreit Buch", sans-serif;
    margin-bottom: 40px;
    line-height: 60px;
    @media ${({ theme }) => theme.minWidth.md} {
      grid-column: 1/2;
    }
  }
  h2 {
    font-size: 20px;
    margin-bottom: 15px;
  }
  p,
  ul {
    color: ${({ theme }) => theme.colors.grey};
    margin-bottom: 15px;
    font-size: 15px;
  }
  a {
    color: ${({ theme }) => theme.colors.grey};
    text-decoration: underline;
    font-size: 15px;
  }
`;

const MentionsLegales = () => {
  return (
    <Layout>
      <StyledTitleContainer>
        <StyledTitle size="sm">
          <span>1</span>MENTIONS LÉGALES
        </StyledTitle>
        <StyledTitle size="sm">
          <span>2</span> POLITIQUE DE CONFIDENTIALITÉ
        </StyledTitle>
        <StyledTitle size="sm">
          <span>3</span> COOKIES
        </StyledTitle>
      </StyledTitleContainer>

      <StyledGrid>
        <aside>1</aside>
        <div>
          <h2>Mentions légales </h2>
          <p>
            Le site www.tlmr-avocats.com (ci-après désigné « le Site ») est
            édité par le cabinet Touati La Motte Rouge Avocats, association
            d’avocats à responsabilité professionnelle individuelle (AARPI)
            enregistrée sous le numéro Siret 837 987 387, dont le siège social
            est situé 77 boulevard Malesherbes à Paris 75008 (ci-après désigné
            « le Cabinet »).
          </p>
          <p>
            Les directeurs de publication sont Jean-Philippe Touati et Henri de
            La Motte Rouge, Avocats. Ils peuvent être contactés grâce aux
            coordonnées suivantes :
            <ul>
              <li>Cabinet TLMR</li>
              <li>69 place Félix Lobligeois</li>
              <li>75017 Paris</li>
              <li>
                <a href="tel:+33178766000">01 88 32 63 75</a>
              </li>
              <li>
                <a href="mailto:contact@tlmr-avocats.com">
                  contact@tlmr-avocats.com
                </a>
              </li>
            </ul>
          </p>
          <p>
            Le Cabinet est inscrit au Barreau de Paris. Le Site est hébergé par
            la société OVH, SAS au capital de 10.000 euros, immatriculée au
            R.C.S de Roubaix sous le n° 424 761 419 et dont le siège social est
            situé 2 rue Kellerman à Roubaix (59100). Conformément aux
            dispositions des articles L.612-1 et suivants du Code de la
            consommation, vous avez la possibilité, en cas de litige, de
            recourir gratuitement au Médiateur de la consommation auprès du
            Conseil National des Barreaux (CNB) dont les coordonnées sont les
            suivantes : CNB, Médiateur à la consommation, 180 boulevard
            Haussmann, 75010 PARIS.
          </p>
        </div>
      </StyledGrid>
    </Layout>
  );
};

export default MentionsLegales;
