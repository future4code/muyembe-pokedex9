import React from "react";
import {useHistory} from "react-router-dom";
import {goToHomePage,goToPokemonDetailPage} from "../../Routes/Coordinator";

const PokedexPage = () => {
    const history = useHistory();   
    
    return (
        <div className="pokedex-container">
            <h1>Pokedex - Pokemons adicionados</h1>
            <button onClick={() =>goToHomePage(history)}>Voltar para lista de pokemons</button>
            <button onClick={()=>goToPokemonDetailPage(history)}>Detalhar pokemon</button>
        </div>
    )
}

export default PokedexPage;