import ReactDOM from 'react-dom';
import { InputModal } from "./ImputText";
import React, { useState, useEffect } from "react";


export function NameAndProfile(props) {

    const sendAnswer = (respuestas) => { setAnswer(respuestas) }
    const [answer, setAnswer] = useState()
    if(answer){fill()}
       
    //useEffect(fill, answer)
    console.log([answer])

    function openModal() {
        let sendAnswer = ""
        

        ReactDOM.render(<InputModal id={'NameAndProfile'} sendBack={setAnswer} answer={answer}/>, document.getElementById('modalContainer'))
    }
    function fill() {

        if (answer) {
            console.log("inside fill")
            console.log( answer)
            console.log( answer.Nombre)
            document.querySelector('#NameAndProfile>#Name').textContent = answer.Nombre
            document.querySelector('#NameAndProfile>#Profile').textContent = answer.Profile
       
        }


    }

    return (

        <div className='toFill' id="NameAndProfile">
            <h1 id= "Name">Name</h1> 
            
            <p className="question">Profile</p>
            <p id="Profile" >     </p>
            
            <button onClick={openModal}
            >testeando</button>
            <button onClick={() => console.log(answer)}>ver respuetas</button>
            <button onClick={() => fill()}>rellena</button>
            <p></p>
        </div>

    )
}