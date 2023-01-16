import styled from "styled-components"
import { useState } from "react"
import Menu from "./imgs/Icons/MenuCardapio.png"
import {Fade} from "react-reveal"
const Main = styled.div`
visibility: collapse;
@media screen and (max-width: 850px) {
    visibility: visible;
    top: 0;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #9F0051;
    width: 100%;

h1 {
    text-align: center;
}    

    }   


`

const Modal = styled.div`

@media screen and (max-width: 850px) {
    height: 100vh;
    width: 250%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    color: #fff;
    background-color: #fff;

    h3 {
        color: #fff;
        background-color: #9F0051;
        width: 11rem;
        height: 4rem;
        border-radius: 1rem;
        display: flex;
        border: solid 4px #da4391;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    a {
        text-decoration: none;
    }

    button {
        width: 8rem;
        height: 3rem;
        background-color: #000000;
        color: #c5c2c2;
        font-weight: bold;
        border: solid 1px #ffff;
        cursor: pointer;
        transform: scale(90%);
        transition: 0.1s;
        margin-bottom: 2rem;
        

        :hover {
            transform: scale(100%);
        }
    }
}
`

const Topo = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    height: 3rem;
    section {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 5rem;
        margin-right: 5rem;
        color: #fff;
    }
`

export default function CabecalhoMobile() {

    const [visibilidade, setVisibilidade] = useState("hidden")
    
    const HandleVisibility = () => {
        if(visibilidade === "hidden") {
            setVisibilidade("visible")
        }
        else {
            setVisibilidade("hidden")
        }
    }

    return(
            <Main>
                <Topo>
                    <section>
                        <h1>Agency</h1>
                    </section>
                    <section>
                        <img onClick={HandleVisibility} src={Menu} alt="Menu" />
                    </section>
                </Topo>
                {visibilidade === "visible" &&                          
                        <Modal>
                            <Fade bottom>
                           <a href="#Business" onClick={HandleVisibility}><h3>Quem Somos Nós?</h3></a>
                           <a href="#ChoseWe" onClick={HandleVisibility}><h3>Por Que Nós Escolher?</h3></a>
                           <a href="#Personal" onClick={HandleVisibility}><h3>Segurança Pessoal</h3></a>
                           <a href="#HowItWork" onClick={HandleVisibility}><h3>Como Funciona</h3></a>
                           <a href="#WhatWeDo" onClick={HandleVisibility}><h3>O Que Fazemos</h3></a>
                           <a href="#TrustedLiders" onClick={HandleVisibility}><h3>Empresas Que Confiam Na gente</h3></a>
                            <button>Solicitar Demo</button>
                            </Fade>
                        </Modal>
                }
            </Main>
    )
}