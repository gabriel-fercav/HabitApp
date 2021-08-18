import styled from "styled-components";

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-basis: 90%;

  div + div {
    margin: 0.5rem 0;
  }
`;

export const Content = styled.div`
  svg {
    margin-right: 0.5rem;
  }
  span {
    span {
      font-weight: bold;
    }
  }
`;

export const Card = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.95rem;
  background-color: var(--black);
  color: #ffff;
  box-shadow: 10px 10px 4px 0px rgba(0, 0, 0, 0.5);
  margin: 0.5rem;
  padding: 1rem;

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
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0.5rem;
  flex-basis: 10%;
`;
