import styled from 'styled-components'

export const Container = styled.div`
        display: flex;
        z-index: 1;
        box-sizing: border-box;
        flex-direction: column;
        justify-content: space-between;
        align-content: center;
        align-items: center;
        height: 100%;
        min-height: 450px;
        width: 100%;
        padding: 10px 30px 15px 30px;
        background-color: #3E3E3E;
        border-radius: 5px;
        filter: drop-shadow(5px 5px 4px rgba(0, 0, 0, 0.5));

        .title {
            font-size: 2.5rem;
            font-family: 'Roboto';
            font-weight: 800;
            color: white;
            text-shadow: none;
            margin-bottom: 10px;
        }

        span {
            color: white;
            font-family: 'Roboto';
            font-weight: 300;
        }

        a {
            color: white;
            font-family: 'Roboto';
            font-weight: 500;
        }

        .button__container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            align-content: center;
            width: 100%;
        }

        .log__button {
            width: 80%;
            height: 45px;
            background-color: #FF6109;
            color: white;
            border: 0;
            border-radius: 10px;
            font-weight: 800;
            font-size: 1.2rem;
            margin-bottom: 10px;
            margin-top: 20px;
            font-family: 'Roboto';
        }

        .log__button:hover {
            background-color: rgb(232, 81, 0);
        }

        @media (min-width: 1000px) {
            height: 370px;
        }

        @media (min-height: 1080px) {
            height: 570px;
            padding-bottom: 20px;

            .title {
                font-size: 3rem;
            }

            .log__button {
                width: 80%;
                height: 75px;
                font-size: 2.2rem;
            }

        }

`

// export const Title = styled.h3`
//         font-size: 2.5rem;
//         font-family: 'Roboto';
//         font-weight: 800;
//         color: white;

// `