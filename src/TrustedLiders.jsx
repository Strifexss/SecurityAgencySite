import styled from "styled-components"
import Disney from "./imgs/logos/DisneyLogo.png"
import IBMLogo from "./imgs/logos/IBMLogo.png"
import HavardLogo from "./imgs/logos/HavardLogo.png"
import NikeLogo from "./imgs/logos/NikeLogo.png"
import AdidasLogo from "./imgs/logos/AdidasLogo.png"
import StanfordLogo from "./imgs/logos/StanfordLogo.png"
import Fade from "react-reveal/Fade"

const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    h1 {
        text-align: center;

        @media screen and (max-width: 850px) {
            font-size: 1.5rem;
            }
    }

    section {
        margin: 1rem;
        margin-top: 3rem;
        display: flex;
        width: 80%;
        justify-content: space-around;
        flex-wrap: wrap;
        align-items: center;
        img {
            width: 9rem;
            height: 5rem;

            @media screen and (max-width: 850px) {
                margin: 1rem;
                width: 7rem;
                height: 4rem;
            }
        }
    }
`

export default function TrustedLiders() {
    return(
        <Fade bottom>
        <Main id="TrustedLiders">
            <h1>Trusted By Leaders From Professional <br /> Institutions Around The World</h1>
            <section>
                <img src={Disney} alt="Disney" />
                <img src={NikeLogo} alt="Nike" />
                <img src={IBMLogo} alt="IBM" />
                <img src={AdidasLogo} alt="Adidas" />
                <img src={HavardLogo} alt="Havard" />
                <img src={StanfordLogo} alt="Stanford" />
            </section>
        </Main>
        </Fade>
    )
}