import styled from 'styled-components'
export const Card = styled.div`
display: flex;
flex-flow: column nowrap;
align-items: center;
justify-content: center ;
border: solid #3E3E3E;
border-radius: .95rem;
background-color: #3E3E3E ;
color: #ffff;
box-shadow: 2px 4px 18px 6px rgba(0,0,0,0.75);
margin: 10px;
`
export const Title = styled.span`
font-size: 30px;
font-weight: 800;
`
export const checkStyles = {
    position: "relative",
    left: "40%",
    padding: "5px",
}
export const trashStyles = {
    position: "relative",
    right: "40%",
    padding: "5px",
}