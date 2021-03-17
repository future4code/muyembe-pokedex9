import React from "react";
import {useHistory} from "react-router-dom";
import {goToHomePage} from "../../Routes/Coordinator";

const PokedexPage = () => {
    const history = useHistory();
    
    return (
        <div className="pokedex-container">
            <h1>Pokedex - Pokemons adicionados</h1>
            <button onClick={() =>goToHomePage(history)}>Voltar para lista de pokemons</button>
        </div>
    )
}

export default PokedexPage;