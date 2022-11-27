import {useState,useEffect} from 'react'

const useFetch=(dato)=>{
    //Custom hook que recibe como parámetro dato y realiza la petición a la api cuando se pulsa el botón search
    const [info,setInfo]=useState([])
    const [isLoading, setIsLoading]=useState(false)
    const [error,setError]=useState("")

    const getData=()=>{
        setIsLoading(true)
        
        console.log("dato: "+dato)
        fetch("https://api.github.com/users/"+dato)
        .then(res=>res.json())
        .then(data=>{
            setIsLoading(false)
            if(data.message==="Not Found"){
                //Manejamos el error en caso de haberlo
                setInfo("")
                setIsLoading(false)
                setError("Error")
                console.log("hay un error")
            }else{
                setInfo(data)
                setError("")
            }
        })
        
        
    }
    useEffect(()=>{
        console.log(info)
        console.log(error)
    },[info])

    return{
        info,
        isLoading,
        error,
        getData
    }
}
export default useFetch