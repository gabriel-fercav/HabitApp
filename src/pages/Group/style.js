import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--white);

  Header {
    width: 100vw;
  }

  h2 {
    font-size: 45px;
    margin: 20px 0 0;
    text-align: center;
    text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.9);
  }

  p {
    color: var(--white);
    font-size: 20px;
    width: 90%;
    text-align: center;
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 60px;
      margin-bottom: 30px;
    }

    p {
      position: absolute;
      top: 150px;
    }
  }

  @media (min-width: 1024px) {
    h2 {
      font-size: 60px;
    }

    p {
      font-size: 25px;
    }
  }
`;

export const IconSubscription = styled.div`
  margin-left: 60%;
  cursor: pointer;

  @media (min-width: 768px) {
    position: absolute;
    top: 100px;
    right: 10vw;
  }

  @media (min-width: 1024px) {
    right: 20vw;
  }
`;

export const ContainerCreator = styled.div`
  min-width: 70%;
  min-height: 7vh;
  border-radius: 10px;
  margin-top: 20px;
  background-color: var(--black);
  color: var(--orange);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    font-weight: lighter;
    color: var(--white);
    font-size: 16px;
  }

  @media (min-width: 768px) {
    margin-top: 10px;
    min-width: 30%;
    margin-left: 30vw;
    margin-bottom: 55px;

    span {
      font-size: 17px;
    }
  }

  @media (min-width: 1024px) {
    margin-top: 25px;
    min-width: 15%;
    margin-left: 0vw;

    p {
      font-size: 20px;
    }
  }
`;

export const ContainerUsers = styled.div`
  width: 70%;
  min-height: 22vh;
  max-height: 30vh;
  background-color: var(--black);
  margin: 10px 2% 30px 1.5%;
  border-radius: 10px;
  padding: 15px 0 0 15px;

  h3 {
    color: var(--orange);
  }

  p {
    padding-left: 30px;
    padding-top: 10px;
    text-align: start;
  }

  @media (min-width: 768px) {
    position: absolute;
    left: 15vw;
    top: 185px;
    width: 30vw;

    p {
      position: unset;
    }
  }

  @media (min-width: 1024px) {
    width: 25%;
    max-height: 59vh;
    position: absolute;
    left: 10px;
    top: 46vh;

    p {
      position: unset;
    }
  }
`;

export const OverflowUsers = styled.div`
  overflow: auto;
  max-height: 20vh;

  @media (min-width: 768px) {
    max-height: 15vh;
  }

  @media (min-width: 1024px) {
    max-height: 20vh;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    background-color: var(--black);
    padding-top: 15px;
    margin-bottom: 20px;
    margin-top: 30px;
    display: flex;
    justify-content: space-evenly;
    width: 85vw;
    height: 40vh;
    border-radius: 15px;
    flex-direction: row;
    align-items: center;
  }

  @media (min-width: 1024px) {
    justify-content: space-around;
    width: 69vw;
    height: 50vh;
    position: absolute;
    right: 20px;
    top: 42vh;
    padding: 20px 15px 0 15px;
  }
`;
