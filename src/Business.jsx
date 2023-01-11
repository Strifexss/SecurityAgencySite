import styled from "styled-components"
import Fade from "react-reveal"
const Main = styled.div`
    margin: 2rem;
    display: grid;
    grid-template-columns: 40% 60%;
`

const Texto = styled.div`
    display: flex;
    width: 100%;
    height: 60vh;
    color: #F6D9F2;
    background-color: #9F0051;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;

    h1 {
        font-size: 4rem;
        text-align: left;
        margin: 1rem;
    }

    P{
        text-align: left;
        margin: 1rem;
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

export default function Business() {
    return(
        <Main>
            <Fade left>
            <Texto>
                <h1>Get Personal Security <br /> For You Company's Managers</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla temporibus corrupti exercitationem enim ipsam ducimus necessitatibus, obcaecati accusamus, quisquam molestias, blanditiis incidunt nesciunt harum! At itaque necessitatibus provident cum quae.</p>
                <button><h4>REQUEST DEMO</h4></button>
            </Texto>
            </Fade>
            <h1>Teste</h1>
        </Main>
    )
}