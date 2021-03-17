import React from "react";
import {useHistory} from "react-router-dom";
import {goToPokedexPage, goToPokemonDetailPage} from "../../Routes/Coordinator";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";

export default function HomePage() {
    const history = useHistory();
    return (
        <div className="home-container">
            <h1>Lista de Pokemons API</h1>
            <button onClick={() =>goToPokedexPage(history)}>Ir para Pokedex</button>
            <button onClick={()=>goToPokemonDetailPage(history)}>Detalhar pokemon</button>
        </div>
    )
}