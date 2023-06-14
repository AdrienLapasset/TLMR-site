import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Paragraph from "components/global/Paragraph";
import croix from "assets/icons/croix.svg";
// import assistant from "./assistant.html";
import ReactHtmlParser from "react-html-parser";

const StyledContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  overflow-y: scroll;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: all ${({ theme }) => theme.transitionTime}s
    ${({ theme }) => theme.baseCubicBezier};
  z-index: 2;
  @media ${(props) => props.theme.minWidth.md} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const StyledModal = styled.div`
  max-height: 100vh;
  background-color: white;
  width: 100%;
  border-radius: 9px;
  overflow-y: scroll;
  @media ${(props) => props.theme.minWidth.md} {
    width: 850px;
  }
  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    padding: 45px 45px 0 45px;
    button {
      cursor: pointer;
      margin-left: 20px;
    }
  }
  iframe {
    width: 100%;
    display: block;
    border: 0;
    padding: 0 10px 45px;
    height: 100vh;
    @media ${(props) => props.theme.minWidth.sm} {
      height: 650px;
      padding: 0 10px;
    }
  }
`;

const SeraphinLegalModal = ({ isVisible, handleModal }) => {
  // const [seraphinLegal, setSeraphinLegal] = useState(null);

  // useEffect(() => {
  //   const assistantSavedCode = new URLSearchParams(window.location.search).get(
  //     "assistantSavedCode"
  //   );
  //   const url =
  //     "https://assistant.api.seraphin.legal/api/v2/Assistant/b41c8e76-dace-4c7e-aa5a-1c8f4a906cb3/37df2c0b-a144-4dbb-ae22-a758e19de55e/Viewer?lang=fr";
  //   const options = {
  //     method: "POST",
  //     headers: {
  //       assistantSavedCode: assistantSavedCode,
  //     },
  //   };
  //   fetch(url, options)
  //     .then((response) => response.text())
  //     .then((data) => {
  //       setSeraphinLegal(data);
  //     });
  // }, []);

  const assistantString =
    '<div id="Assistant"></div><script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.3.1.min.js"></script><script type="text/javascript">$.ajax({headers: {assistantSavedCode: new URLSearchParams(window.location.search).get("assistantSavedCode"),},url: "https://assistant.api.seraphin.legal/api/v2/Assistant/b41c8e76-dace-4c7e-aa5a-1c8f4a906cb3/37df2c0b-a144-4dbb-ae22-a758e19de55e/Viewer?lang=fr",method: "POST",type: "POST",}).done(function (data) {$("#Assistant").html(data);run();});</script>';

  return (
    <StyledContainer isVisible={isVisible}>
      <StyledModal>
        <header>
          <Paragraph as="h2" size="xxl">
            Nous vous remercions d’utiliser le formulaire
          </Paragraph>
          <button type="button" onClick={handleModal}>
            <img src={croix} alt="" />
          </button>
        </header>
        {/* {ReactHtmlParser(assistantString)} */}
        {/* <div
          dangerouslySetInnerHTML={{
            __html: '<script type="text/javascript">run()"</script>',
          }}
        /> */}
        <iframe src="assistant.html"></iframe>
      </StyledModal>
    </StyledContainer>
  );
};

export default SeraphinLegalModal;
