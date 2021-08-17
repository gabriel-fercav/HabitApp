import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  height: 350px;
  width: 290px;
  max-width: 400px;
  background-color: var(--gray-light);
  transform: translate(-50%, -50%);
  z-index: 2;

  > span {
    position: absolute;
    top: 15px;
    right: 15px;

    button {
      border: none;
      background-color: transparent;
    }
  }
`;

export const Form = styled.form`
  height: 100%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;

  fieldset {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    legend {
      text-align: center;
    }
  }

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
    font-family: "Roboto";
    transition: all 0.2s;
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  label {
    padding-bottom: 0.5rem;
  }
`;
