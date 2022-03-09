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

const  DetailsPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState("");
  
  const getDetails = ((id) => {
    
    axios
      .get(`${BASE_URL}/pokemon/${params.id}`)
      .then((res) => {
        setPokemon(res.data)
        setTypes(res.data.types.map((reg) => reg.type.name).join())
 
      })
      
      .catch((erro) => console.log(erro.message))
  });
  useEffect(() => {
    getDetails();
  }, []);


  return (
    <Conteiner>
      <Header></Header>
      <Centralizador>
        <Left></Left>
        <Center>
          <h1>Detalhes do Pokemon:</h1>
          <h1>{pokemon.name}</h1>
          <img src={pokemon.sprites.front_default}></img>
        </Center>
        <Right></Right>
      </Centralizador>

      <Footer>
        <ConteinerFooter>
          <NameType>
            <div><b>Nome:</b> {pokemon.name}</div>
            <div><b>Types:</b> {types}</div>
          </NameType>

          <BoxBottom>
            <div></div>
            <Description>Description</Description>
            <button onClick={()=>goToHome(navigate)}>Voltar</button>
            <button onClick={()=>goToPokedex(navigate)}>Pokedex</button>
          </BoxBottom>
        </ConteinerFooter>
      </Footer>
    </Conteiner>
  );
};

export default DetailsPage;
