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

export const Button = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: transparent;
  border: none;
  z-index: 1;
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
  overflow-x: scroll;

  @media all and (min-width: 768px) {
    overflow-x: hidden;
    overflow-y: scroll;
    height: 100%;
    max-height: 75vh;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;
