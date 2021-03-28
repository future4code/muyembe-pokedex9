import styled from 'styled-components'

export const ContainerListPokemons = styled.div`
     display:flex;
     flex-wrap:wrap;
     justify-content:center;
     row-gap:10px;     
`
export const ContainerHome = styled.div`
    width:100%;
`
export const HomeHeader = styled.div`
   width: 100%;
   display: grid;   
   align-items: center;
   grid-template-columns:auto auto auto ;
   justify-items:flex-start;
   background-color: darkslategray;
   color: white;
   margin-bottom:10px;
`
export const ContainerButton =styled.div`
   margin: 0 10px;   
`
export const GoPokedexButton = styled.button`
    width: 120px;
    height: 40px;
    align-self: center;
    margin-left: 20px;
    border-radius: 5px;
`
export const GoPreviousPageButton = styled.button`
    width: 120px;
    height: 40px;
    align-self: center;
    margin-left: 20px;
    border-radius: 5px;
`
export const GoNextPageButton = styled.button`
    width: 120px;
    height: 40px;
    align-self: center;
    margin-left: 20px;
    border-radius: 5px;
`