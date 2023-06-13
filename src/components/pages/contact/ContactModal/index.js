import React, { useState } from "react";
import styled from "styled-components";
// import Paragraph from "components/global/Paragraph";
import croix from "assets/icons/croix.svg";

const StyledContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  overflow-y: scroll;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  /* Transition */
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: all 0.4s ${(props) => props.theme.baseCubicBezier};
`;

const StyledModal = styled.div`
  background-color: white;
  width: 100%;
  text-align: center;
  margin: 15px 0;
  width: 850px;
  border-radius: 9px;
  padding: 45px;
  header {
    display: flex;
    button {
      cursor: pointer;
    }
  }
  form {
  }
`;

const ContactModal = ({ isVisible, handleModal }) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      "form-name": event.target.getAttribute("name"),
      subject: "[tlmr-avocats.com] Nouvelle prise de contact",
      Email: email,
      "Numéro de téléphone": phone,
      Message: message,
    };
    console.log(encode(formData));

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(formData),
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => alert(error));
  };

  return (
    <StyledContainer isVisible={isVisible}>
      <StyledModal>
        {/* <Paragraph as="h3" size="xxl">
          Nous vous remercions d’utiliser le formulaire de contact
        </Paragraph> */}
        <header>
          <h3>Nous vous remercions d’utiliser le formulaire de contact</h3>
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
          <div>Informations</div>
          <input
            type="email"
            name="email"
            placeholder="Adresse email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Numéro de téléphone"
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <button type="submit">Envoyer</button>
        </form>
      </StyledModal>
    </StyledContainer>
  );
};

export default ContactModal;
