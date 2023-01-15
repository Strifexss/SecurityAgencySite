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

export default function BusinessChose() {
    return(
        <Fade bottom>
        <Main id="ChoseWe">
            <p>Never Face Problems Alone Again!</p>
            <h1>Why Business Chose Agency?</h1>
            <section>
                <BusinessChoseComponents Icon = {People} Texto="Your Elite Security Team"/>
                <BusinessChoseComponents Icon={Paper} Texto="Comprehensive BYOD Policy"/>
                <BusinessChoseComponents Icon={Thunder} Texto="Quick & Affordable" />
                <BusinessChoseComponents Icon={CreditCard} Texto="Up To $500k Agency Cyber Guarantee"/>
            </section>
            <button>Request Demo</button>
        </Main>
        </Fade>
    )
}