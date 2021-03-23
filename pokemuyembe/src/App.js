import React,{useState} from "react";
import { ContextPokemon } from "./context/context";
import Router from "./Routes/Router";
import axios from 'axios'

function App() {
  const [pokemons, setPokemons] = useState([])
  const[pokedex,setPokedex] = useState([])

  const getPokemons = () =>{
      axios.get('https://pokeapi.co/api/v2/pokemon')
      .then((response)=>{            
          setPokemons(response.data.results)
      })
      .catch((error) =>{
          console.log(error)
      })
  }
    
  return (
    <ContextPokemon.Provider value={{pokemons,setPokemons,pokedex,setPokedex, getPokemons}}>
        <Router />
    </ContextPokemon.Provider>
  );
}

export default App;
