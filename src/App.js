import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import { InputModal } from "./components/ImputText";
import { NameandLetter } from "./components/NameandLetter";
//<InputModal data={mockdata} />

function App() {
  return (
    <div className="App">
      <NameandLetter />

      <button onClick={showmodal(mockdata)}>test modal</button>
    </div>
  );
}

export default App;

function showmodal(datos) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
      <InputModal data={datos} />
    </React.StrictMode>,
    document.getElementById("root")
  );
}
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
};
