import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--gray);
  min-height: 200px;
  width: 95%;
  border-radius: 15px;
  position: relative;
  padding-top: 30px;
  padding-right: 0px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;

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
    height: 35vh;
    width: 40vw;
  }

  @media (min-width: 1024px) {
    height: 45vh;
    width: 33vw;
  }
`;

export const OverflowGoals = styled.div`
  overflow: auto;
  display: flex;

  @media (min-width: 768px) {
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;
    max-height: 31vh;
  }
`;

export const AddIcon = styled.button`
  position: absolute;
  background: 0;
  border: 0;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  top: 5px;
  right: 5%;
  transition: 0.3s all;

  &:hover {
    background: rgb(45,45,45);
  }
`;