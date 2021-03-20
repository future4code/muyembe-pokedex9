import axios from 'axios'
import React,{useState,useEffect,useContext} from 'react'
import{useHistory} from 'react-router-dom'
import {goToPokemonDetailPage} from '../../Routes/Coordinator'
import  {ContextPokemon} from '../../context/context'

const PokemonCard = (props)=>{
    const pokedexList = useContext(ContextPokemon)    
    const[urlImagePokemon, setUrlImagePokemon] = useState('')   
    const history = useHistory()

    useEffect(()=>{
        axios.get(`${props.url}`)
        .then((response)=>{
            setUrlImagePokemon(response.data.sprites.front_default)            
        })
        .catch((error)=>{
             console.log(error)
        })
    },[props.url])   
    
    const addPokemon= (pokemon) =>{        
        const newPokeList = [...pokedexList.pokedex, pokemon]           
        pokedexList.setPokedex(newPokeList)      
    }
   
    return  <div>
                <img src={urlImagePokemon} />                
                <button onClick={()=>addPokemon(props.pokemon)}>Adicionar</button>
                <button onClick={()=>goToPokemonDetailPage(history)}>Ver Detalhes</button>
           </div>
    }

export default PokemonCard