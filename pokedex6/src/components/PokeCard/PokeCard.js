import React, { useEffect, useState } from "react";
import axios from "axios";
import { Conteiner, IMG } from "./styled";
import { useNavigate } from "react-router-dom";
import { goToDetails, goToPokedex } from "../../routes/coordinator";
import { useParams } from "react-router-dom";
import PokemonThumbnail from "./PokemonThumnail";

const  PokeCard  = (props) => {
    const navigate = useNavigate();
    const [pokemon, setPokemon] = useState("")
    const params = useParams();

  useEffect(() => {
    
    if (pokemon !== props.pokemon) {
      pegaPokemon(props.pokemon);
    }
  }, []);
  const pegaPokemon = (pokeName) => {
    
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(response => {
        
        setPokemon(response.data);
       
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onClickCard = (id) => {

    goToDetails(navigate, id)
  }

  const onClickPokemon = (id) => {
    adicionaNaPokedex(id)
    
  }
  const adicionaNaPokedex = (id) => {
    const pokemons = localStorage.getItem("pokemons")
    console.log(pokemons)
    const obj = JSON.parse(pokemons)
    
    if ( obj === null){
      const lista = [id]
      localStorage.setItem("pokemons", JSON.stringify(lista))
    } else {
    const lista = [...obj, id]
    localStorage.setItem("pokemons", JSON.stringify(lista))
    }
  

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
            <button onClick={() => onClickPokemon(pokemon)}>adicionar a pokedex</button>
            <button onClick={()=>onClickCard(pokemon.id)}>ver detalhes</button>
          </div>
         
    </Conteiner>
  );
};

export default PokeCard;
