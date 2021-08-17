import styled from "styled-components";

export const Container = styled.div`
  padding: 70px 15px 10px 15px;
  background-color: var(--gray);
  width: 90%;
  max-height: 75vh;
  border-radius: 10px;
  position: relative;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
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
  color: var(--orange);

  @media (min-width: 768px) {
    font-size: 35px;
  }
`;
