import styled from 'styled-components'

export const PokedexContainer = styled.div`
     
`

export const PokedexHeader = styled.div`
     width: 100%;
     display: flex;
     flex-direction: row;
     background-color: darkslategray;
     color: white;
     margin-bottom: 40px;
`
export const HeaderButton = styled.button`
     width: 200px;
     height: 40px;
     margin-left: 20px;
     align-self: center;
     border-radius: 5px;
`

export const HeaderTitle = styled.h1`
     font-size: 36px;
     display: flex;
     flex-grow: 1;
     justify-content: center;
     margin-right: 100px;
`


export const ContainerListPokedex = styled.div`
     display:flex;
     flex-wrap:wrap;
     justify-content:center;
     row-gap:10px;
`