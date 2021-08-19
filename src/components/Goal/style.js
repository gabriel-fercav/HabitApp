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

export const DeleteIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
`;

export const EditIcon = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
`;
