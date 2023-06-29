import * as React from "react";
import Layout from "components/Layout";
import Grid from "components/global/Grid";
import PageHero from "components/global/PageHero";
import styled from "styled-components";
import Seo from "components/Seo";

const StyledPageHero = styled(PageHero)`
  margin-bottom: 190px;
  @media ${({ theme }) => theme.minWidth.sm} {
    margin-bottom: 110px;
  }
  @media ${({ theme }) => theme.minWidth.md} {
    margin: 210px 0;
  }
  & > h1 {
    font-size: 25px;
    line-height: 30px;
    @media ${({ theme }) => theme.minWidth.sm} {
      font-size: 35px;
      line-height: 40px;
    }
    @media ${(props) => props.theme.minWidth.md} {
      font-size: 35px;
      line-height: 40px;
    }
  }
`;
const StyledGrid = styled(Grid)`
  border-top: ${({ theme }) => theme.border.black};
  padding-top: 10px;
  margin-top: 80px;
  @media ${({ theme }) => theme.minWidth.sm} {
    padding-top: 20px;
    display: block;
    margin-top: 120px;
  }
  @media ${({ theme }) => theme.minWidth.md} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-top: 15px;
    margin-top: 100px;
  }
  @media ${({ theme }) => theme.minWidth.lg} {
    margin-top: 110px;
  }
  aside {
    font-size: 80px;
    font-family: "SöhneBreit Buch", sans-serif;
    margin-bottom: 37px;
    line-height: 60px;
    @media ${({ theme }) => theme.minWidth.sm} {
      margin-bottom: 60px;
    }
    @media ${({ theme }) => theme.minWidth.md} {
      font-size: 80px;
      line-height: 60px;
    }
    @media ${({ theme }) => theme.minWidth.lg} {
      /* grid-column: 1/2; */
      font-size: 120px;
      line-height: 90px;
    }
  }
  h2 {
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 15px;
    @media ${({ theme }) => theme.minWidth.md} {
      font-size: 25px;
      line-height: auto;
    }
  }
  h3,
  p,
  ul,
  a {
    font-size: 15px;
    @media ${({ theme }) => theme.minWidth.md} {
      font-size: 16px;
    }
  }
  p,
  ul {
    color: ${({ theme }) => theme.colors.grey};
    margin-bottom: 15px;
  }
  ul ul {
    padding-left: 10px;
  }
  a {
    text-decoration: underline;
    display: inline-block;
  }
  .textBlack {
    p {
      color: ${({ theme }) => theme.colors.black};
    }
  }
`;

const MentionsLegales = () => {
  return (
    <>
      <Seo pageTitle="Engagements sociétaux" />
      <Layout>
        <div className="pageAnimation">
          <StyledPageHero
            title="ENGAGEMENTS SOCIÉTAUX 2023 DU CABINET TOUATI LA MOTTE ROUGE AVOCATS"
            firstParagraph="Cabinet au cœur de l’innovation, nous avons pour ambition de rendre l’excellence juridique accessible. Pour rester en accord avec nos valeurs, nous pensons que des efforts personnels et collectifs, alignés avec un souci de contribuer à un monde plus harmonieux et équilibré sont indispensables. Ainsi, nous nous engageons pour contribuer et favoriser des pratiques plus justes et éthiques de la part des membres du cabinet, de nos clients et partenaires."
          />
          <StyledGrid>
            <aside>1</aside>
            <div>
              <h2>Engagements au sein du cabinet</h2>
              <p>
                Le cabinet veille aux bonnes conditions de travail de l’ensemble
                de ses membres et s’engage sur les actions suivantes :
                <ul>
                  <li>
                    – Cultiver la bienveillance et les relations respectueuses,
                    harmonieuses et solidaires au sein du cabinet ;
                  </li>
                  <li>
                    – Favoriser le bien-être et l’équilibre entre vie privée et
                    vie professionnelle des membres du cabinet (flexibilité du
                    temps de travail, télétravail) ;
                  </li>
                  <li>
                    – Accompagner les collaborateurs et collaboratrices dans
                    leur évolution professionnelle et promouvoir la formation et
                    la transmission des savoir-faire (entretiens annuels avec
                    chaque collaborateur et collaboratrice du cabinet, accueil
                    et formation des nouveaux arrivants) ;
                  </li>
                  <li>
                    – Cultiver l’entrepreneuriat, l’innovation et la créativité
                    ;
                  </li>
                  <li>
                    – Donner des possibilités d’accès facilité à la pratique du
                    sport et de l’art comme vecteur de développement individuel
                    ;
                  </li>
                  <li>
                    – Implication des membres du cabinet dans la prise de
                    décisions relative à l’organisation et à la vie du cabinet.
                  </li>
                </ul>
              </p>
            </div>
          </StyledGrid>
          <StyledGrid>
            <aside>2</aside>
            <div>
              <h2> Engagements en matière environnementale</h2>
              <p>
                Le cabinet veille à limiter autant que possible l’empreinte
                environnementale de son activité par la mise en place des
                actions suivantes :
              </p>
              <ul>
                <li>
                  – Réduction des consommations de matières premières, notamment
                  en cultivant une approche 0 impression ;
                </li>
                <li>
                  – Mise en œuvre d’une politique d’achats responsables
                  (limitation aux équipements nécessaires, achat d’équipements
                  reconditionnés et/ou respectueux de l’environnement) ;
                </li>
                <li>
                  – Mise en place au sein des nouveaux locaux (d’une politique
                  de tri et valorisation des déchets (emballages, consommables…)
                  ;
                </li>
                <li>
                  – Incitation à l’utilisation de modes de transport à faible
                  empreinte carbone (transports en commun, vélo) ;
                </li>
                <li>
                  – Accompagnement de startups de l’environnement : 2 Tonnes,
                  Reforestaction ;
                </li>
                <li>
                  – Envisager des mesures de l’impact environnemental de
                  l’activité du cabinet (bilan carbone, audit énergétique).
                </li>
              </ul>
            </div>
          </StyledGrid>
          <StyledGrid>
            <aside>3</aside>
            <div>
              <h2>Activités ProBono et Dons</h2>
              <p>
                Le cabinet s’engage à mettre des ressources au profit
                d’associations œuvrant pour des publics défavorisés, notamment
                par la mise en place des actions suivantes :
                <ul>
                  <li>
                    –&nbsp;
                    <a
                      href="https://www.infolawyers.fr/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Partenariat Infolawyers / Droits d’urgence
                    </a>
                    &nbsp;:
                    <ul>
                      <li>
                        • 1% des bénéfices d’Infolawyers (Legaltech du cabinet
                        TLMR Avocats) sont reversés sous forme de dons des
                        associées à l’association Droits d’urgence, qui lutte
                        pour faire valoir les droits des personnes en situation
                        d’exclusion sociale et de vulnérabilité ;
                      </li>
                      <li>
                        • Organisation d’une webconférence avec Droit direct la
                        Plateforme de Droit d’urgence pour les victimes de
                        harcèlement en ligne
                      </li>
                    </ul>
                  </li>
                  <li>
                    – Encouragement des actions pro bono des collaborateurs et
                    collaboratrices et défense des droits des plus démunis
                    (défense pénale d’urgence) ;
                  </li>
                  <li>
                    – Accompagnement juridique pro bono de&nbsp;
                    <a
                      href="https://www.ose-association.org/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      l’Association Ose !
                    </a>
                    &nbsp;dont l’objectif est d’aider les femmes atteintes d’un
                    cancer du sein métastatique.
                  </li>
                </ul>
              </p>
            </div>
          </StyledGrid>
          <StyledGrid>
            <aside>4</aside>
            <div>
              <h2>
                Engagements en matière d’égalité des chances et de lutte contre
                les discriminations
              </h2>
              <p>
                Le cabinet a à cœur la lutte contre les discriminations et
                s’engage à promouvoir l’égalité des chances par la mise en place
                des actions suivantes :
                <ul>
                  <li>
                    – Accueil annuel d’un stagiaire de troisième issu d’un
                    établissement situé en zone d’éducation prioritaire pour un
                    stage d’une semaine de présentation du métier d’avocat ;
                  </li>
                  <li>
                    – Accompagnement juridique de l’Association Violons Prodiges
                    ayant pour objet de permettre l’accès et la diffusion du
                    violon comme objet, art, technique, musique auprès de tous
                    publics et de mettre à disposition gracieusement pour une
                    durée déterminée des violons modernes d’exception auprès de
                    violonistes sélectionnés pour leur mérite et leur talent.
                  </li>
                </ul>
              </p>
            </div>
          </StyledGrid>
          <StyledGrid>
            <aside>5</aside>
            <div className="textBlack">
              <p>
                Par ailleurs, dans un souci de rayonnement, le cabinet s’engage
                à contribuer à faire connaître ses engagements et à demander à
                ses partenaires, fournisseurs et prestataires de communiquer sur
                leurs engagements RSE et d’en faire un critère de sélection.
              </p>
              <p>
                Enfin, le cabinet est toujours à l’écoute d’initiatives et
                propositions de partenariat avec des organisations ou des
                associations œuvrant pour la préservation de la santé, de
                l’environnement, l’égalité des chances et la défense des droits
                des personnes les plus démunies.
              </p>
              <p>
                Pour plus d’informations sur les engagements sociétaux du
                cabinet Touati La Motte Rouge Avocats, ou pour toute autre
                demande (partenariats, intervention…) vous pouvez nous contacter
                à l’adresse suivante :&nbsp;
                <a href="mailto:contact@tlmr-avocats.com">
                  contact@tlmr-avocats.com
                </a>
                .
              </p>
            </div>
          </StyledGrid>
        </div>
      </Layout>
    </>
  );
};

export default MentionsLegales;
