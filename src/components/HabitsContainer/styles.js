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

export const Button = {
  position: "absolute",
  top: "5px",
  right: "15px",
  zIndex: "1",
};

export const Content = styled.div`
  display: flex;
  flex-flow: column nowrap;
  opacity: 91%;
  align-items: center;
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
