import styled from "styled-components";

export const Container = styled.div`
  padding: 70px 15px 10px 15px;
  background-color: #3e3e3e;
  width: 90%;
  min-height: 20vh;
  border-radius: 10px;
  position: relative;

  @media(min-width: 768px) {
    width: 40vw;
    height: 100vh;
    overflow-y: scroll;
  }
`;
export const Titulo = styled.div`
  color: white;
  position: absolute;
  top: 10px;
  left: 25px;
  font-size: 25px;
  font-weight: bolder;
  color: #ff6109;
`;

export const AddIcon = styled.div`
    position: absolute;
    top: 10px;
    right: 20px;
`
