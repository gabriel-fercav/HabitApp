import styled from "styled-components";

export const Container = styled.div`
  padding: 70px 15px 10px 15px;
  background-color: #3e3e3e;
  width: 90%;
  min-height: 20vh;
  border-radius: 10px;
  position: relative;

  @media(min-width: 768px) {
    min-width: 40vw;
    height: 100vh;
    overflow-y: scroll;
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

  @media(min-width: 768px) {
    font-size: 35px;
  }
`;

