import axios from "axios";
import React, { useEffect, useState,useContext } from "react";
import {useHistory,useParams} from "react-router-dom";
import {goToPreviousPage} from "../../Routes/Coordinator";
import DetailStatCard from "../../Components/DetailStatCard/DetailStatCard";
import DetailTypeCard from "../../Components/DetailTypeCard/DetailTypeCard";
import DetailMoveCard from "../../Components/DetailMoveCard/DetailMoveCard";
import {DetailPageContainer, DetailsList} from "./styled";
import {ContextPokemon} from '../../context/context'

const PokemonDetailPage = () => {
    const [details, setDetails] = useState({})
    const [frontImg, setFrontImg] = useState({})
    const [backImg, setBackImg] = useState({})
    const history = useHistory();
    const param = useParams(); 
    const pokedexList = useContext(ContextPokemon)

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${param.pokeName}`)
        .then((response) => {            
            setDetails(response.data)
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
        return <DetailMoveCard move={detail}/>
    })

    const verifyPokemon =(namePokemon)=>{       
        const existPokemon =  pokedexList.pokedex.some((pokemon)=>{
            return pokemon.name === namePokemon
        })  
        console.log(existPokemon)
        if(existPokemon){
           removePokemon(namePokemon)
           alert("pokemon removido da pokedex")
        } else {
           alert("pokemon adicionado")
        }     
    }

    const removePokemon = (namePokemon) =>{

        const listPokedexFiltered = pokedexList.pokedex && pokedexList.pokedex.filter((poke)=>{
              return poke.name !== namePokemon
        }) 

        pokedexList.setPokedex(listPokedexFiltered)     
    } 
    
    return (
        <DetailPageContainer>
            <h1>Página de detalhes do pokemon</h1>
            <button onClick={() =>goToPreviousPage(history)}>Voltar</button>
            <button onClick={()=>verifyPokemon(param.pokeName)}>Adicionar / Remover da Pokedex</button>

            <img src={frontImg} alt="imagem do pokemon de frente"/>
            <img src={backImg} alt="imagem do pokemon de costas"/>

            <DetailsList>
                <div>{detailStatList}</div>
                <div>{detailTypeList}</div>
                <div>{detailMoveList}</div>
            </DetailsList>            
        </DetailPageContainer>
    )
}

export default PokemonDetailPage;