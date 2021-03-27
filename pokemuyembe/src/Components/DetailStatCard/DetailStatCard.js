import React from 'react';
import { DetailStatContainer, DetailStatName, DetailStatValue } from "./styled";


const DetailStatCard = (props) => {

    return (    
        <DetailStatContainer>
            <DetailStatName>{props.statName.stat.name}</DetailStatName>
            <DetailStatValue>{props.statValue.base_stat}</DetailStatValue>
        </DetailStatContainer>
    )
}

export default DetailStatCard;