import ReactDOM from "react-dom";
import { InputModal } from "./ImputText";
import React, { useState, useEffect } from "react";

export function ExperienceContainer(props) {
  const sendAnswer = (respuestas) => {
    setAnswer(respuestas);
  };
  const [answer, setAnswer] = useState();
  const [listExperience, uselistExperience] = useState([]);

  if (answer) {
    fill();
    uselistExperience(() => {
      listExperience.push(answer);
      return listExperience;
    });
    console.log(listExperience);
  }

  function openModal() {
    let sendAnswer = "";

    ReactDOM.render(
      <InputModal id={"Experience"} sendBack={setAnswer} answer={answer} />,
      document.getElementById("modalContainer")
    );
  }
  console.log(answer);
  function fill() {
    if (answer) {
      console.log("inside fill");
      console.log(answer);
    }
  }

  return (
    <div className="toFill" id="Experience">
      <h2>Work Experience</h2>

      <button onClick={openModal}>testeando</button>
      <button onClick={() => console.log(answer)}>ver respuetas</button>
      <button onClick={() => fill()}>rellena</button>
      <p></p>
    </div>
  );
}
