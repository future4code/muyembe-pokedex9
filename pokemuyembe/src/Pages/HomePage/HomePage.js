import React,{useEffect,useContext} from "react";
import {useHistory} from "react-router-dom";
import {goToPokedexPage} from "../../Routes/Coordinator";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import axios from 'axios'
import { ContextPokemon } from "../../context/context";

export default function HomePage() {
    
    const pokeList = useContext(ContextPokemon)   
    const history = useHistory();   

    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon')
        .then((response)=>{            
            pokeList.setPokemons(response.data.results)
        })
        .catch((error) =>{
            console.log(error)
        })
    }, [pokeList])
   
    const listPokemons = pokeList.pokemons.map((pokemon)=>{             
         return <PokemonCard url={pokemon.url} pokemon={pokemon} />
    })
    
    return (
        <div className="home-container">
            <h1>Lista de Pokemons API</h1>
            <button onClick={() =>goToPokedexPage(history)}>Ir para Pokedex</button>            
            {listPokemons}
        </div>
    )
}