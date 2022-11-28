import React from 'react'
import { CardInfo } from './CardInfo'


export const CardData=({isLoading,info,error,style2})=>{
    console.log("componente cardinfo: "+style2)
    return(
        <>
            {isLoading && 
                <div className="card_dataContainer">
                    <h2 id="cargando">Cargando...</h2>
                </div>}
            {!isLoading && error && 
                <div className="card_dataError">
                    <h2 id="error">{error}</h2>
                </div>}
            {!isLoading && info && 
                <div className="card_dataInfo">
                    <CardInfo info={info} style={style2}></CardInfo>
                </div>}
        </>
        
    )
}