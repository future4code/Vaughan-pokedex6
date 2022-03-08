import styled from 'styled-components'

export const Conteiner = styled.div`
    height: 100vh;
    display: grid ;
    grid-template-rows: 1fr 18fr 1fr;
    grid-template-columns: 1fr;
    border: 2px solid black;
    margin: 10px;
    border-radius: 10px;
    min-height: 500px;
`
export const Header = styled.header`
    display: flex ;
    background-color: #ff3334;
    height: 15vh;
    border-radius: 10px 10px 0px 0px;
`
export const Centralizador = styled.div`
    display: flex;
`
export const Left = styled.div`
    display: flex ;
    height: 100% ;
    flex-direction: column;
    background-color: #ff3334;
    float: left;
    width: 5vw;
    margin: 0px;
`
export const Center = styled.div`
    display: flex ;
    display: inline-block;
    width: 89%;
    height: 100% ;
    margin: 0px;
    border: 2px solid black;
`
export const Right = styled.div`
    display: flex ;
    height: 100% ;
    flex-direction: column;
    background-color: #ff3334;
    float: left;
    width: 5vw;
    margin: 0px;
`
export const Footer = styled.footer`
    display: flex ;
    background-color: #ff3334;
    height: 20vh;
    border-radius: 0px 0px 10px 10px;
    min-height: 150px;
`
//style footer

export const ConteinerFooter = styled.div`
    background-color: #636363;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-right: 100px;
    margin-left: 100px;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 2px solid black;
    min-height: 90px;
`
export const NameType = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #8dc73f;
    height: 20px;
    border: 2px solid black;
    border-radius: 10px;
    width: 95%;
    margin: 5px;
    padding: 5px;
`

export const BoxBottom = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`
export const Description = styled.div`
    background-color: #8dc73f;
    width: 60%;
    border: 1px solid black;
    margin-top: 10px;
    margin-bottom: 2px;
`





 