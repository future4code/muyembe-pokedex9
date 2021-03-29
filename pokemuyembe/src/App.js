import React,{useState} from "react";
import { ContextPokemon } from "./context/context";
import Router from "./Routes/Router";
import axios from 'axios'

function App() {
  const [pokemons, setPokemons] = useState([])
  const[pokedex,setPokedex] = useState([])
  const[valueInitial,setValueInitial] = useState(0)
  const[valueMaximum,setValueMaximum] = useState(20)

  const getPokemons = () =>{
      axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${valueMaximum}&offset=${valueInitial*20}`)
      .then((response)=>{            
          setPokemons(response.data.results)
      })
      .catch((error) =>{
          console.log(error)
      })
  }
    
  return (
    <ContextPokemon.Provider value={{pokemons,setPokemons,pokedex,setPokedex, getPokemons,setValueInitial,valueInitial}}>
        <Router />
    </ContextPokemon.Provider>
  );
}

export default App;
