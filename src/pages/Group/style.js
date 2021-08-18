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
  }

  @media (min-width: 768px) {
    h2 {
      position: absolute;
      top: 50px;
      right: 10vw;
      font-size: 60px;
    }

    p {
      position: absolute;
      margin-top: 5px;
      top: 130px;
      right: 31vw;
    }
  }

  @media (min-width: 1024px) {
    h2 {
      position: absolute;
      top: 100px;
      left: -50vw;
      font-size: 60px;
    }

    p {
      position: absolute;
      margin-top: 5px;
      top: 180px;
      left: 9.5vw;
    }
  }
`;

export const IconSubscription = styled.div`
  margin-left: 60%;
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

  @media(min-width: 768px) {
    margin-top: 110px;
    width: 40%;
    margin-left: 40vw;
  }

  @media(min-width: 1024px) {
    margin-top: 65px;
    min-width: 30%;
    margin-left: 30vw;

    p {
      font-size: 20px;
    }
  }
`;

export const ContainerUsers = styled.div`
  width: 70%;
  max-height: 20vh;
  background-color: var(--black);
  margin: 10px 2% 30px 1.5%;
  border-radius: 10px;
  padding: 15px;
  overflow-x: auto;

  h3 {
    color: var(--orange);
  }

  p {
    padding-left: 30px;
    padding-top: 10px;
  }

  @media (min-width: 768px) {
    position: absolute;
    left: 0vw;
    top: 120px;
    width: 30vw;
    max-height: 29vh;

    p {
      position: unset;
    }
  }

  @media (min-width: 1024px) {
    width: 25%;
    max-height: 290px;
    position: absolute;
    left: 10px;
    top: 275px;

    p {
      position: unset;
    }
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
    height: 50vh;
    border-radius: 15px;
    flex-direction: row;
    align-items: center;
  }

  @media (min-width: 1024px) {
    justify-content: space-around;
    width: 69vw;
    position: absolute;
    right: 20px;
    top: 250px;
    padding: 20px 15px 0 15px;
  }
`;
