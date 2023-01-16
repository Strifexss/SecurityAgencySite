import styled from "styled-components"
import HowWorksComponent from "./components/HowWorksComponent"
import {Fade} from "react-reveal"
import LatterIcon from "./imgs/Icons/LatterIcon.png"
import InstallIcon from "./imgs/Icons/InstallIcon.png"
import PersonalizedIcon from "./imgs/Icons/PersonalizedIcon.png"
import PeopleIcon from "./imgs/Icons/PeopleIcon.png"

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
    @media screen and (min-width: 850px) and (max-width: 1119px) {
        height: 100vh;
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
        <Main id="HowItWork">
            <h1 >Como Funciona?</h1>
            <section>
                <HowWorksComponent Imagem = {LatterIcon} Texto = "Simples De Fazer Cadastro" Numero = "1"/>
                <HowWorksComponent Imagem = {PersonalizedIcon} Texto = "Integração Personalizada" Numero = "2"/>
                <HowWorksComponent Imagem = {InstallIcon} Texto = "Fácil Instalação" Numero = "3"/>
                <HowWorksComponent Imagem = {PeopleIcon} Texto = "Paz de Espírito Completa" Numero = "4"/>
            </section>
        </Main>
        </Fade>
    )
}