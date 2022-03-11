import styled from 'styled-components'

export const Box = styled.div`
    width: 100vw;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Conteiner = styled.div`
    height: 79vh;
    display: grid ;
    /* grid-template-rows: 1fr 18fr 1fr; */
    /* grid-template-columns: 1fr; */
    /* border: 2px solid black; */
    margin: 10px;
    /* border-radius: 100px; */
    /* min-height: 500px; */
    min-width: 50%;
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
    width: 100%;
    margin: 0px;
    border: 2px solid black;
    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0;
  margin: 0.3rem;
  border: 1px solid #efefef;
  border-radius: 0.2rem;
  min-width: 160px;
  text-align: center;
  box-shadow: 0 3px 15px black;
    
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
    min-height: 180px;
    
`
//style footer

export const ConteinerFooter = styled.div`
    background-color: #636363;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-right: 10vh;
    margin-left: 10vh ;
    margin-top: 1vh;
    margin-bottom: 10px;
    border: 2px solid black;
    min-height: 90px;    
`
export const NameType = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: #8dc73f;
    height: 20px;
    border: 2px solid black;
    border-radius: 10px;
    width: 70%;
    margin: 0 auto 2vh ;
    margin-top: 2vh;
    padding: 5px;
    align-self: center;
    align-items:center;
   
   font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;
`

export const BoxBottom = styled.div`
    display: flex;
    justify-content: center;
 margin: 0 10px
   
    
`
export const Description = styled.div`
    background-color: #8dc73f;
    width: 50%;
    border: 1px solid black;
    margin-top: 10px;
    margin-bottom: 2px;
    
`



