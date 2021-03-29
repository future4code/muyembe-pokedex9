import styled from 'styled-components'

export const DetailPageContainer = styled.div`
    width: 100%;
`

export const DetailPageHeader = styled.div`
    width: 100%;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   background-color: darkslategray;
   color: white;
`

export const GoBackButton = styled.button`
    width: 180px;
    height: 40px;
    align-self: center;
    margin-left: 20px;
    border-radius: 5px;
`

export const PokeNameTitle = styled.h1`
    width: 180px;
    text-align: center;
    font-size: 36px;
`

export const AddRemoveButton = styled.button`
    width: 220px;
    height: 40px;
    align-self: center;
    margin-right: 20px;
    border-radius: 5px;
`

export const DetailPageMain = styled.div`
    width: 100%;
    display: grid;
    grid-template-rows: 320px 320px;
    grid-template-columns: 280px 280px 280px;
    justify-content: space-evenly;
    margin-top: 80px;
`

export const DetailImgFront = styled.img`
    width: 200px;
    display: grid;
    grid-row: 1/2;
    grid-column: 1/2;
    border: 1px solid black;
    border-radius: 300px;
    box-shadow: 5px 5px lightslategray;
    margin: 20px 20px;
    align-self: center;
    justify-self: center;
    background-color: lightgray;
`

export const DetailImgBack = styled.img`
    width: 200px;
    grid-row: 2/3;
    grid-column: 1/2;
    border: 1px solid black;
    border-radius: 300px;
    box-shadow: 5px 5px lightslategray;
    align-self: center;
    justify-self: center;
    background-color: lightgray;
`

export const DetailsList = styled.div`
    display: grid;
    grid-template-rows: 2fr 2fr;
    grid-template-columns: 280px 280px;
    text-align: center;
`

export const DetailStat = styled.div`
   grid-row: 1/3;
   grid-column: 1/2;
`

export const DetailType = styled.div`
   grid-row: 1/2;
   grid-column: 2/3;
`
export const DetailMove = styled.div`
   grid-row: 2/3;
   grid-column: 2/3;
`