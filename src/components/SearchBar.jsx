import React,{useState} from 'react'
import { CardData } from './CardData'
import useFetch from './hooks/useFetch'

export const SearchBar=(props)=>{
    const [dato,setDato]=useState("")
    
    const handlerChange=(e)=>{
        setDato(e.target.value)
        console.log(dato)
    }
    const {info,isLoading,error,getData}=useFetch(dato)
    //Pasamos los datos resultantes de useFetch al componente hijo que es CardData donde se muestran los resultados de la consulta
    return(
        <div className="card_container">
            <div className={props.style?"card_searchLight":"card_searchDark"}>
                <div className="card_input">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#0378FC" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>&nbsp;
                        <input onChange={handlerChange}  placeholder='Search Github username...' id={props.style?"searchBarLight":"searchBarDark"}/>
                </div>
                <div className="card_button">
                    <button onClick={getData} className="btn btn-primary " id="buttonSearch">Search</button>
                </div>
                
            </div>
            <div className={props.style?"card_dataLight":"card_dataDark"}>
                <CardData isLoading={isLoading} info={info} style={props.style} error={error} ></CardData>
            </div>
        </div>
    )
}