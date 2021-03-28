import React,{useEffect,useContext} from "react";
import {useHistory} from "react-router-dom";
import {goToPokedexPage} from "../../Routes/Coordinator";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { ContextPokemon } from "../../context/context";
import {ContainerListPokemons} from './styled'

export default function HomePage() {
    
    const pokeList = useContext(ContextPokemon)   
    const history = useHistory();   

    useEffect(()=>{
        pokeList.getPokemons()
    }, [])    
   
    const listPokemons = pokeList.pokemons.map((pokemon)=>{ 

        const existPokemon =  pokeList.pokedex.some((poke)=>{
            return pokemon.name === poke.name
        })   
               
        return existPokemon?<div></div>:<PokemonCard url={pokemon.url} pokemon={pokemon} />
    })
    
    return (
        <div className="home-container">
            <h1>Lista de Pokemons API</h1>
            <button onClick={() =>goToPokedexPage(history)}>Ir para Pokedex</button>            
            <ContainerListPokemons>{listPokemons}</ContainerListPokemons>
        </div>
    )
}