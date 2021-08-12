import styled from 'styled-components'

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 20px;
    background: rgb(0,0,0); 
    background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(15,15,15,1) 23%, rgba(27,27,27,1) 48%, rgba(40,40,40,1) 77%, rgba(47,47,47,1) 100%);

    h1 {
        font-family: 'Orbitron';
        font-style: normal;
        font-weight: 700;
        font-size: 5rem;
        margin-bottom: 20px;
        color: #FF6109;
        text-shadow: 6.77019px 6.77019px 3.3851px rgba(0, 0, 0, 0.75);
        z-index: 1;
    }

    h2 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 300;
        text-align: left;
        font-size: 1.5rem;
        line-height: 23px;
        color: #FFFFFF;
        z-index: 1;
    }

    img {
        width: 100%;
        height: 100%;
        z-index: 0;
    }

`
