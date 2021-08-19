import styled from "styled-components";
export const Container = styled.div`
  position: relative;
  margin: 5px;
  border-radius: 10px;
  background-color: var(--gray);

  @media all and (min-width: 768px) {
    max-height: 86vh;
    width: 48%;
  }
  @media all and (min-width: 1024px) {
    width: 35vw;
  }
`;

export const ContainerButton = styled.span`
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 8px;
  right: 20px;
  z-index: 1;
  padding: 0.7rem;
  transition: all 300ms ease-in-out;
  &:hover {
    background-color: rgb(45, 45, 45);
  }

  button {
    background-color: transparent;
    border: none;
    height: 25px;
    width: 25px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-flow: column nowrap;
  opacity: 91%;
  align-items: center;
  /*max-width: 400px;*/
  padding: 1rem 0;
`;

export const Title = styled.p`
  font-size: 25px;
  font-weight: bolder;
  color: #ff6109;
  text-align: left;
  width: 80%;
  padding-bottom: 1rem;
`;

export const ContainerCards = styled.div`
  width: 100%;
  height: 400px;
  /*padding-top: 1rem;*/
  display: flex;
  overflow-x: auto;

  @media all and (min-width: 768px) {
    overflow-x: hidden;
    overflow-y: auto;
    height: 100%;
    max-height: 75vh;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;
