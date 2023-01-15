import styled from "styled-components"
import { useState } from "react"

const Main = styled.div`

@media screen and (max-width: 850px) {
    top: 0;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


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
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
    background-color: black;
}
`


export default function CabecalhoMobile() {

    const [visibilidade, setVisibilidade] = useState("hidden")
    
    const HandleVisibility = () => {
        if(visibilidade === "hidden") {
            setVisibilidade("visible")
            console.log(visibilidade)
        }
        else {
            setVisibilidade("hidden")
            console.log(visibilidade)
        }
    }

    return(
            <Main>
                <h1 onClick={HandleVisibility}>Teste</h1>
                {visibilidade === "visible" &&  
                    <Modal>
                        <h1>Teste supremo</h1>
                        <h1>Teste supremo</h1>
                        <h1>Teste supremo</h1>
                    </Modal>
                }
            </Main>
    )
}