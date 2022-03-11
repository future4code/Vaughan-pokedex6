import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import { goToPokedex, goToDetails, goToHome } from "../../routes/coordinator";
const Header2 = styled.div`
    display: flex;
    background-color: #FF3334;
    justify-content: space-between;
    align-items: center;
    color: #FFF;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
`
const ButtonHeader = styled.button`
margin:8px;
`
const H1Header = styled.h1`
margin-left: 8px;
`
export const HeaderPokedex = () => {
    const navigate = useNavigate();
    return (
        <Header2>
            <H1Header>POKEDEX</H1Header>
            <div>
                <button onClick={() => goToHome(navigate)}>Voltar para lista</button>
            </div>
        </Header2>
    )
}
export const HeaderHome = () => {
    const navigate = useNavigate();
    return (
        <Header2>
            <H1Header>POKEMON </H1Header>
            <div>
                <ButtonHeader onClick={() => goToPokedex(navigate)}>Pokedex</ButtonHeader>
            </div>
        </Header2>
    )
}
export const HeaderDetalhes = () => {
    const navigate = useNavigate();
    return (
        <Header2>
            <H1Header>DETALHES</H1Header>
        </Header2>
    )
}