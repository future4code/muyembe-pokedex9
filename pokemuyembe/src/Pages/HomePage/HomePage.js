import React,{useEffect,useState} from "react";
import {useHistory} from "react-router-dom";
import {goToPokedexPage} from "../../Routes/Coordinator";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import axios from 'axios'

export default function HomePage() {
    const [pokemons, setPokemons] = useState([])
    const history = useHistory();

    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon')
        .then((response)=>{            
            setPokemons(response.data.results)
        })
        .catch((error) =>{
            console.log(error)
        })
    }, [])

    const listPokemons = pokemons.map((pokemon)=>{         
         return <PokemonCard url={pokemon.url}/>
    })
    
    return (
        <div className="home-container">
            <h1>Lista de Pokemons API</h1>
            <button onClick={() =>goToPokedexPage(history)}>Ir para Pokedex</button>            
            {listPokemons}
        </div>
    )
}