import { Conteiner, Header, Footer, Left, Right, Center, ConteinerFooter, Centralizador, NameType, BoxBottom, Description, Card } from './Styled'
import directional from '../../assets/direcional.png'
import { useEffect, useState } from "react";
import { ConteinerHome } from '../HomePage/Styled';
import PokeCard from '../../components/PokeCard/PokeCard';
import { IMG } from '../../components/PokeCard/styled';
import onClickCard from "../../components/PokeCard/PokeCard"
import { HeaderPokedex } from '../../components/PokeCard/Header';

import { goToHome } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';


function PokedexPage() {
  const [pokedex, setPokedex] = useState([])
  const navigate = useNavigate();
  const getPokemons = ((id) => {
    
    const names = localStorage.getItem("pokemons")
    
    // if (names === ""){
    //   setPokedex([])
    // } else{
    setPokedex(JSON.parse(names))
    // }
  })
  const navigate = useNavigate();

  useEffect(() => {
    getPokemons();
  }, []);



  return (
    <Conteiner>

      <HeaderPokedex/>
      <Centralizador>
        <Left></Left>
        <Center>
    
        <ConteinerHome>
          {pokedex.length > 0 && pokedex.map((card) => {
          
            return (
              <Card key={card.id}>
                 
                 <IMG src={card.sprites.front_default}></IMG>
                  <button >Remover da pokedex</button>
                  <button onClick={() => onClickCard(card.id)}>ver detalhes</button>
                
              </Card>
            )
          })}
        </ConteinerHome>

        </Center>
        <Right></Right>
      </Centralizador>

      <Footer>
        <ConteinerFooter>

          <NameType>

            <div>Pokedex</div>


          </NameType>

          <BoxBottom>
            <div>
              <img alt='direcional' src={directional} width='50px' height='40px' />
            </div>

            <button onClick={() => goToHome(navigate)}>Voltar para lista</button>
            <button>B</button>
          </BoxBottom>

        </ConteinerFooter>
      </Footer>

    </Conteiner>
  );
}
=======

export default PokedexPage;