import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  Header {
    width: 100vw;
    margin-bottom: 15px;
  }

  input {
    width: 80%;
    height: 30px;
    padding: 15px;
    margin-bottom: 30px;
    border: 2px solid #ff6109;
    border-radius: 5px;
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  top: 78px;
  right: 14%;
  cursor: pointer;

  @media (min-width: 768px) {
    top: 85px;
    right: 11%;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 430px;
  overflow-y: scroll;

  @media (min-height: 1000px) {
    height: 880px;
  }
`;
