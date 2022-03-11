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

display: flex;
align-items: flex-end;
justify-content: right;

`
export const H1Header = styled.header`
    display: flex ;
    background-color: #ff3334;
    height: 9vh;
    width: 97.9vw;
    border-radius: 10px 10px 0px 0px;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 4.5vh;
`
export const HeaderPokedex = () => {
    const navigate = useNavigate();
    return (
        <H1Header>POKEDEX </H1Header>
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
        <H1Header>
            Detalhes

        </H1Header>
    )
}