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

    h1 {
        color: black;
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
                           <a href="#Business" onClick={HandleVisibility}><h1>Business</h1></a>
                           <a href="#TrustedLiders" onClick={HandleVisibility}><h1>TrustedLiders</h1></a>
                           <a href="#Personal" onClick={HandleVisibility}><h1>PersonalSecurity</h1></a>
                           <a href="#ChoseWe" onClick={HandleVisibility}><h1>Why Chose We</h1></a>
                            <button>Solicitar Demo</button>
                            </Fade>
                        </Modal>
                }
            </Main>
    )
}