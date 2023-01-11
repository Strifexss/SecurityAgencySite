import styled from "styled-components"

const Main = styled.header`
    width: 100%;
    background-color: #000000;
    height: 4rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    color: #c5c2c2;

    h1 {
        cursor: pointer;
    }

    section {
        display: flex;
        justify-content: center;
        align-items: center;

        p {
            margin: 1rem;
            cursor: pointer;

            :hover {
                color: #868686;
            }
        }
    }

    button {
        width: 7rem;
        height: 2.5rem;
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
`

export default function Cabecalho() {
    return(
        <Main>
            <h1>Agency</h1>
            <section>
                <p>Teste</p>
                <p>Teste</p>
                <p>Teste</p>
                <p>Teste</p>
                <p>Teste</p>
            </section>
            <button>Join Now</button>
        </Main>
        
    )
}