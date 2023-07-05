import * as React from "react";
import Layout from "components/Layout";
import Title from "components/global/Title";
import Grid from "components/global/Grid";
import styled from "styled-components";
import Seo from "components/Seo";

const StyledTitleContainer = styled.div`
  margin: 160px 0 75px;
  @media ${(props) => props.theme.minWidth.sm} {
    margin: 210px 0 120px;
  }
`;
const StyledTitle = styled(Title)`
  margin: 0;
  display: flex;
  line-height: 30px;
  font-size: 25px;
  @media ${(props) => props.theme.minWidth.sm} {
    font-size: 32px;
    line-height: 38px;
  }
  @media ${(props) => props.theme.minWidth.md} {
    font-size: 35px;
    line-height: 40px;
  }
  @media ${(props) => props.theme.minWidth.lg} {
    font-size: 40px;
    line-height: 45px;
  }
  @media ${(props) => props.theme.minWidth.xl} {
    font-size: 50px;
    line-height: 50px;
  }
  span {
    flex: 0 0 40px;
    @media ${(props) => props.theme.minWidth.sm} {
      flex: 0 0 70px;
    }
  }
`;
const StyledGrid = styled(Grid)`
  border-top: ${({ theme }) => theme.border.black};
  padding-top: 10px;
  margin-top: 110px;
  @media ${({ theme }) => theme.minWidth.sm} {
    display: block;
    margin-top: 120px;
    padding-top: 20px;
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
      font-size: 100px;
      line-height: 60px;
    }
    @media ${({ theme }) => theme.minWidth.xl} {
      font-size: 120px;
      line-height: 90px;
    }
  }
  h2 {
    font-size: 20px;
    margin-bottom: 15px;
    @media ${({ theme }) => theme.minWidth.md} {
      font-size: 25px;
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
  a {
    color: ${({ theme }) => theme.colors.grey};
    text-decoration: underline;
    display: inline-block;
  }
`;

const MentionsLegales = () => {
  return (
    <>
      <Seo pageTitle="Mentions légales" />
      <Layout>
        <div className="pageAnimation">
          <StyledTitleContainer>
            <StyledTitle size="expertise">
              <span>1</span>MENTIONS LÉGALES
            </StyledTitle>
            <StyledTitle size="expertise">
              <span>2</span>POLITIQUE DE CONFIDENTIALITÉ
            </StyledTitle>
            <StyledTitle size="expertise">
              <span>3</span>COOKIES
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
                enregistrée sous le numéro Siret 837 987 387, dont le siège
                social est situé 77 boulevard Malesherbes à Paris 75008
                (ci-après désigné « le Cabinet »).
              </p>
              <p>
                Les directeurs de publication sont Jean-Philippe Touati et Henri
                de La Motte Rouge, Avocats. Ils peuvent être contactés grâce aux
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
              <p id="politique-de-confidentialite">
                Le Cabinet est inscrit au Barreau de Paris. Le Site est hébergé
                par la société OVH, SAS au capital de 10.000 euros, immatriculée
                au R.C.S de Roubaix sous le n° 424 761 419 et dont le siège
                social est situé 2 rue Kellerman à Roubaix (59100). Conformément
                aux dispositions des articles L.612-1 et suivants du Code de la
                consommation, vous avez la possibilité, en cas de litige, de
                recourir gratuitement au Médiateur de la consommation auprès du
                Conseil National des Barreaux (CNB) dont les coordonnées sont
                les suivantes : CNB, Médiateur à la consommation, 180 boulevard
                Haussmann, 75010 PARIS.
              </p>
            </div>
          </StyledGrid>
          <StyledGrid>
            <aside>2</aside>
            <div>
              <h2>Politique de confidentialité </h2>
              <p>
                La Politique de confidentialité des données du site
                tlmr-avocats.com est prise en application des articles 13 et 14
                du Règlement européen Général sur la Protection des Données
                (2016/679) et de l’article 32 de la loi Informatique et Libertés
                du 6 janvier 1978.
              </p>
              <h3>Nature des données collectées</h3>
              <p>
                Dans le cadre de l’exploitation du Site, le Cabinet est
                susceptible de collecter les données suivantes vous
                concernant en tant que responsable de traitement :
                <ul>
                  <li>– Nom et prénom</li>
                  <li>– Adresse électronique</li>
                  <li>– Numéro de téléphone</li>
                  <li>– Adresse IP</li>
                </ul>
              </p>
              <h3>Finalité des traitements</h3>
              <p>
                Dans le cadre de l’exploitation du Site, le traitement de
                données personnelles a pour finalité la gestion des clients, la
                sollicitation personnalisée, les opérations de fidélisation,
                l’élaboration de statistiques, la gestion des demandes de droit
                d’accès, de rectification et d’opposition, la gestion des avis
                des personnes sur le Cabinet. Plus globalement, dans le cadre du
                traitement d’un dossier, qu’il s’agisse d’un dossier juridique,
                judiciaire ou d’arbitrage, le Cabinet veille particulièrement à
                l’intégrité de vos données aux fins de protection de votre vie
                privée, conformément à ses obligations déontologiques.
              </p>
              <h3>Droits des utilisateurs du Site</h3>
              <p>
                Pour l’ensemble de vos données personnelles, vous pouvez exercer
                les droits suivants auprès du responsable de traitement, le
                Cabinet, dans les limites prévues par la réglementation
                applicable.
                <ul>
                  <li>
                    – Droit d’accès aux données à caractère personnel fournies ;
                  </li>
                  <li>
                    – Droit de demander la rectification ou l’effacement de
                    celles-ci ;
                  </li>
                  <li>
                    – Droit de demander une limitation du traitement relatif à
                    sa personne ;
                  </li>
                  <li>
                    – Droit de s’opposer au traitement et de retirer son
                    consentement à tout moment ;
                  </li>
                  <li>– Droit à la portabilité des données ;</li>
                </ul>
                Dans l’hypothèse où vous considèreriez que vos données n’ont pas
                été protégées, vous disposez également du droit d’introduire une
                réclamation auprès d’une autorité de contrôle (CNIL).
              </p>
              <h3>Communication des données personnelles à des tiers</h3>
              <p>
                Sur la base des obligations légales, vos données personnelles
                pourront être divulguées en application d’une loi, d’un
                règlement ou en vertu d’une décision d’une autorité
                réglementaire ou judiciaire compétente. De manière générale,
                nous nous engageons à nous conformer à toutes les règles légales
                qui pourraient empêcher, limiter ou réglementer la diffusion
                d’informations ou de données.
              </p>
              <h3>Durée de conservation des données</h3>
              <p>
                Vos données sont traitées et conservées par le cabinet dès votre
                prise d’attache, y compris pour le simple établissement d’un
                devis ou lors de la prise de rendez-vous. Elles ne sont pas
                conservées au-delà du temps nécessaire à la réalisation des
                finalités décrites dans la présente Politique. En cas de
                proposition de rendez-vous du Cabinet non suivie, ou d’échanges
                électroniques auxquels il ne sera pas donné suite, l’ensemble
                des données personnelles liées au dossier collectées fera
                l’objet d’une suppression dans un délai maximal de 25 semaines
                aux fins de protection de la vie privée. Les données
                d’identification (noms, prénoms et adresse mail et téléphone)
                pourront être conservées pendant une période de 3 années aux
                fins de sollicitation personnalisée après le dernier contact.
                Dans tous les autres cas, les données seront conservées pendant
                une durée maximale de 5 années à compter du dernier acte
                juridique ou judiciaire réalisé par le Cabinet sauf prescription
                particulière. Au-delà, elles pourront être anonymisées ou
                archivées à des fins statistiques et probatoires.
              </p>
              <h3>Transfert des données en dehors de l’Union Européenne</h3>
              <p>
                Le Cabinet s’engage à respecter la réglementation applicable
                relative aux transferts des données vers des pays étrangers
                offrant un niveau de protection équivalent, et à obtenir une
                autorisation auprès de la CNIL pour procéder à un tel transfert
                dans le cas où le pays destinataire ne disposerait pas d’un tel
                niveau de protection.
              </p>
              <h3>Sécurité des données</h3>
              <p>
                Le Cabinet met en œuvre toutes les mesures techniques et
                organisationnelles appropriées grâce à des moyens de
                sécurisation physiques et logistiques afin de garantir un niveau
                de sécurité adapté au regard des risques d’accès accidentels,
                non autorisés ou illégaux, de divulgation, d’altération, de
                perte ou encore de destruction des données personnelles vous
                concernant.
              </p>
              <h3>Demandes</h3>
              <p id="cookies">
                Pour toute demande concernant la politique de protection des
                données des utilisateur du Site, et pour exercer vos droits vous
                pouvez contacter le Cabinet à l’adresse&nbsp;
                <a href="mailto:contact@tlmr-avocats.com">
                  contact@tlmr-avocats.com
                </a>
                .
              </p>
            </div>
          </StyledGrid>
          <StyledGrid>
            <aside>3</aside>
            <div>
              <h2>Cookies</h2>
              <h3>Durée de conservation des cookies</h3>
              <p>
                Conformément aux recommandations de la CNIL, la durée maximale
                de conservation des cookies est de 13 mois au maximum après leur
                premier dépôt dans le terminal de l’utilisateur, tout comme la
                durée de la validité du consentement de l’utilisateur à
                l’utilisation de ces cookies. La durée de vie des cookies n’est
                pas prolongée à chaque visite. Le consentement de l’utilisateur
                devra donc être renouvelé à l’issue de ce délai.
              </p>
              <h3>Finalité des cookies</h3>
              <p>
                Les cookies peuvent être utilisés pour des fins statistiques
                notamment pour optimiser les services rendus à l’utilisateur du
                site, à partir du traitement des informations concernant la
                fréquence d’accès, la personnalisation des pages ainsi que les
                opérations réalisées et les informations consultées.
                <br /> Vous êtes informé que le Cabinet est susceptible de
                déposer des cookies sur votre terminal. Le cookie enregistre des
                informations relatives à la navigation sur le service (les pages
                que vous avez consultées, la date et l’heure de la
                consultation…) que nous pourrons lire lors de vos visites
                ultérieures.
              </p>
              <h3>
                Droit de l’Utilisateur de refuser les cookies, la désactivation
                entraînant un fonctionnement dégradé du service
              </h3>
              <p>
                Vous reconnaissez avoir été informé que le Cabinet peut avoir
                recours à des cookies, et l’y autorisez. Si vous ne souhaitez
                pas que des cookies soient utilisés sur votre terminal, la
                plupart des navigateurs vous permettent de désactiver les
                cookies en passant par les options de réglage. Toutefois, vous
                êtes informé que certains services sont susceptibles de ne plus
                fonctionner correctement.
              </p>
              <h3>
                Association possible des cookies avec des données personnelles
                pour permettre le fonctionnement du service
              </h3>
              <p>
                Le Cabinet peut être amené à recueillir des informations de
                navigation via l’utilisation de cookies.
              </p>
              <h3>Demandes</h3>
              <p>
                Pour toute demande concernant les cookies, vous pouvez contacter
                le Cabinet à l’adresse&nbsp;
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
