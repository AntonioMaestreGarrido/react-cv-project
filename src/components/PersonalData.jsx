import ReactDOM from "react-dom";
import { InputModal } from "./ImputText";
import React, { useState, useEffect } from "react";
import uniqid from "uniqid";

export function PersonalData(props) {
  const [answer, setAnswer] = useState({
    Addres: "",
    Phone: "",
    Mail: "",
    "Personal Web": ""
  });

  function openModal() {
    console.log("intentado abrir modal ");
    ReactDOM.render(
      <InputModal
        id={"PersonalData"}
        allowArray={false}
        sendBack={setAnswer}
        answer={answer}
      />,
      document.getElementById("modalContainer")
    );
  }

  return (
    <div key={uniqid()} className="toFill" id="personaldata">
      <h2>Personal Info</h2>
      <p key={uniqid()} className="question">
        ADDRESS
      </p>
      <p key={uniqid()} className="answer" id="Address">
        {answer.Address}
      </p>
      <p key={uniqid()} className="question">
        PHONE
      </p>
      <p key={uniqid()} id="Phone" className="answer">
        {answer.Phone}
      </p>
      <p key={uniqid()} className="question">
        EMAIL
      </p>
      <p key={uniqid()} id="Mail" className="answer">
        {answer.Mail}
      </p>
      <p key={uniqid()} className="question">
        WEB
      </p>
      <p key={uniqid()} id="Personalweb" className="answer">
        {answer["Personal web"]}
      </p>
      <button key={uniqid()} onClick={openModal}>
        testeando
      </button>
      <button key={uniqid()} onClick={() => console.log(answer)}>
        ver respuetas
      </button>
    </div>
  );
}
