import React, { useState } from "react";
import {unmountComponentAtNode} from "react-dom";
import "./InputModal.css"
import formBlueprint from '../data/modals.json'
import uniqid from 'uniqid';


export function InputModal(props) {

    // const [x, setX] = useState(160)
    ///const [y, setY] = useState(160)

    if (props.data === 0) { return null }
    
    const dataForForm = formBlueprint[props.id]
    console.log(props)
    console.log( props.answer)


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
                            let id=ele.id.replaceAll(' ','')
                            let defo=""
                            if(props.answer)
                            {console.log(ele.id)
                            defo=props.answer[ele.id]}



                            //{if (props.answer[ele.id]!= undefined){defo=ele.id}}
                            return (
                                <div className="inputContaines" key={uniqid()}>
                                    <label htmlFor={ele.id} >{ele.id} </label >
                                    <input id={id} name={ele.id} type="text"
                                        key={uniqid()} placeholder={ele.place} size={20}
                                        defaultValue={defo} />

                                </div>
                            )
                        })}
                    </div>
                    <div className="areaTexto">
                        {dataForForm.areaTexto.map((ele) => {
                            return (<>
                                
                                <p>{ele.id}</p>
                                <textarea name={ele.id.replace(/ /g, "")} placeholder={ele.place} key={uniqid()} rows={ele.ancho}  ></textarea>

                            </>)
                        })
                        }
                    </div>
                    
                    <div className="buttonContainer">

                        
                        <button type="submit" onClick={(e, respuesta) => {
                            respuesta = test(e, dataForForm.id)
                                close()
                            props.sendBack(respuesta);


                        }
                        } type="button">Send </button>
                        <button type="reset">Clear</button>
                        <button onClick={()=>(close())} type="button">Close</button>
                        






                    </div>

                </div>
            </form>
        </>
    )
}
// get an objet with fom values string.replace(/ /g, "")
function test(e, title) {
    const form = document.querySelector(`#${title}`)
    console.log(title)
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
function close(){unmountComponentAtNode(document.getElementById('modalContainer'))

}