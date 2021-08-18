import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  background-color: var(--gray);
  border-radius: 8px;
  margin: 5px;

  > div + div {
    /*margin: 10px;*/
  }

  @media (min-width: 768px) {
    width: 100%;
    height: 100vh;
  }

  @media (min-width: 1024px) {
    height: 86vh;
    width: 35vw;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  > p {
    font-size: 25px;
    font-weight: bolder;
    color: #ff6109;
    text-align: left;
    width: 80%;
    padding-bottom: 1rem;
  }
`;

export const ContainerCard = styled.div`
  overflow-y: scroll;
  /*padding-top: 1.5rem;*/

  @media all and (min-width: 768px) {
    overflow-y: scroll;
  }
  height: 75vh;
  width: 100%;
`;

export const Titulo = styled.div``;

export const AddIcon = styled.span`
  position: absolute;
  top: 10px;
  right: 20px;

  button {
    background-color: transparent;
    border: none;
  }
`;
