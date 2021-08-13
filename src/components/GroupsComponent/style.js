import styled from "styled-components";

export const Container = styled.div`
  padding: 70px 15px 10px 15px;
  background-color: #3e3e3e;
  width: 90%;
  max-height: 75vh;
  border-radius: 10px;
  position: relative;
  overflow-y: scroll;

  @media (min-width: 768px) {
    min-width: 40vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;
export const Titulo = styled.div`
  color: white;
  position: absolute;
  top: 10px;
  left: 25px;
  font-size: 30px;
  font-weight: bolder;
  color: #ff6109;

  @media (min-width: 768px) {
    font-size: 35px;
  }
`;
