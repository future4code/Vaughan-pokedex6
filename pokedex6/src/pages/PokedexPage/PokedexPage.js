import { Conteiner, Header, Footer, Left, Right, Center, ConteinerFooter, Centralizador, NameType, BoxBottom, Description } from './Styled'
import directional from '../../assets/direcional.png'
import { useEffect, useState } from "react";
import { ConteinerHome } from '../HomePage/Styled';
import PokeCard from '../../components/PokeCard/PokeCard';
import { IMG } from '../../components/PokeCard/styled';
import onClickCard from "../../components/PokeCard/PokeCard"

function PokedexPage() {
  const [pokedex, setPokedex] = useState([])
  const getPokemons = ((id) => {
    setPokedex(JSON.parse(localStorage.getItem("pokemons")))

  })

  useEffect(() => {
    getPokemons();
  }, []);



  return (
    <Conteiner>

      <Header></Header>
      <Centralizador>
        <Left></Left>
        <Center>
          <h1>Pokedex</h1>
        <ConteinerHome>
          {pokedex.length > 0 && pokedex.map((card) => {
            return (
              <PokeCard key={card.id}>
                 <div>
                 <IMG src={card.sprites.front_default}></IMG>
                  <button >Remover da pokedex</button>
                  <button onClick={() => onClickCard(card.id)}>ver detalhes</button>
                </div>
              </PokeCard>
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

            <button>A</button>
            <button>B</button>
          </BoxBottom>

        </ConteinerFooter>
      </Footer>

    </Conteiner>
  );
}

export default PokedexPage;