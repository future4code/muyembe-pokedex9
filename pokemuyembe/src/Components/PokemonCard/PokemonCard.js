import axios from 'axios'
import React,{useState,useEffect} from 'react'
import{useHistory} from 'react-router-dom'
import {goToPokemonDetailPage} from '../../Routes/Coordinator'

const PokemonCard = (props)=>{

    const[urlImagePokemon, setUrlImagePokemon] = useState('')
    const[pokemonId, setPokemonId] = useState('')
    const history = useHistory()

    useEffect(()=>{
        axios.get(`${props.url}`)
        .then((response)=>{
            setUrlImagePokemon(response.data.sprites.front_default)
            setPokemonId(response.data.id)
        })
        .catch((error)=>{
             console.log(error)
        })
    },[props.url])    
    
    return  <div>
                <img src={urlImagePokemon} />                
                <button>Adicionar</button>
                <button onClick={()=>goToPokemonDetailPage(history,pokemonId)}>Ver Detalhes</button>
           </div>
    }

export default PokemonCard