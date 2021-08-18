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
        font-size: 4rem;
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
        margin-bottom: 10%;
        z-index: 1;
    }

    img {
           display: none;
        }

    @media (min-width: 1000px) {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding: 50px 0 0 50px;


        .text__container {
            position: relative;
            width: 70%;
            height: 100%;
        }

        .text__title {
            position: absolute;
            top: 10%;
            left: 26%;
            font-size: 4.5rem;
            margin-bottom: 20px;
        }

        .text__call {
            position: absolute;
            font-weight: lighter;
            left: 13%;
            bottom: 4%;
            margin: 0;
            font-size: 1.5rem;
        }

        img {
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 0;
            top: 0%;
            left: 0%;
        }
        
        .login__container {
            width: 25%;
        }

        h1 {
        font-family: 'Orbitron';
        font-style: normal;
        font-weight: 700;
        font-size: 8rem;
        margin-bottom: 20px;  
        color: #FF6109;
        text-shadow: 6.77019px 6.77019px 3.3851px rgba(0, 0, 0, 0.75);
        z-index: 1;
        }
    }

    @media (min-height: 1080px) {
        padding-bottom: 0px;

        .text__container {
            position: relative;
            width: 70%;
            height: 100%;
        }

        .text__title {
            position: absolute;
            top: 15%;
            left: 23%;
            font-size: 8rem;
            margin-bottom: 20px;
        }

        .text__call {
            position: absolute;
            font-weight: lighter;
            left: 6%;
            bottom: 8%;
            margin: 0;
            font-size: 2.6rem;
        }

        img {
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 0;
            top: 0%;
            left: 0%;
        }
        
        .login__container {
            width: 25%;
        }

        h1 {
        font-family: 'Orbitron';
        font-style: normal;
        font-weight: 700;
        font-size: 8rem;
        margin-bottom: 20px;  
        color: #FF6109;
        text-shadow: 6.77019px 6.77019px 3.3851px rgba(0, 0, 0, 0.75);
        z-index: 1;
        }
    }
`
