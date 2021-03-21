import React,{useState} from 'react';
import { DetailStatContainer, DetailStatName, DetailStatValue } from "./styled";


const DetailStatCard = (props) => {
    //const [statInfo, setStatInfo] = useState({})

    return (    
        <DetailStatContainer>
            <DetailStatName key={props.id}>{props.stat.stat.name}</DetailStatName>
            <DetailStatValue key={props.id}>{props.stat.base_stat}</DetailStatValue>
        </DetailStatContainer>
    )
}

export default DetailStatCard;