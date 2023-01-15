import styled from "styled-components"


const Flexar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: Center;
    margin: 5rem;



    img {
        width: 7rem;
        height: 7rem;
        margin-bottom: 1rem;
    }
`

const Main = styled.div`
display: flex;
justify-content: center;
align-items: center;
   
@media screen and (max-width: 850px) {
    flex-direction: column;
}

    h1 {
        font-size: 2rem;
        margin-right: 1rem;
        color: #9F0051;
    }

    p {
        color: #ffff;
    }
`

const Textos = styled.div`
    display: flex;
    flex-direction: column;
    
    @media screen and (max-width: 850px) {
            text-align: center;
            justify-content: center;
            align-items: center;
        }

    h1 {
        color: #fff;
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
        margin-right: 0;
    }
`

export default function HowWorksComponent(props) {
    return(
        <Flexar>
            <img src={props.Imagem} alt="Icone" />
        <Main>
            <h1>{props.Numero}</h1>
            <Textos>
                <h1>{props.Texto}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit <br /> Ab earum expedita sapiente deserunt neque voluptates, consequatur</p>
            </Textos>
        </Main>
        </Flexar>
    )
}