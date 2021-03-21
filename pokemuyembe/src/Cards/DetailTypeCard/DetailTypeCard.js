import React from 'react';
import { DetailTypeContainer, DetailTypeName } from "./styled";


const DetailTypeCard = (props) => {

    return (    
        <DetailTypeContainer>
            <DetailTypeName key={props.id}> {props.type.type.name} </DetailTypeName>
        </DetailTypeContainer>
    )
}

export default DetailTypeCard;