import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { useNavigate } from "react-router-dom";
import { goToPokedex, goToDetails } from "../../routes/coordinator";
import PokeCard from "../../components/PokeCard/PokeCard";
import { BoxHome, Header, ConteinerHome } from "./Styled";
import useRequestData from "../../hooks/useRequestData";


const HomePage = () => {
  const navigate = useNavigate();
  const [pokemons, setPokemons] = useState([]);
  const [pokedex, setPokedex] = useState([])
  const [pokemon] = useRequestData(`${BASE_URL}/pokedex`);


  const pegarPokemon = () => {
    axios
      .get(`${BASE_URL}/pokemon`)
      .then((resposta) => {
        setPokemons(resposta.data.results);

      })
      .catch((erro) => console.log(erro.message));
  };

  useEffect(() => {
    pegarPokemon();
  }, []);

  

return (
  <BoxHome>
    <Header>
      <div>
        <h1>HomePage</h1>
      </div>
      <div>
        <button onClick={() => goToPokedex(navigate)}>Pokedex</button>
      </div>

    </Header>

    <ConteinerHome>
      {pokemons.map((pokemon, index) => (
        <PokeCard pokemon={pokemon.name} key={pokemon.name}

        />
      ))}
    </ConteinerHome>
  </BoxHome>
);
      }

export default HomePage;
