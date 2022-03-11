import { Conteiner, Header, Footer, Left, Right, Center, ConteinerFooter, Centralizador, NameType, BoxBottom, Description, Card } from './Styled'
import directional from '../../assets/direcional.png'
import { useEffect, useState } from "react";
import { ConteinerHome } from '../HomePage/Styled';
import PokeCard from '../../components/PokeCard/PokeCard';
import { IMG } from '../../components/PokeCard/styled';
import onClickCard from "../../components/PokeCard/PokeCard"
import { HeaderPokedex } from '../../components/PokeCard/Header';
import { useNavigate } from "react-router-dom";
import { goToDetails, goToPokedex } from "../../routes/coordinator";

function PokedexPage() {
  const [pokedex, setPokedex] = useState([])
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

  const onClickCard = (id) => {

    goToDetails(navigate, id)
  }

  const removePokemon = (id) => {
    const newPokedex = [...pokedex];
    console.log(id)
    pokedex.findIndex((poke, index) => {
      if (poke.id === id){
      
      newPokedex.splice(index, 1);
      localStorage.setItem("pokemons", JSON.stringify(newPokedex))
      setPokedex(newPokedex);
     
      
  }})}
  
      return (
        <Conteiner>

          <HeaderPokedex />
          <Centralizador>
            <Left></Left>
            <Center>
              <h1>Pokedex</h1>
              <ConteinerHome>
                {pokedex.length > 0 && pokedex.map((card) => {
                  return (
                    <Card key={card.id}>

                      <IMG src={card.sprites.front_default}></IMG>
                      <button onClick={() => removePokemon(card.id)}>Remover da pokedex</button>
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

                <button>A</button>
                <button>B</button>
              </BoxBottom>

            </ConteinerFooter>
          </Footer>

        </Conteiner>
      );
    }

export default PokedexPage;