import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--gray);
  min-height: 200px;
  width: 95%;
  border-radius: 15px;
  position: relative;
  padding-top: 30px;
  padding-right: 10px;
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
    padding-right: 0px;
  }

  @media (min-width: 1024px) {
    height: 45vh;
    width: 33vw;
    padding-bottom: 0px;
  }
`;

export const OverflowActivities = styled.div`
  overflow-x: auto;
  display: flex;

  @media (min-width: 768px) {
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;
    max-height: 31vh;
  }
`;

export const AddIcon = styled.div`
  position: absolute;
  top: 3px;
  right: 60px;
`;

export const SearchIcon = styled.div`
  position: absolute;
  top: 3px;
  right: 20px;
`;
