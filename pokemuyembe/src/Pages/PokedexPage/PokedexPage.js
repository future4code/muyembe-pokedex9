import React, { useContext } from "react";
import {useHistory} from "react-router-dom";
import { ContextPokemon } from "../../context/context";
import {goToHomePage} from "../../Routes/Coordinator";
import PokemonCard from '../../Components/PokemonCard/PokemonCard'
import {PokedexContainer, PokedexHeader, HeaderButton, HeaderTitle, ContainerListPokedex} from './styled'

const PokedexPage = () => {
    const history = useHistory(); 
    const listPokedex = useContext(ContextPokemon)    

    const listPokemons = listPokedex.pokedex.map((pokemon)=>{             
        return <PokemonCard url={pokemon.url} pokemon={pokemon} />
   })  
   
    return (
        <PokedexContainer>

            <PokedexHeader>
                <HeaderButton onClick={() =>goToHomePage(history)}>Voltar para lista de pokemons</HeaderButton>
                <HeaderTitle>POKEDEX</HeaderTitle>
            </PokedexHeader>
            
            <ContainerListPokedex>
                {listPokemons}
            </ContainerListPokedex>

        </PokedexContainer>
    )
}

export default PokedexPage;