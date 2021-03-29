import axios from 'axios'
import React,{useState,useEffect,useContext} from 'react'
import{useHistory} from 'react-router-dom'
import {goToPokemonDetailPage} from '../../Routes/Coordinator'
import  {ContextPokemon} from '../../context/context'
import {PokeCard,ContainerButton,ButtonAddPokemon,ButtonRemovePokemon,ButtonDetailPokemon} from './styled'

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
    
    return  <PokeCard>
                <img src={urlImagePokemon} alt="pokemon" /> 
                <ContainerButton>
                    {existPokemon?
                    <ButtonRemovePokemon onClick={()=>removePokemon(props.pokemon)}>Remover</ButtonRemovePokemon>
                    :<ButtonAddPokemon onClick={()=>addPokemon(props.pokemon)}>Adicionar</ButtonAddPokemon>
                    }                  
                    <ButtonDetailPokemon onClick={()=>goToPokemonDetailPage(history,props.pokemon.name)}>Ver Detalhes</ButtonDetailPokemon>                    
                </ContainerButton>               
           </PokeCard>
    }

export default PokemonCard