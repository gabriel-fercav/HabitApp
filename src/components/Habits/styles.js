import styled from "styled-components";
export const Card = styled.div`
  width: 300px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  border-radius: 0.95rem;
  background-color: var(--black);
  color: #ffff;
  box-shadow: 10px 10px 4px 0px rgba(0, 0, 0, 0.5);
  margin: 10px;

  @media all and (min-width: 768px) {
    width: 80%;
  }
`;
export const Title = styled.span`
  font-size: 30px;
  font-weight: 800;
`;
export const Check = styled.span`
  position: "relative";
  left: "40%";
  padding: "5px";
`;
export const Trash = styled.span`
  position: relative;
  right: "40%";
  padding: "5px";
`;
