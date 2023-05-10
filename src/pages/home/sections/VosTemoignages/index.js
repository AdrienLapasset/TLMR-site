import * as React from "react";
import styled from "styled-components";
import SectionTitle from "../../SectionTitle";

const StyledContainer = styled.div`
  margin-top: 160px;
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
    column-gap: 20px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${(props) => props.theme.minWidth.lg} {
    column-gap: 30px;
    grid-template-columns: repeat(4, 1fr);
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
      author: "Charles Mahé, CEO, Fosburit",
    },
    {
      text: "Henri est un excellent avocat, qui est capable de comprendre parfaitement les problématiques des entrepreneurs, en particulier dans le domaine IT et internet. Son approche pragmatique, orientée résultat et économique, m’a permis de sécuriser mon business dans les meilleures conditions.",
      author: "Charles Mahé, CEO, Fosburit",
    },
  ];

  const TestimoniesRender = testimoniesList.map((testimony) => {
    return (
      <div>
        <p>« {testimony.text} »</p>
        <aside>{testimony.author}</aside>
      </div>
    );
  });

  return (
    <StyledContainer>
      <SectionTitle title={"VOS TÉMOIGNAGES"} />
      <StyledGrid>{TestimoniesRender}</StyledGrid>
    </StyledContainer>
  );
};

export default VosTemoignages;
