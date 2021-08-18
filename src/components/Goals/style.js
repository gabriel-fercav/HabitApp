import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: var(--gray);
  min-height: 200px;
  width: 95%;
  border-radius: 15px;
  position: relative;
  padding-top: 30px;
  padding-bottom: 20px;
  padding-right: 10px;
  margin-bottom: 20px;
  overflow: auto;

  h3 {
    position: absolute;
    top: 10px;
    left: 20px;
    color: var(--orange);
    font-weight: bold;
    font-size: 25px;
  }

  @media (min-width: 768px) {
    flex-direction: column;
    height: 41vh;
    width: 40vw;
  }

  @media (min-width: 1024px) {
    height: 45vh;
  }
`;

export const AddIcon = styled.div`
  position: absolute;
  top: 15px;
  right: 60px;
`;

export const SearchIcon = styled.div`
  position: absolute;
  top: 15px;
  right: 20px;
`;
