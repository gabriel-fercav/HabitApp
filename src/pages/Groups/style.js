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
`;
