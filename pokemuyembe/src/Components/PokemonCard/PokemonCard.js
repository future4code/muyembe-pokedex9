import axios from 'axios'
import React,{useState,useEffect,useContext} from 'react'
import{useHistory} from 'react-router-dom'
import {goToPokemonDetailPage} from '../../Routes/Coordinator'
import  {ContextPokemon} from '../../context/context'
import {PokeCard,ContainerButton} from './styled'

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
    
    const existPokemon =  pokedexList.pokedex.some((pokemon)=>{
        return pokemon === props.pokemon
    })   
    
    const addPokemon= (pokemon) =>{          
       
        const newPokeList = [...pokedexList.pokedex, pokemon]           
        pokedexList.setPokedex(newPokeList)    
   
    } 
    
    const removePokemon = (pokemon) =>{

        const listPokedexFiltered = pokedexList.pokedex && pokedexList.pokedex.filter((poke)=>{
              return poke !== pokemon
        }) 

        pokedexList.setPokedex(listPokedexFiltered)     
    }    

    const goToPokemonDetailPage = () => {
       
    } //
    
    return  <PokeCard>
                <img src={urlImagePokemon} alt="pokemon" /> 
                <ContainerButton>
                    {existPokemon?
                    <button onClick={()=>removePokemon(props.pokemon)}>Remover</button>
                    :<button onClick={()=>addPokemon(props.pokemon)}>Adicionar</button>
                    }                  
                    <button onClick={()=>goToPokemonDetailPage(history)}>Ver Detalhes</button>                    
                </ContainerButton>               
           </PokeCard>
    }

export default PokemonCard