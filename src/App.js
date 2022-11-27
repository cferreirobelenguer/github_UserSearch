import './App.css';
import { SearchBar } from './components/SearchBar';
import React,{useState} from 'react'

function App() {
  const [style,setStyle]=useState(false)
  const handlerStyle=()=>{
    setStyle(!style)
    console.log(style)
    //Se manda el boolean style al componente hjo SearchBar para gestionar los estilos en función de si es true o dark
  }
  return (
    <div className="App">
      <div className="header">
        <div className="header_title">
          devfinder
        </div>
        <div>
          <button onClick={handlerStyle} >{style? (<h4>Dark</h4>):(<h4>Light</h4>)}</button>
        </div>
      </div>
      <SearchBar style={style}></SearchBar>
    </div>
  );
}

export default App;
