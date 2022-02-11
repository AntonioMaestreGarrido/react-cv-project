
import ReactDOM from 'react-dom';
import { InputModal } from "./ImputText";
import React, { useState, useEffect } from "react";


export function PersonalData(props) {

    const sendAnswer = (respuestas) => { setAnswer(respuestas) }
    const [answer, setAnswer] = useState()
    if(answer){fill()}

    function openModal() {
        let sendAnswer = ""


        ReactDOM.render(<InputModal id={'personalData'} sendBack={setAnswer}answer={answer} />, document.getElementById('modalContainer'))
    }
    function fill() {
        if (answer) {
            console.log("inside fill")
            console.log(answer)
            document.querySelector('#personaldata>#Address').textContent = answer.Address
            document.querySelector('#personaldata>#Phone').textContent = answer.Phone
            document.querySelector('#personaldata>#Mail').textContent = answer.Mail
            document.querySelector('#personaldata>#Personalweb').textContent = answer["Personal web"]
        }


    }

    return (

        <div className='toFill' id="personaldata">
            <p className="question">ADDRESS</p>
            <p id="Address">  -  </p>
            <p className="question">PHONE</p>
            <p id="Phone">   -  </p>
            <p className="question">EMAIL</p>
            <p id='Mail'>-</p>
            <p className="question">WEB</p>
            <p id='Personalweb'>-</p>
            <button onClick={openModal}
            >testeando</button>
            <button onClick={() => console.log(answer)}>ver respuetas</button>
            <button onClick={() => fill()}>rellena</button>
            <p></p>
        </div>

    )
}


