import React, { useContext } from "react";
import {useHistory} from "react-router-dom";
import { ContextPokemon } from "../../context/context";
import {goToHomePage,goToPokemonDetailPage} from "../../Routes/Coordinator";
import PokemonCard from '../../Components/PokemonCard/PokemonCard'

const PokedexPage = () => {
    const history = useHistory(); 
    const listPokedex = useContext(ContextPokemon)    

    const listPokemons = listPokedex.pokedex.map((pokemon)=>{             
        return <PokemonCard url={pokemon.url} pokemon={pokemon} />
   })
   
   
    return (
        <div className="pokedex-container">
            <h1>Pokedex - Pokemons adicionados</h1>
            <button onClick={() =>goToHomePage(history)}>Voltar para lista de pokemons</button>
            <button onClick={()=>goToPokemonDetailPage(history)}>Detalhar pokemon</button>
            {listPokemons}
        </div>
    )
}

export default PokedexPage;