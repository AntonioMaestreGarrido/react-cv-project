import ReactDOM from "react-dom";
import { InputModal } from "./ImputText";
import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
import { buildQueries } from "@testing-library/react";

export function Education(props) {
  console.log(props);
  const [answer, setAnswer] = useState([]);
  const [index, setIndex] = useState(0)
  const sumIndex = () => { setIndex(index + 1); return index }
  console.log("el infdex es :" + index)
  function openModal() {
    ReactDOM.render(
      <InputModal
        id={"Education"}
        sendBack={setAnswer}
        answer={answer}
        allowArray={true}
      />,
      document.getElementById("modalContainer")
    );
    document.querySelector("form").style.display = "block";
  }

  return (
    <div className="toFill" id="Education" onMouseEnter={(e) => {

      const buttonList = e.currentTarget.querySelectorAll("button")

      buttonList.forEach(boton => { boton.classList.add('visible') })

    }}
    onMouseLeave={(e) => {

      const buttonList = e.currentTarget.querySelectorAll("button")

      buttonList.forEach(boton => { boton.classList.remove('visible') })

    }}
    >
      <h2>Formacion</h2>
      

      {answer.map(function (item, index) {

        console.log("el infdex es :" + index)
        return (
          <div key={uniqid()} className="ExperienceList" index={index} color="blamnco">
            <div className="educationInfo">
              {" "}
              <p >School: {item.School}</p>
              <p >Grade: {item.Course}</p>
            </div>
            <div className="educationDates">
              <p>From: {item.From}</p>
              <p>Until: {item.Until}</p>
            </div>
            <button className="deletebutton" onClick={(e) => {
              let i = parseInt(e.currentTarget.parentElement.getAttribute("index"));
              let tempAnswer = answer; console.log("i igual a " + i); (tempAnswer.splice(i, 1));
              setAnswer(tempAnswer); sumIndex()
            }}></button>


          </div>
        );
      })}

      <button onClick={openModal}>Add</button>

      <button onClick={(e) => console.log(e.currentTarget)}>ver respuetas</button>
      <button
        onClick={() => setAnswer([...answer, answer[answer.length - 1] + 1])}
      >
        rellena
      </button>
      <p></p>
    </div>
  );
}
