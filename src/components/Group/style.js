import styled from "styled-components";

export const Container = styled.div`
  background-color: #000000;
  
  padding: 15px 26px;
  border-radius: 15px;
  position: relative;
  box-shadow: 10px 10px 4px 0px rgba(0, 0, 0, 0.5);
  width: 95%;
  margin-bottom: 10px;

  img {
    position: absolute;
    top: 20px;
    left: 20px;
  }

  span {
    color: white;
  }

  button {
    margin-top: 10px;
    margin-left: 50%;
    transform: translateX(-50%);
    width: 45%;
    height: 30px;
    border: none;
    border-radius: 5px;
    background-color: #ff6109;
    color: white;
    font-weight: bold;
  }

  @media (min-width: 768px) {
    width: 45%;
    height: 320px;

    span {
      font-size: 20px;
    }

    button {
      margin-top: 35px;
    }
  }
`;

export const IdGroup = styled.div`
  position: absolute;
  right: 15px;
  top: 15px;
  border-radius: 5px;
  background-color: white;
  min-width: 5%;
  padding: 5px;

  @media (min-width: 768px) {
    p {
      font-size: 25px;
    }
  }
`;

export const Informations = styled.div`
  padding-top: 112px;
  margin-bottom: 20px;

  h2,
  p {
    color: white;
    margin: 0;
  }

  @media (min-width: 768px) {
    margin-bottom: 30px;

    h2 {
      font-size: 35px;
    }

    p {
      font-size: 20px;
  }
`;
