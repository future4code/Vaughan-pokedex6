import React from "react";
import { useNavigate } from "react-router-dom";
import { goToPokedex, goToHome } from "../../routes/coordinator";
import {
  Conteiner,  Header,  Centralizador,  Center,  Footer,  Left,
  Right,  ConteinerFooter,  Description,  BoxBottom,  NameType,
} from "./Styled";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { useParams } from "react-router-dom";
import { useEffect , useState} from "react";
import PokeCard from "../../components/PokeCard/PokeCard";
import { HeaderAll } from "../../components/Header/Header";

const  DetailsPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [pokemon, setPokemon] = useState([]);
 
  
  const getDetails = ((id) => {
    
    axios
      .get(`${BASE_URL}/pokemon/${params.id}`)
      .then((res) => 
        console.log(res.data)
        )
      
      .catch((erro) => console.log(erro.message))
  });
  useEffect(() => {
    getDetails();
  }, []);
  return (
    <Conteiner>
     <HeaderAll/>
      <Centralizador>
        <Left></Left>
        <Center>
          <h1>Detalhes do Pokemon</h1>
          {pokemon.map((pokemon, index) => (
          <PokeCard pokemon={pokemon.name} key={pokemon.name}/>
        ))}
        </Center>
        <Right></Right>
      </Centralizador>

      <Footer>
        <ConteinerFooter>
          <NameType>
            <div>Pokemon Name</div>
            <div>type</div>
          </NameType>

          <BoxBottom>
            <div></div>
            <Description>Description</Description>
            <button>Voltar</button>
            <button>Pokedex</button>
          </BoxBottom>
        </ConteinerFooter>
      </Footer>
    </Conteiner>
  );
};

export default DetailsPage;
