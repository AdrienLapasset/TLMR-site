import React, { useState } from "react";
import Layout from "components/Layout";
import styled from "styled-components";
import Grid from "components/global/Grid";

const StyledTitleContainer = styled.div`
  margin: 160px 0 75px;
  grid-column: 1 / span 12;
  @media ${({ theme }) => theme.minWidth.md} {
    grid-column: 4 / span 6;
    margin: 210px 0 120px;
  }
  h1 {
    font-size: 22px;
    line-height: 27px;
    margin-bottom: 40px;
    @media ${({ theme }) => theme.minWidth.md} {
      font-size: 25px;
      line-height: 30px;
    }
  }
  form {
    h2 {
      font-size: 15px;
      margin-bottom: 20px;
      @media ${({ theme }) => theme.minWidth.md} {
        font-size: 16px;
      }
    }
    input {
      width: 100%;
      height: 42px;
      border-radius: none;
      border: 0.8px solid ${({ theme }) => theme.colors.greyLight};
      padding-left: 10px;
      margin-bottom: 30px;
      &::placeholder {
        font-size: 16px;
        color: ${(props) => props.theme.colors.grey};
      }
    }
    .consent {
      display: flex;
      align-items: flex-start;
      font-size: 15px;
      line-height: 19px;
      input[type="checkbox"] {
        cursor: pointer;
        margin-right: 10px;
        width: 12px;
        height: 12px;
        position: relative;
        top: 5px;
        flex: 0 0 auto;
      }
    }
    button {
      border-radius: 100px;
      padding: 5px 20px 6px;
      font-size: 14px;
      &:hover {
        background-color: ${({ theme }) => theme.colors.greyLight};
      }
      &.primary {
        background-color: black;
        color: white;
      }
      &.cancel {
        color: black;
        background-color: ${({ theme }) => theme.colors.greyLightest};
        margin-right: 15px;
      }
    }
  }
  .mentions {
    margin-top: 20px;
    border-top: 0.8px solid ${({ theme }) => theme.colors.greyLight};
    padding-top: 7px;
    p {
      color: ${({ theme }) => theme.colors.greyLight};
      font-size: 12px;
      line-height: 16px;
    }
  }
  .first-step {
    .grid {
      @media ${({ theme }) => theme.minWidth.md} {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: ${(props) => props.theme.columnGap.desktop};
      }
    }
    button {
      margin: 40px 0 0 auto;
    }
  }
  .last-step {
    h3 {
      border-top: 0.8px solid ${({ theme }) => theme.colors.greyLight};
      color: ${({ theme }) => theme.colors.greyLight};
      width: 100%;
      padding-top: 3px;
    }
    .data {
      font-size: 25px;
      margin-top: 5px;
    }
    .en-cliquant {
      margin-top: 60px;
      border-top: 0.8px solid ${({ theme }) => theme.colors.greyLight};
      padding-top: 5px;
    }
    p {
      margin-bottom: 40px;
    }
    .btn-container {
      display: flex;
      justify-content: flex-end;
    }
  }
`;

const Paiement = () => {
  const [formStep, setFormStep] = useState(1);
  const [invoiceRef, setInvoiceRef] = useState("76E8Y879707");
  const [email, setEmail] = useState("test@test");
  const [firstName, setFirstName] = useState("testfirstName");
  const [lastName, setLastName] = useState("testlastName");
  const [ammount, setAmmount] = useState("10000");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStep(2);
  };

  const handlePayment = () => {
    const formData = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      ammount: ammount,
    };

    console.log(formData);
    // fetch("/", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //   body: new URLSearchParams(formData).toString(),
    // })
    //   .then(() => {
    //     handleModal();
    //   })
    //   .catch((error) => alert(error));
  };

  return (
    <Layout>
      <div className="pageAnimation">
        <Grid>
          <StyledTitleContainer>
            <h1>
              Réglez vos honoraires Touati La Motte Rouge Avocats en ligne
            </h1>
            <form method="post" onSubmit={handleSubmit}>
              {formStep === 1 && (
                <div className="first-step">
                  <h2>Informations</h2>
                  <div className="grid">
                    <input
                      type="text"
                      placeholder="Référence de la facture *"
                      value={invoiceRef}
                      onChange={(e) => setInvoiceRef(e.target.value)}
                      required
                    />
                    <input
                      type="email"
                      placeholder="Adresse email *"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      value={email}
                    />
                    <input
                      type="text"
                      placeholder="Nom *"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                    <input
                      type="text"
                      placeholder="Prénom *"
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      value={firstName}
                    />
                  </div>
                  <h2>Montant (€)</h2>
                  <input
                    type="text"
                    placeholder="Ex : 400 *"
                    onChange={(e) => setAmmount(e.target.value)}
                    required
                    value={ammount}
                  />
                  <div className="consent">
                    <input defaultChecked type="checkbox" required></input>
                    J’accepte que les informations saisies soient traitées
                    informatiquement par Touati La Motte Rouge Avocats et
                    l’hébergeur du présent site dans le cadre de ma demande et
                    de la relation avec Touati La Motte Rouge Avocats qui peut
                    en découler.
                  </div>
                  <div className="btn-container first-step">
                    <button className="primary" type="submit">
                      Valider
                    </button>
                  </div>
                  <div className="mentions">
                    <p>
                      Conformément à la loi n°78-17 du 6 janvier 1978 modifiée
                      relative à l’informatique, aux fichiers et aux libertés,
                      et au règlement européen 2016/679, dit Règlement Général
                      sur la Protection des Données (RGPD), vous disposez d’un
                      droit d’accès, de rectification, de suppression des
                      informations qui vous concernent. Pour plus d’information,
                      veuillez consulter notre page d’informations relatives à
                      la protection des données personnelles.
                    </p>
                  </div>
                </div>
              )}
              {formStep === 2 && (
                <div className="last-step">
                  <h2>Récapitulatif de votre paiement en ligne</h2>
                  <h3>Référence</h3>
                  <p className="data">{invoiceRef}</p>
                  <h3>Montant</h3>
                  <p className="data">{ammount}€</p>
                  <p className="en-cliquant">
                    En cliquant sur le bouton vous allez être redirigé vers
                    l’interface de paiement de la Banque.
                  </p>
                  <div className="btn-container">
                    <button
                      className="cancel"
                      type="button"
                      onClick={() => setFormStep(1)}
                    >
                      Annuler
                    </button>
                    <button
                      onClick={handlePayment}
                      className="primary"
                      type="button"
                    >
                      Payer
                    </button>
                  </div>
                </div>
              )}
            </form>
          </StyledTitleContainer>
        </Grid>
      </div>
    </Layout>
  );
};

export default Paiement;
