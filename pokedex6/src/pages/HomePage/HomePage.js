import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { useNavigate } from "react-router-dom";
import { goToPokedex, goToDetails } from "../../routes/coordinator";
import PokeCard from "../../components/PokeCard/PokeCard";
import { BoxHome, Header, ConteinerHome } from "./Styled";
import { HeaderAll } from "../../components/Header/Header";

const HomePage = () => {
  const navigate = useNavigate();
  const [pokemons, setPokemons] = useState([]);

  const pegarPokemon = () => {
    axios
      .get(`${BASE_URL}/pokemon`)
      .then((resposta) => {
        setPokemons(resposta.data.results);
        console.log(resposta.data.results);
      })
      .catch((erro) => console.log(erro.message));
  };

  useEffect(() => {
    pegarPokemon();
  }, []);

  return (
    <BoxHome>

        <HeaderAll/>


      

      <ConteinerHome>
        {pokemons.map((pokemon, index) => (
          <PokeCard pokemon={pokemon.name} key={pokemon.name} />
        ))}
      </ConteinerHome>
    </BoxHome>
  );
};

export default HomePage;
