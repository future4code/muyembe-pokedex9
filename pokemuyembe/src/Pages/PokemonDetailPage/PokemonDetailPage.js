import React from "react";
import {useHistory} from "react-router-dom";
import {goToPreviousPage} from "../../Routes/Coordinator";

const PokemonDetailPage = () => {
    const history = useHistory();
    return (
        <div className="home-container">
            <h1>Página de detalhes do pokemon</h1>
            <button onClick={() =>goToPreviousPage(history)}>Voltar</button>
            <button>Adicionar / Remover da Pokedex</button>
        </div>
    )
}

export default PokemonDetailPage;