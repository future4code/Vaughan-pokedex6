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
  const [types, setTypes] = useState("");
  const [img, setImg] = useState("");
  const [ability, setAbility] = useState("");
  const [hp, setHp] = useState("");
  const [attack, setAttack] = useState("");
  const [defense, setDefense] = useState("");
  const [specialAttack, setSpecialAttack] = useState("");
  const [specialDefense, setSpecialDefense] = useState("");
  const [speed, setSpeed] = useState("");

  
  const getDetails = ((id) => {
    
    axios
      .get(`${BASE_URL}/pokemon/${params.id}`)
      .then((res) => {
        setPokemon(res.data)
        console.log(res.data)
        setHp(res.data.stats[0].base_stat)
        setAttack(res.data.stats[1].base_stat)
        setDefense(res.data.stats[2].base_stat)
        setSpecialAttack(res.data.stats[3].base_stat)
        setSpecialDefense(res.data.stats[4].base_stat)
        setSpeed(res.data.stats[5].base_stat)
        setAbility(res.data.abilities.map((reg) => reg.ability.name).join())
        setTypes(res.data.types.map((reg) => reg.type.name).join())
        setImg(res.data.sprites.front_default)
  
      })
      
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
          
          <h1>Detalhes do Pokemon:</h1>
          <h1>{pokemon.name}</h1>
          <img src={img}></img>
          <Description><b>Habilidades:</b> {ability}</Description>
          <Description><b>HP:</b>{hp}</Description>
          <Description><b>Attack:</b>{attack}</Description>
          <Description><b>Defense:</b>{defense}</Description>
          <Description><b>Special-attack:</b>{specialAttack}</Description>
          <Description><b>Special-defense:</b>{specialDefense}</Description>
          <Description><b>Speed:</b>{speed}</Description>
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

            <button onClick={()=>goToHome(navigate)}>Voltar</button>
            <button onClick={()=>goToPokedex(navigate)}>Pokedex</button>
          </BoxBottom>
        </ConteinerFooter>
      </Footer>
    </Conteiner>
  );
};

export default DetailsPage;
