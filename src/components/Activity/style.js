import styled from "styled-components";

export const Container = styled.div`
  height: 140px;
  margin: 25px 15px 15px 15px;
  background-color: var(--black);
  border-radius: 15px;
  padding: 45px 0px 35px 15px;
  position: relative;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);

  div {
    display: flex;
  }

  h4 {
    color: var(--white);
    margin-bottom: 10px;
    width: 60vw;
  }

  span {
    margin-right: 5px;
  }
`;

export const DeleteIcon = styled.button`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: rgb(25,25,25);
  border-radius: 50%;
  border: 0;
  width: 45px;
  height: 45px;
  right: 5%;
  top: 15px;
  transition: 0.3s all;

  &:hover {
    background-color: rgb(45,45,45);
  }
`;

export const EditIcon = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
`;
