import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  background-color: #000000;
  padding: 15px 15px;
  border-radius: 15px;
  box-shadow: 10px 10px 4px 0px rgba(0, 0, 0, 0.5);

  width: 400px;
  min-width: 270px;
  height: 350px;
  margin: 10px;

  img {
  }

  span {
    color: white;
  }

  @media (min-width: 768px) {
    min-height: 320px;
    margin: 10px;

    span {
      font-size: 20px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
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
  padding-bottom: 20px;

  h2,
  p {
    color: white;
    margin: 0;
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 30px;
    }

    p {
      font-size: 20px;
    }
  }
`;

export const ContainerButton = styled.div`
  width: 100%;
  text-align: center;
  button {
    width: 45%;
    height: 30px;
    border: none;
    border-radius: 5px;
    background-color: #ff6109;
    color: white;
    font-weight: bold;
  }
`;
