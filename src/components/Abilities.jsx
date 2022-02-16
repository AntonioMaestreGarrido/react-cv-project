import ReactDOM from "react-dom";
import { InputModal } from "./ImputText";
import React, { useState, useEffect } from "react";
import uniqid from "uniqid";

export function Abilities(props) {
  console.log(props);
  const [answer, setAnswer] = useState([]);

  function openModal() {
    ReactDOM.render(
      <InputModal
        id={"Abilities"}
        sendBack={setAnswer}
        answer={answer}
        allowArray={true}
      />,
      document.getElementById("modalContainer")
    );
    document.querySelector("form").style.display = "block";
  }
  console.log("antes de renderizar");
  console.log(answer);
  return (
    <div className="toFill" id="Skills">
      <h2>Skills</h2>
      <hr></hr>

      {answer.map(function (item) {
        console.log("itemen");
        console.log(item);
        return (
          <div key={uniqid()} className="SkillsList">
            <div>
              <p className="skill" key={uniqid()}>{item.skill}</p>
              <p className="level" key={uniqid()}>{item.level}</p>
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
