import { Box } from "@material-ui/core";
import React from "react";
import { Conteiner, IMG } from "./styled";

const PokemonThumbnail = ({ id, name, image, type }) => {
    
return (
    <Box
    sx={{  bgcolor: 'typecolor.main' }}
  >
    <Conteiner>
      
        <div>
          <small>#0{id}</small>
        </div>
        <IMG src={image} alt={name} />
        <div>
          <h3>{name}</h3>
          <small>Type: {type}</small>
        </div>
      
    </Conteiner>
    </Box>
  );
};

export default PokemonThumbnail;
