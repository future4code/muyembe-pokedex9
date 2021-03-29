import React from 'react';
import {DetailMoveContainer, DetailMoveName} from "./styled";

const DetailMoveCard = (props) => {

    return (    
        <DetailMoveContainer>
            <DetailMoveName>{props.move.move.name}</DetailMoveName>
        </DetailMoveContainer>
    )
}

export default DetailMoveCard;