import React,{useState} from 'react';


const DetailStatCard = (props) => {
    const [stat, setStat] = useState({})
    
    console.log(props.stat.stat.name);
    return ( <div>
        <p>{props.stat.base_stat}</p>
        <p>{props.stat.stat.name}</p>
    </div>

    )
}

export default DetailStatCard;