import styled from "styled-components"

const Main = styled.header`
    width: 100%;
    background-color: #000000;
    height: 4rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #c5c2c2;
    position: fixed;
    top: 0;

    @media screen and (max-width: 850px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 15%;
        display: none;
    }   

    h1 {
        cursor: pointer;
        
        @media screen and (max-width: 850px) {
            font-size: 1.5rem;
        }
    }

    section {
        display: flex;
        justify-content: center;
        align-items: center;

        a{
            text-decoration: none;
            color: inherit;
        }

        p {
            margin: 1rem;
            cursor: pointer;
            text-align: center;
            
        @media screen and (max-width: 850px) {
           font-size: 1rem;
        }

            :hover {
                color: #868686;
            }
        }
    }

    button {
        width: 7rem;
        height: 2.5rem;
        background-color: #000000;
        color: #c5c2c2;
        font-weight: bold;
        border: solid 1px #ffff;
        cursor: pointer;
        transform: scale(90%);
        transition: 0.1s;

        @media screen and (max-width: 850px) {
            height: 1.5rem;
        }

        :hover {
            transform: scale(100%);
        }
    }
`

export default function Cabecalho() {
    return(
        <Main>
            <h1>Agency</h1>
            <section>
                            <a href="#Business"><p>Quem Somos Nós?</p></a>
                           <a href="#ChoseWe"><p>Por Que Nós Escolher?</p></a>
                           <a href="#Personal"><p>Segurança Pessoal</p></a>
                           <a href="#HowItWork"><p>Como Funciona</p></a>
                           <a href="#WhatWeDo"><p>O Que Fazemos</p></a>
                           <a href="#TrustedLiders"><p>Empresas Que Confiam Na gente</p></a>
            </section>
            <button>Join Now</button>
        </Main>
    )
}