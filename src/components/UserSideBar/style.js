import styled from "styled-components";

export const Container = styled.div`
  background-color: #3e3e3e;
  min-height: 450px;
  height: 70vh;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
  border-radius: 10px;

  img {
    border-radius: 50%;
    margin-left: 30px;
  }

  @media (min-width: 768px) {
    /*width: 30vw;*/
    width: 48%;
    height: 86vh;
  }

  @media (min-width: 1024px) {
    /*width: 100%;*/
    width: 30vw;
  }
`;

export const ContentEmail = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 80%;
  flex-wrap: wrap;

  p {
    color: white;
    padding-left: 5px;
  }
`;

export const ContentName = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 50px;
  width: 80%;

  h2 {
    color: white;
    padding-left: 5px;
    padding-top: 2px;
    margin: 0px;
  }
`;
