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
  let offset = 0
  const [pokemons, setPokemons] = useState([]);
  const pegarPokemon = () => {
    axios.get(`${BASE_URL}/pokemon?limit=20&offset=${offset}`)
      .then(({ data }) => {
        const newPokemon = []
        data.results.forEach((p) => newPokemon.push(p.name))
        setPokemons((oldPokemon) => [...oldPokemon, ...newPokemon]);
      })
      offset += 20
  };

  const handleScroll = (e) => {
    if(
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
        e.target.documentElement.scrollHeight
    ) {
      pegarPokemon()
}
  }

useEffect(() => {
  pegarPokemon();
  window.addEventListener('scroll', handleScroll)
}, []);


  return (
    <BoxHome>

        <HeaderAll/>



    <ConteinerHome>
      {pokemons.map((pokemon, i) => (
        <PokeCard key={i} pokemon={pokemon} />
      ))}
    </ConteinerHome>
  </BoxHome>
);

};

export default HomePage;
