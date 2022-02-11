
import ReactDOM from 'react-dom';
import { InputModal } from "./ImputText";
import React, { useState, useEffect } from "react";


export function Experience(props) {

    const sendAnswer = (respuestas) => { setAnswer(respuestas) }
    const [answer, setAnswer] = useState()
    if(answer){fill()}

    function openModal() {
        let sendAnswer = ""


        ReactDOM.render(<InputModal id={'Experience'} sendBack={setAnswer}answer={answer} />, document.getElementById('modalContainer'))
    }
    function fill() {
        if (answer) {
            console.log("inside fill")
            console.log(answer)
            document.querySelector('.ExperienceList>.Empresa').textContent = answer.Empresa
            document.querySelector('.ExperienceList>.Puesto').textContent = answer.Puesto
            document.querySelector('.ExperienceList>.From').textContent = answer.From
            document.querySelector('.ExperienceList>.Until').textContent = answer.Until
        }


    }

    return (

        <div className='toFill' id="Experience">

           <h2>Work Experience</h2>
           <hr></hr>
           < div className='ExperienceList'>
               <p className='Empresa'>-</p>
               <p className='Puesto'>-</p>
               <p className='From'>-</p>
               <p className='Until'>-</p>
           </ div>
            <button onClick={openModal}
            >testeando</button>
            <button onClick={() => console.log(answer)}>ver respuetas</button>
            <button onClick={() => fill()}>rellena</button>
            <p></p>
        </div>

    )
}


