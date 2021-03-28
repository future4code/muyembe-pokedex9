import React,{useEffect,useContext} from "react";
import {useHistory} from "react-router-dom";
import {goToPokedexPage} from "../../Routes/Coordinator";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { ContextPokemon } from "../../context/context";
import {ContainerListPokemons,ContainerHome,HomeHeader,ContainerButton,GoPokedexButton,GoNextPageButton,GoPreviousPageButton} from './styled'

export default function HomePage() {
    
    const pokeList = useContext(ContextPokemon)   
    const history = useHistory();   

    useEffect(()=>{
        pokeList.getPokemons()
    }, [pokeList.valueInitial])    
   
    const listPokemons = pokeList.pokemons.map((pokemon)=>{ 

        const existPokemon =  pokeList.pokedex.some((poke)=>{
            return pokemon.name === poke.name
        })   
               
        return existPokemon?<div></div>:<PokemonCard url={pokemon.url} pokemon={pokemon} />
    })
    
    return (
        <ContainerHome className="home-container">
            <HomeHeader>
                <ContainerButton>
                    <GoPokedexButton onClick={() =>goToPokedexPage(history)}>Ir para Pokedex</GoPokedexButton>  
                    <GoNextPageButton onClick={()=>pokeList.setValueInitial(pokeList.valueInitial + 1)}>Próxima Página</GoNextPageButton>
                    {pokeList.valueInitial > 0?<GoPreviousPageButton onClick={()=>pokeList.setValueInitial(pokeList.valueInitial - 1)}>Página Anterior</GoPreviousPageButton>:<div></div> }        
                </ContainerButton>
                <h1>Lista de Pokemons API</h1>
            </HomeHeader>
            <ContainerListPokemons>{listPokemons}</ContainerListPokemons>
        </ContainerHome>
    )
}