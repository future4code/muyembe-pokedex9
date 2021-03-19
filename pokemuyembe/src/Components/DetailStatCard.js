import axios from 'axios';
import React,{useState,useEffect} from 'react';


const DetailStatCard = (props) => {
    const [nameStat, setNameStat] = useState("")
    const [valueStat, setValueStat] = useState("")
    
    useEffect(() => {
        axios.get(`${props.stat}`)
        .then((response) => {
            setNameStat(response.data.name)
            setValueStat(response.data.game_index)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [props.stat])    

    return ( <div>
        <p>{nameStat}</p>
        <p>{valueStat}</p>
    </div>

    )
}

export default DetailStatCard;