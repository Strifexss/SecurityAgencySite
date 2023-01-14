import styled from "styled-components"
import PessoaEmFrenteAoPc from "./imgs/PessoaEmFrenteAoPc.jpg"
import Fade from "react-reveal/Fade"
const Main = styled.div`
    margin: 2rem;
    margin-top: 3rem;
    display: grid;
    grid-template-columns: 45% 55%;

    section {
        margin-right: 1rem;
        img {
            width: 100%;
            height: 86%;
            margin-left: 1rem;
        @media screen and (max-width: 850px) {
            margin-left: 0;
            margin-top: 1rem;
        }
        }
    }

    @media screen and (max-width: 850px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`

const Texto = styled.div`
    display: flex;
    width: 100%;
    height: 60vh;
    color: #E7E7E7;
    background-color: #9F0051;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 850px) {
        width: 100%;
    }

    h1 {
        font-size: 3rem;
        text-align: left;
        margin: 1rem;

        @media screen and (max-width: 850px) {
            font-size: 2.5rem;
    }
    }

    section {
        margin-top: 1rem;

        h2{
            margin-top: 1rem;
        }
    }
 
`

export default function WhatWeDo() {
    return(
        <Fade left>
        <Main>
           <Texto>
            <h1>What We Do?</h1>
            <section>
                <h2>✔ Advanced Security Software</h2>
                <h2>✔ Cyber Coverage</h2>
                <h2>✔ 24/7 Active Monitoring and Response</h2>
            </section>
           </Texto>
            <section>
                 <img src={PessoaEmFrenteAoPc} alt="PessoaUsandoComputador" />
            </section> 
        </Main>
        </Fade>
    )
}