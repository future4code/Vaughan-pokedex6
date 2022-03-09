import React, { useEffect, useState } from "react";
import axios from "axios";
import { Conteiner, IMG} from "./styled";
import { useNavigate } from "react-router-dom";
import { goToDetails} from "../../routes/coordinator";

const  PokeCard  = (props) => {
    const navigate = useNavigate();
    const [pokemon, setPokemon] = useState("")

  
  useEffect(() => {
    if (pokemon !== props.pokemon) {
        pegaPokemon(props.pokemon);
      }
  }, []) 

  
  const pegaPokemon = pokeName => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(response => {
    
        setPokemon(response.data);
        console.log(response.data)
      })
      .catch(err => {
        console.log(err);
      });
  };

    return (
    <Conteiner>
        {pokemon && (
          <IMG src={pokemon.sprites.other.dream_world.front_default} 
          alt={pokemon.name} />)}
          <div>
            <button >adicionar a pokedex</button>
            <button onClick={()=>goToDetails(navigate)}>ver detalhes</button>
          </div>
    </Conteiner>
    );
  
}

export default PokeCard;
