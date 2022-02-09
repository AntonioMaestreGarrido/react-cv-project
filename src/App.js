import "./App.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { InputModal } from "./components/ImputText";
import { NameandLetter } from "./components/NameandLetter";
import { Hoja } from "./components/hoja";

//<InputModal data={mockdata} />

function App() {
  const [showModal, setShowModal] = useState(0);

  const testState = (state) => {
    console.log("el modal es " + showModal);
    setShowModal(state);
    console.log("el modal es " + showModal);
  };
  


  return (
    <div className="App">
      <NameandLetter />
      <InputModal data={showModal} />

      <div id="containerTest">
        <button onClick={() => setShowModal(0)}>test modal</button>
        <button onClick={() => setShowModal("form1")}>test modal</button>
        <button onClick={() => setShowModal("form2")}>test modal</button>
        <button onClick={() => setShowModal("form3")}>test modal</button>
      </div>
      
    </div>
  );
}

export default App;
