import styled from "styled-components"
import BusinessChoseComponents from "./components/BusinessChoseComponents"
import Fade from "react-reveal/Fade"
import People from "./imgs/Icons/PeopleIcon.png"
import Paper from "./imgs/Icons/PaperIcon.png"
import Thunder from "./imgs/Icons/ThunderIcon.png"
import CreditCard from "./imgs/Icons/CreditCardIcon.png"

const Main = styled.div`
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    button {
        width: 9rem;
        height: 2.5rem;
        margin: 1rem;
        background-color: #9F0051;
        color: #ffffff;
        border: none;
        font-weight: bold;
        cursor: pointer;

        :hover {
            transform: scale(110%);
        }
    }

    p {
        font-weight: bold;
        font-size: 1.5rem;
        color: #737373;

        @media screen and (max-width: 850px) {
            text-align: center;
        }
    }

    h1 {
        margin-top: 2rem;
        font-size: 4rem;

        @media screen and (max-width: 850px) {
            font-size: 2rem;
            text-align: center;
        }
        @media screen and (max-width: 1395px) and (min-width: 851px) {
            text-align: center;
        }
    }

    section {
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: 50% 50%;

        @media screen and (max-width: 1035px) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }

`

export default function BusinessChose() {
    return(
        <Fade bottom>
        <Main id="ChoseWe">
            <p>Nunca Encare Problemas Sozinho De Novo!</p>
            <h1>Por Que As Empresas Escolhem A Agency?</h1>
            <section>
                <BusinessChoseComponents Icon = {People} Texto="Nossa equipe de segurança de Elite"/>
                <BusinessChoseComponents Icon={Paper} Texto="Política abrangente de BYOD"/>
                <BusinessChoseComponents Icon={Thunder} Texto="Rápido e acessível" />
                <BusinessChoseComponents Icon={CreditCard} Texto="Garantia de Proteção de até $ 500.000"/>
            </section>
            <button>Solicitar Demo</button>
        </Main>
        </Fade>
    )
}