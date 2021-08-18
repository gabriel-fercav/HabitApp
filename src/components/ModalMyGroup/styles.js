import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  height: 480px;
  width: 100%;
  max-width: 650px;
  transform: translate(-50%, -50%);
  background-color: var(--gray-light);
  z-index: 2;

  div {
    text-align: center;
    width: 100%;
    padding: 0.5rem 0;
  }

  span {
    position: absolute;
    top: 15px;
    right: 15px;

    button {
      background-color: transparent;
      border: none;
    }
  }
`;

export const Content = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  h2 {
    font-size: 1.5rem;
    color: var(--orange);
    text-shadow: 2px 2px var(--white);

    @media all and (min-width: 1024px) {
      font-size: 2.2rem;
    }
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  /*height: 100%;*/
`;

export const Button = styled.button`
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
`;
