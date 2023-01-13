import styled from "styled-components"

const Main = styled.div`
    margin: 2rem;
    width: 30rem;
    height: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    border: 2px solid #B1B1B1;
    transform: scale(95%);
    cursor: pointer;
    padding: 1rem;
    transition: 0.1s;
    :hover{
        transform: scale(100%);
    }

    img{
        margin-top: 1rem;
        width: 4.5rem;
        height: 4.5rem;
        margin-bottom: 1rem;
    }

    h2 {
        color: #202020;
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    p {
        color: #B1B1B1;
        margin-bottom: 1rem;
    }
`

export default function BusinessChoseComponents(props) {
    return(
        <Main>
            <img src={props.Icon} alt="Icon" />
            <h2>{props.Texto}</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam possimus provident quisquam mollitia veniam molestias explicabo temporibus soluta impedit.</p>
        </Main>
    )
}