import styled from "styled-components";
export const Container = styled.div`
  position: relative;
  margin: 5px;
  border-radius: 10px;
  background-color: #000;
  /*width: 100%;*/

  @media all and (min-width: 768px) {
    max-height: 86vh;
    width: 48%;
    /*width: 30vw;*/
  }
  @media all and (min-width: 1024px) {
    /*width: 100%;*/
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
`;

export const ContainerCards = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media all and (min-width: 768px) {
    overflow-y: scroll;
    max-height: 75vh;
  }
`;
