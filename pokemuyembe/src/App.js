import React,{useState} from "react";
import { ContextPokemon } from "./context/context";
import Router from "./Routes/Router";

function App() {
  const [pokemons, setPokemons] = useState([])
  const[pokedex,setPokedex] = useState([])
  return (
    <ContextPokemon.Provider value={{pokemons,setPokemons,pokedex,setPokedex}}>
        <Router />
    </ContextPokemon.Provider>
  );
}

export default App;
