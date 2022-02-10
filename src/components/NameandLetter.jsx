
import ReactDOM from 'react-dom';
import { InputModal } from "./ImputText";
import React, { useState,useEffect } from "react";


export function NameandLetter(props) {
    
    const  sendAnswer=(respuestas)=>{setAnswer(respuestas)}
    const[answer,setAnswer]= useState("respuesta")

    function openModal(){
        let sendAnswer=""
        let atributo="testeto"
        
        
            ReactDOM.render( <InputModal id={'personalData'} atributo={atributo} sendBack={setAnswer} />,document.getElementById('modalContainer'))
        }
        function fill(){
            document.querySelector('#address').textContent=answer.Address
        
        }
        
    return (
        <>
        <p className="question">ADDRESS</p>
        <p id="address">    </p>
        <p className="question">PHONE</p>
        <p>     </p>
        <p className="question">EMAIL</p>
        <p></p>
        <p className="question">WEB</p>
        <button onClick={openModal}   
        >testeando</button>
        <button onClick={()=>console.log(answer)}>ver respuetas</button>
        <button onClick={()=>fill()}>rellena</button>
        <p></p>
        </>
    )
}


