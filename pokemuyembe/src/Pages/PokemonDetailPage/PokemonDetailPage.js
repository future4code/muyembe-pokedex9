import axios from "axios";

import React, { useEffect, useState } from "react";
import {useHistory,useParams} from "react-router-dom";
import {goToPreviousPage} from "../../Routes/Coordinator";
import DetailStatCard from "../../Cards/DetailStatCard/DetailStatCard";
import DetailTypeCard from "../../Cards/DetailTypeCard/DetailTypeCard";
import {DetailPageContainer, DetailsList} from "./styled";

const PokemonDetailPage = () => {
    const [details, setDetails] = useState({})
    const history = useHistory();
    const param = useParams(); 

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${param.id}`)
        .then((response) => {
            setDetails(response.data)
            console.log(response.data)
        })
    }, [param.id])

    const detailStatList = details.stats?.map((detail) => {
        return <DetailStatCard stat={detail}/>
    })

    const detailTypeList = details.types?.map((detail) => {
        return <DetailTypeCard type={detail}/>
    })
    
    return (
        <DetailPageContainer>
            <h1>Página de detalhes do pokemon</h1>
            <DetailsList>
                <div>{detailStatList}</div>
                <div>{detailTypeList}</div>
            </DetailsList>
            <button onClick={() =>goToPreviousPage(history)}>Voltar</button>
            <button>Adicionar / Remover da Pokedex</button>
        </DetailPageContainer>
    )
}

export default PokemonDetailPage;