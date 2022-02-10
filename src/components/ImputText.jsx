import React, { useState } from "react";
import "./InputModal.css"
import formBlueprint from '../data/modals.json'
import uniqid from 'uniqid';


export function InputModal(props) {

    // const [x, setX] = useState(160)
    ///const [y, setY] = useState(160)

    if (props.data === 0) { return null }

    const dataForForm = formBlueprint[props.id]
    console.log(props)



    let formStyle = {
        position: "absolute",
        top: `${dataForForm.posicion.y}px`,
        left: `${dataForForm.posicion.x}px`
    }
    return (
        <>
            <form autoComplete="off" id={dataForForm.id} style={formStyle}>
                <div className="modalInputBox" key={uniqid()}>
                    <h1>{dataForForm.title} </h1 >

                    <div>
                        {dataForForm.campos.map((ele) => {
                            return (
                                <div className="inputContaines" key={uniqid()}>

                                    <label htmlFor={ele.id} >{ele.id} </label >
                                    <input id={ele.id} name={ele.id} type="text"
                                        key={uniqid()} placeholder={ele.place} size={20} />

                                </div>
                            )
                        })}
                    </div>

                    <div className="areaTexto">
                        <p>{dataForForm.areaTexto[0].id}</p>
                        <textarea name="areaTexto" placeholder={dataForForm.areaTexto[0].place} key={uniqid()}
                            rows={dataForForm.areaTexto[0].ancho} placeholder={dataForForm.areaTexto[0].place} ></textarea>
                    </div>
                    <div className="buttonContainer">

                        <button onClick={(e, title) => { test(e, dataForForm.id) }} type="send">Send</button>
                        <button type="reset">Clear</button>
                        <button onClick={console.log("borra")} type="button">Close</button>
                        <button onClick={(e,respuesta) => {
                            respuesta= test(e, dataForForm.id)
                            props.sendBack(respuesta) ;

                        }
                        } type="button">vuelta </button>
                        





                    </div>

                </div>
            </form>
        </>
    )
}
// get an objet with fom values
function test(e, title) {
    const form = document.querySelector(`#${title}`)
    console.log(form)
    let formData = '{'
    for (var i = 0; i < form.elements.length; i++) {
        var fieldName = form.elements[i].name;
        var fieldValue = form.elements[i].value;
        formData += '"' + fieldName + '":"' + fieldValue + '",'

    }
    formData = formData.substring(0, formData.length - 1)
    formData += '}'
    let respuesta = JSON.parse(formData)
    console.log(respuesta)
    return respuesta
}
