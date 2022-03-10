import React, { useEffect, useState } from "react";
import axios from "axios";
import { Conteiner, IMG } from "./styled";
import { useNavigate } from "react-router-dom";
import { goToDetails } from "../../routes/coordinator";
import PokemonThumbnail from "./PokemonThumnail";

const PokeCard = (props) => {
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState("");

  useEffect(() => {
    if (pokemon !== props.pokemon) {
      pegaPokemon(props.pokemon);
    }
  }, []);
  const pegaPokemon = (pokeName) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((response) => {
        setPokemon(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onClickCard = (id) => {
    goToDetails(navigate, id);
  };

  return (
    <Conteiner>
      {pokemon && (
        <PokemonThumbnail
          id={pokemon.id}
          name={pokemon.name}
          type={pokemon.types[0].type.name}
          image={pokemon.sprites.other.dream_world.front_default}
        />
      )}
      <div>
        <button>adicionar a pokedex</button>
        <button onClick={() => onClickCard(pokemon.id)}>ver detalhes</button>
      </div>
    </Conteiner>
  );
};

export default PokeCard;
