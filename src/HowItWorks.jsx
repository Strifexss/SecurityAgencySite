import styled from "styled-components"
import HowWorksComponent from "./components/HowWorksComponent"
import {Fade} from "react-reveal"
import LatterIcon from "./imgs/Icons/LatterIcon.png"
import InstallIcon from "./imgs/Icons/InstallIcon.png"
import PersonalizedIcon from "./imgs/Icons/PersonalizedIcon.png"

const Main = styled.div`
    height: 90vh;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 850px) {
        height: 250vh;
    }


    h1 {
        color: #9F0051;
    }

    section {
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: 50% 50%;

        @media screen and (max-width: 850px) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
    
`

export default function HowItWorks() {
    return(
        <Fade>
        <Main>
            <h1>Como Funciona?</h1>
            <section>
                <HowWorksComponent Imagem = {LatterIcon} Texto = "Simples De Fazer Cadastro" Numero = "1"/>
                <HowWorksComponent Imagem = {PersonalizedIcon} Texto = "Integração Personalizada" Numero = "2"/>
                <HowWorksComponent Imagem = {InstallIcon} Texto = "Fácil Instalação" Numero = "3"/>
                <HowWorksComponent Imagem = {LatterIcon} Texto = "Paz de Espírito Completa" Numero = "4"/>
            </section>
        </Main>
        </Fade>
    )
}