import styled, { css } from "styled-components";
export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--gray-light);
  height: 85%;
  width: 80%;
  z-index: 2;

  > button {
    position: absolute;
    top: 15px;
    right: 20px;
    background-color: transparent;
    border: none;
  }

  svg {
  }

  form {
    height: 100%;
    width: 100%;
    max-width: 550px;
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    button {
      width: 85%;
      height: 45px;
      background-color: #ff6109;
      color: white;
      border: 0;
      border-radius: 10px;
      font-weight: 800;
      font-size: 1.2rem;
      margin-bottom: 10px;
      margin-top: 10px;
      font-family: "Roboto";
      transition: all 0.2s;
    }
  }
`;

export const Informations = styled.div`
  width: 100%;
  p {
    color: var(--gray);
    font-size: 17px;
    position: inherit;
  }
`;

export const ContainerInput = styled.div`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  label {
    padding-right: 0.5rem;
  }

  input {
    ${(props) =>
      props.error &&
      css`
        border-color: #f00;
      `}
    /*border-color: ${(props) => (!!props.error ? "#000" : "#F00")};*/
    width: 40px;
  }
`;
