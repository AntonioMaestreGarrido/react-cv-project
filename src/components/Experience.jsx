import ReactDOM from "react-dom";
import { InputModal } from "./ImputText";
import React, { useState, useEffect } from "react";
import { ExperienceContainer } from "./ExperienceContainer";
import uniqid from "uniqid";

export function Experience(props) {
  console.log(props);
  const [answer, setAnswer] = useState([]);

  function openModal() {
    ReactDOM.render(
      <InputModal
        id={"Experience"}
        allowArray={true}
        sendBack={setAnswer}
        answer={answer}
      />,
      document.getElementById("modalContainer")
    );
    document.querySelector("form").style.display = "block";
  }

  return (
    <div className="toFill" id="Experience">
      <h2>Work Experience</h2>
      <hr></hr>

      {answer.map(function (item) {
        console.log("itemen");
        console.log(item);
        return (
          <div key={uniqid()} className="ExperienceList">
            <div>
              {" "}
              <p>{item.Empresa}</p>
              <p>{item.Puesto}</p>
            </div>
            <div>
              <p>{item.From}</p>
              <p>{item.Until}</p>
            </div>
          </div>
        );
      })}

      <button onClick={openModal}>testeando</button>

      <button onClick={() => console.log(answer)}>ver respuetas</button>
      <button
        onClick={() => setAnswer([...answer, answer[answer.length - 1] + 1])}
      >
        rellena
      </button>
      <p></p>
    </div>
  );
}
