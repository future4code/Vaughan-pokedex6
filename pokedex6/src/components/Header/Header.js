import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import { goToPokedex, goToDetails, goToHome } from "../../routes/coordinator";


const Header2 = styled.div`
    display: flex;
    background-color: #fe0000;
    justify-content: space-between;
    align-items: center;
    color: #FFF;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    gap:8px;
`
export const HeaderAll = () => {
    const navigate = useNavigate();
 
    return (
        <Header2>
            <h1>POKEDEX</h1>
            <div>
                <button onClick={() => goToPokedex(navigate)}>Pokedex</button>
                <button onClick={() => goToHome(navigate)}>Voltar para lista</button>

            </div>   

        </Header2>
    )


}