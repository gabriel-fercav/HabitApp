import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Card = styled.div`
  width: 300px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  border: solid #3e3e3e;
  border-radius: 0.95rem;
  background-color: #3e3e3e;
  color: #ffff;
  box-shadow: 2px 4px 18px 6px rgba(0, 0, 0, 0.75);
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
  /*position: absolute;
  right: 40px;
  top: 10px;*/
`;

export const SpanEdit = styled.span`
  /*position: absolute;
  right: 20px;
  top: 15px;*/
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
`;

export const ContainerButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0.5rem;
`;
