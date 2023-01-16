import styled from "styled-components"
import PessoasConversando from "./imgs/PessoasConversando.webp"
import Fade from "react-reveal/Fade"
const Main = styled.div`
    margin: 2rem;
    margin-top: 3rem;
    display: grid;
    grid-template-columns: 60% 40%;

    section {
        margin-right: 1rem;
        img {
            width: 100%;
            height: 100%;

        @media screen and (max-width: 850px) {
            margin-left: 0;
            width: 105%;
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
    background-color: #000000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;

    @media screen and (max-width: 1124px) {
        width: 100%;
        align-items: center;
        height: 90vh;
    }
   
    h1 {
        font-size: 3rem;
        text-align: left;
        margin: 1rem;

        @media screen and (max-width: 850px) {
            font-size: 2.5rem;
    }
        @media screen and (max-width: 1124px) and (min-width: 851px) {
            text-align: center;
        }
    }

    P{
        text-align: left;
        margin: 1rem;

        @media screen and (max-width: 1124px) and (min-width: 851px) {
            text-align: center;
        }
    }

    button {
        width: 9rem;
        height: 2.5rem;
        margin: 1rem;
        background-color: #ffffff;
        color: #B0688B;
        border: none;
        font-weight: bold;
        cursor: pointer;

        :hover {
            transform: scale(110%);
        }
    }

   
`

export default function PersonalSecurity() {
    return(
        <Fade right>
        <Main id="Personal">
            <section>
                <img src={PessoasConversando} alt="Pessoas COnversando" />
            </section>
           <Texto>
                <h1>A Segurança Cibernética Pessoal Agora É Um Problema Da Nossa Empresa</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores dolorem enim, odit sapiente soluta, saepe voluptates quibusdam unde iste cumque dolore ipsam aliquid dolor exercitationem, impedit repellat praesentium qui ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem unde perspiciatis fugit officiis nobis necessitatibus, eligendi autem odio? Ex ut consequatur saepe rerum eveniet eligendi placeat est sapiente. Enim, excepturi.</p>
                <button>Ler Mais</button>
           </Texto>
        </Main>
        </Fade>
    )
}