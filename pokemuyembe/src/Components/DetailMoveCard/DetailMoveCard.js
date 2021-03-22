import React from 'react';
import {DetailMoveContainer, DetailMoveName} from "./styled";

const DetailMoveCard = (props) => {

    return (    
        <DetailMoveContainer>
            <DetailMoveName key={props.id}>{props.move.ability.name}</DetailMoveName>
        </DetailMoveContainer>
    )
}

export default DetailMoveCard;