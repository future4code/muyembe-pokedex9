import axios from "axios";
import React, { useEffect, useState } from "react";
import {useHistory} from "react-router-dom";
import {goToPreviousPage} from "../../Routes/Coordinator";
import {useParam} from "react-router-dom";
import DetailStatCard from "../../Components/DetailStatCard";

const PokemonDetailPage = () => {
    const [detailStat, setDetailStat] = useState({})
    const history = useHistory();
    const param = useParam();

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/stat/${param.id}`)
        .then((response) => {
            setDetailStat(response.data.results)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])

    const detailStatList = detailStat.map((detail) => {
        return <DetailStatCard stat={detail.stat} />
    })
    return (
        <div className="home-container">
            <h1>Página de detalhes do pokemon</h1>
            <div>{detailStatList}</div>
            <button onClick={() =>goToPreviousPage(history)}>Voltar</button>
            <button>Adicionar / Remover da Pokedex</button>
        </div>
    )
}

export default PokemonDetailPage;