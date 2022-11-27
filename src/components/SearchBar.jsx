import React,{useState, useEffect} from 'react'
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
            <div className="card_search">
                <div className="card_input">
                    <input onChange={handlerChange}  placeholder='Search Github username...' id="searchBar"/>
                </div>
                <div className="card_button">
                    <button onClick={getData}>Search</button>
                </div>
                
            </div>
            <div className="card_data">
                <CardData isLoading={isLoading} info={info} error={error}></CardData>
            </div>
        </div>
    )
}