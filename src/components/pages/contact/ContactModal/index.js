import React, { useState } from "react";
import styled from "styled-components";
import Paragraph from "components/global/Paragraph";
import Grid from "components/global/Grid";
import croix from "assets/icons/croix.svg";

const StyledContainer = styled.div`
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  overflow-y: scroll;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: all 0.4s ${(props) => props.theme.baseCubicBezier};
  z-index: 3;
  @media ${(props) => props.theme.minWidth.sm} {
    padding: 24px;
  }
  @media ${(props) => props.theme.minWidth.md} {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
`;

const StyledModal = styled.div`
  overflow-y: scroll;
  background-color: white;
  width: 100%;
  border-radius: 9px;
  padding: 20px;
  @media ${(props) => props.theme.minWidth.md} {
    padding: 45px;

    max-height: 100vh;
    width: 850px;
  }
  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    button {
      cursor: pointer;
      margin-left: 20px;
    }
  }
  form {
    h3 {
      margin-bottom: 10px;
    }
    input[type="text"],
    input[type="email"],
    textarea {
      height: 42px;
      border-radius: none;
      border: 1px solid ${({ theme }) => theme.colors.greyLight};
      padding-left: 10px;
      &::placeholder {
        font-size: 16px;
        color: ${(props) => props.theme.colors.grey};
      }
    }

    textarea {
      width: 100%;
      padding: 10px;
      height: auto;
      resize: none;
    }
    .consent {
      display: flex;
      align-items: flex-start;
      margin-top: 20px;
      input[type="checkbox"] {
        cursor: pointer;
        margin-right: 10px;
        width: 12px;
        height: 12px;
        position: relative;
        top: 4px;
      }
    }
    button[type="submit"] {
      background-color: black;
      color: white;
      border-radius: 100px;
      margin: 30px 0 0 auto;
      padding: 5px 20px 6px;
      font-size: 14px;
      &:hover {
        background-color: ${({ theme }) => theme.colors.greyLight};
      }
    }
  }
  .mentions {
    margin-top: 20px;
    border-top: 1px solid ${({ theme }) => theme.colors.greyLight};
    padding-top: 5px;
    p {
      color: ${({ theme }) => theme.colors.greyLight};
      font-size: 12px;
    }
  }
`;
const StyledGrid = styled(Grid)`
  margin-bottom: 40px;
  grid-template-columns: repeat(2, 1fr);
  input {
    margin-bottom: 10px;
    width: 100%;
    @media ${(props) => props.theme.minWidth.sm} {
      margin-bottom: 0;
    }
  }
`;

const ContactModal = ({ isVisible, handleModal }) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      "form-name": event.target.getAttribute("name"),
      subject: "[tlmr-avocats.com] Nouvelle prise de contact",
      Email: email,
      Téléphone: phone,
      Message: message,
    };

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        handleModal();
      })
      .catch((error) => alert(error));
  };

  return (
    <StyledContainer isVisible={isVisible}>
      <StyledModal>
        <header>
          <Paragraph as="h2" size="xxl">
            Nous vous remercions d’utiliser le formulaire de contact
          </Paragraph>
          <button type="button" onClick={handleModal}>
            <img src={croix} alt="" />
          </button>
        </header>
        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <input
            type="hidden"
            name="subject"
            value="[tlmr-avocats.com] Nouvelle prise de contact"
          />
          <Paragraph as="h3">Informations</Paragraph>
          <StyledGrid>
            <input
              type="email"
              name="Email"
              placeholder="Adresse email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="text"
              name="Téléphone"
              placeholder="Numéro de téléphone"
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </StyledGrid>
          <Paragraph as="h3">Votre message</Paragraph>
          <textarea
            name="Message"
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Indiquez précisément votre problématique"
            rows="10"
          />
          <div className="consent">
            <input type="checkbox" required></input>
            <Paragraph as="label">
              En cochant la case ci-contre, j’accepte de recevoir des
              informations et offres du cabinet Touati La Motte Rouge Avocats
              (veille juridique, actualités, newsletter, formations).
            </Paragraph>
          </div>
          <button type="submit">Envoyer</button>
        </form>
        <div className="mentions">
          <p>
            Les données recueillies sont traitées de manière sécurisée
            conformément à la politique de confidentialité. À tout moment, vous
            pouvez exercer votre droit d’accès, de rectification, d’effacement,
            d’opposition, de limitation, aux données vous concernant en nous
            contactant par le biais du présent formulaire.
          </p>
        </div>
      </StyledModal>
    </StyledContainer>
  );
};

export default ContactModal;
