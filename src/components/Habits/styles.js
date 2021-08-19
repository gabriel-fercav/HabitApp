import styled from "styled-components";

export const ContainerText = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-basis: 90%;

  div + div {
    margin: 0.5rem 0;
  }
`;

export const Content = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;

  svg {
    margin-right: 0.5rem;
  }
  span {
    > span {
      font-weight: bold;
    }

    button {
      margin-left: 0.5rem;
      background-color: transparent;
      border: none;
    }
  }
`;

export const Card = styled.div`
  min-width: 90%;
  height: 300px;
  display: flex;
  position: relative;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: space-between;
  border-radius: 0.95rem;
  background-color: var(--black);
  color: #ffff;
  box-shadow: 10px 10px 4px 0px rgba(0, 0, 0, 0.5);
  margin: 10px;
  padding: 1.5rem;

  @media all and (min-width: 768px) {
    width: 80%;
  }
`;

export const Title = styled.span`
  font-size: 30px;
  font-weight: 800;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
`;

export const ContainerButton = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row-reverse;
  width: 88%;
  padding-bottom: 1rem;

  button {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    background-color: rgb(25, 25, 25);
    border-bottom: 0px solid;
    border: 0;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    transition: 0.3s all;
  }

  button:hover {
    background-color: rgb(45, 45, 45);
  }
`;

export const Input = styled.input`
  width: 50px;
`;
