import "./App.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { InputModal } from "./components/ImputText";
import { NameandLetter } from "./components/NameandLetter";
//<InputModal data={mockdata} />



function App() {
  const[showModal ,setShowModal]=useState(0)
  console.log( "showModal")
  console.log( showModal)
const mockdata2 = {
  title: "dededdddddddddddddddddddddd",
  posicion: [500, 150, "white"],
  campos: [
    ["nombre", 10, "tu nombre"],
    ["nombre", 10, "tu nombre"],
    ["apellido", 10, "tu apellido"],
    ["nombre", 10, "tu nombre"],
    ["nombre", 10, "tu nombre"],
    ["apellido", 10, "tu apellido"],
  ],
  
  
  areaTexto: ["About me", 5],

  botones: [["enviar"], ["cerrar"], ["ala mierda"]],
  borrar:function(){ setShowModal(0)},
};
const mockdata = {
  title: "titulo",
  posicion: [500, 150, "white"],
  campos: [
    ["nombre", 10, "tu nombre"],
    ["nombre", 10, "tu nombre"],
    ["apellido", 10, "tu apellido"],
  ],

  areaTexto: ["About me", 5],

  botones: [["enviar"], ["cerrar"], ["ala mierda"]],
  borrar:function(){ setShowModal(0)},
};
console.log("app")
console.log(showModal)
  return (
    <div className="App">
      <NameandLetter />
    <InputModal data ={showModal}/>
    
      <button onClick={()=>setShowModal(0)}>test modal</button>
      <button onClick={()=>setShowModal(mockdata)}>test modal</button>
      <button onClick={()=>setShowModal(mockdata2)}>test modal</button>
    </div>
  );
}

export default App;


