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
    width: 48%;
    height: 86vh;
  }

  @media (min-width: 1024px) {
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
    margin-left: 5px;
    padding-left: 5px;
  }
`;

export const ContentName = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 50px;
  margin-bottom: 8px;
  width: 80%;

  h2 {
    color: white;
    width: 200px;
    padding-left: 5px;
    border-radius: 15px;
    padding-top: 2px;
    margin-left: 5px;
    transition: 0.3s all;
  }

  h2:hover {
    color: white;
    padding-left: 15px;
    border-radius: 15px;
    background: rgba(0, 0, 0, 0.568);
  }

  input {
    background-color: rgba(0, 0, 0, 0.568);
    color: white;
    width: 200px;
    height: 30px;
    padding-left: 15px;
    border-radius: 15px;
    margin: 0px 0px 0px 5px;
    font-size: 1.5rem;
    border: 0;
    transition: 0.3s all;
  }

  input::placeholder {
    font-size: 1.4rem;
    transition: 0.3s all;
  }

  input:focus::placeholder {
    color: rgba(0, 0, 0, 0);
  }

`;
