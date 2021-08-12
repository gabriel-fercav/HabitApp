import styled from "styled-components";

export const Container = styled.div`
  background-color: #3e3e3e;
  height: 80vh;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  border-radius: 10px;

  img {
    border-radius: 50%;
    margin-left: 30px;
  }

  contentName {
    display: flex;
    align-items: center;
    margin-top: 30px;
  }

  h2 {
    color: white;
    padding-left: 3px;
    margin: 0px;
  }

  contentEmail {
      display: flex;
      align-items: center;
  }

  p {
    color: white;
    padding-left: 3px;
  }

  @media (min-width: 768px) {
      width: 30vw;   
  }

`;
