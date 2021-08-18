import styled from "styled-components";

export const Main = styled.main`
  padding: 5px;
  min-height: 90vh;
  @media all and (min-width: 768px) {
    display: flex;
    /*justify-content: center;
    align-items: center;*/
    flex-wrap: wrap;
    > div + div {
      /*margin: 5px;*/
    }
  }
  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;
