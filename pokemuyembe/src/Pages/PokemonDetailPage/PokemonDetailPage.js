import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import {useHistory,useParams} from "react-router-dom";
import {goToPreviousPage} from "../../Routes/Coordinator";
import DetailStatCard from "../../Components/DetailStatCard/DetailStatCard";
import DetailTypeCard from "../../Components/DetailTypeCard/DetailTypeCard";
import DetailMoveCard from "../../Components/DetailMoveCard/DetailMoveCard";
import {DetailPageContainer, DetailPageHeader, GoBackButton, PokeNameTitle, AddRemoveButton, DetailPageMain, DetailImgFront, DetailImgBack, DetailsList, DetailStat, DetailType, DetailMove} from "./styled";
import {ContextPokemon} from '../../context/context'

const PokemonDetailPage = () => {
    const [details, setDetails] = useState({})
    const [pokemonName, setPokemonName] = useState("")
    const [frontImg, setFrontImg] = useState({})
    const [backImg, setBackImg] = useState({})
    const history = useHistory();
    const param = useParams(); 
    const pokedexList = useContext(ContextPokemon)

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${param.pokeName}`)
        .then((response) => {
            setDetails(response.data)
            setPokemonName(response.data.name)
            setFrontImg(response.data.sprites.front_default)
            setBackImg(response.data.sprites.back_default)
        })
    }, [param.pokeName])

    const detailStatList = details.stats?.map((detail) => {
        return <DetailStatCard statName={detail} statValue={detail}/>
    })

    const detailTypeList = details.types?.map((detail) => {
        return <DetailTypeCard type={detail}/>
    })

    const detailMoveList = details.moves?.map((detail) => {
        return <DetailMoveCard move={detail} />
    })
    console.log(details)

    const verifyPokemon =(namePokemon)=>{       
        const existPokemon =  pokedexList.pokedex.some((pokemon)=>{
            return pokemon.name === namePokemon
        })        
        if(existPokemon){
           removePokemon(namePokemon)
           alert("pokemon removido da pokedex")
        } else {
            pokedexList.pokemons.map((pokemon)=>{
                if(pokemon.name === namePokemon){
                    addPokemon(pokemon)
                    alert("pokemon adicionado na pokedex")
                }
                return true
            })             
        }     
    }

    const removePokemon = (namePokemon) =>{

        const listPokedexFiltered = pokedexList.pokedex && pokedexList.pokedex.filter((poke)=>{
              return poke.name !== namePokemon
        }) 

        pokedexList.setPokedex(listPokedexFiltered)     
    } 

    const addPokemon= (pokemon) =>{          
       
        const newPokeList = [...pokedexList.pokedex, pokemon]           
        pokedexList.setPokedex(newPokeList)    
   
    } 
    
    return (
        <DetailPageContainer>

            <DetailPageHeader>

                <GoBackButton onClick={() =>goToPreviousPage(history)}>Voltar</GoBackButton>
                <PokeNameTitle>{pokemonName}</PokeNameTitle>
                <AddRemoveButton onClick={()=>verifyPokemon(pokemonName)}>Adicionar / Remover da Pokedex</AddRemoveButton>

            </DetailPageHeader>

            <DetailPageMain>

                <DetailImgFront src={frontImg} alt="imagem do pokemon de frente"/>
                <DetailImgBack src={backImg} alt="imagem do pokemon de costas"/>            

                <DetailsList>
                    
                    <DetailStat><h2>STATUS</h2> {detailStatList} </DetailStat>
                    <DetailType><h2>TIPO</h2> {detailTypeList} </DetailType>
                    <DetailMove><h2>ATAQUES</h2> {detailMoveList}</DetailMove>

                </DetailsList>

            </DetailPageMain>

        </DetailPageContainer>
    )
}

export default PokemonDetailPage;