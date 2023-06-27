import * as React from "react";
import styled from "styled-components";
import SectionTitle from "../../SectionTitle";
import Paragraph from "components/global/Paragraph";

const StyledContainer = styled.div`
  margin-top: 110px;
  @media ${(props) => props.theme.minWidth.sm} {
    margin-top: 160px;
  }
  h2 {
    margin-bottom: 30px;
    @media ${(props) => props.theme.minWidth.sm} {
      margin-bottom: 60px;
    }
  }
  aside {
    margin-top: 15px;
    font-family: "Söhne Kräftig";
    font-size: 14px;
  }
`;
const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 20px;
  @media ${(props) => props.theme.minWidth.sm} {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: ${(props) => props.theme.columnGap.mobile};
  }
  @media ${(props) => props.theme.minWidth.lg} {
    column-gap: ${(props) => props.theme.columnGap.mobile};
    grid-template-columns: repeat(4, 1fr);
  }
  @media ${(props) => props.theme.minWidth.xl} {
    grid-column-gap: ${(props) => props.theme.columnGap.desktop};
  }
`;

const VosTemoignages = () => {
  const testimoniesList = [
    {
      text: "Jean Philippe Touati et Henri de la Motte Rouge nous accompagnent depuis le début de notre Aventure. Ils ont une excellente expertise, anticipent nos problématiques et sont en plus éminemment sympathiques.",
      author: "Lorenzo Pancino, CEO, LearnyBox",
    },
    {
      text: "Le cabinet a accompagné notre plateforme de financement participatif de projets sportif lors de notre création. Sa maîtrise des enjeux juridiques et techniques des plateformes web d’intermédiation couplé a un sens opérationnel fort nous a permis de lancer sereinement notre activité. Je recommande son expertise.",
      author: "Charles Mahé, CEO, Fosburit",
    },
    {
      text: "Le cabinet nous a accompagné dans un contentieux informatique et une négociation délicate. Il dispose d’une forte expertise juridique et technique couplée à un sens de l’humain et du relationnel très appréciable.",
      author: "Jean-Marie Henry, CEO, Officentrale.fr",
    },
    {
      text: "Henri est un excellent avocat, qui est capable de comprendre parfaitement les problématiques des entrepreneurs, en particulier dans le domaine IT et internet. Son approche pragmatique, orientée résultat et économique, m’a permis de sécuriser mon business dans les meilleures conditions.",
      author: "François Solignac, CEO, Maïka Assistance",
    },
  ];

  const TestimoniesRender = testimoniesList.map((testimony, index) => {
    return (
      <div key={index}>
        <Paragraph>« {testimony.text} »</Paragraph>
        <Paragraph size="small" as="aside">
          {testimony.author}
        </Paragraph>
      </div>
    );
  });

  return (
    <StyledContainer>
      <SectionTitle title={"VOS TÉMOIGNAGES"} small />
      <StyledGrid>{TestimoniesRender}</StyledGrid>
    </StyledContainer>
  );
};

export default VosTemoignages;
