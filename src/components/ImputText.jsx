import React, { useState } from "react";
import "./InputModal.css"
import formBlueprint from'../data/modals.json'



export function InputModal(props) {
    
   // const [x, setX] = useState(160)
    ///const [y, setY] = useState(160)
    
    if (props.data === 0) { return null }
    
    const dataForForm=formBlueprint[props.data]
    console.log(dataForForm.areaTexto[0].place)
    
    
    let formStyle = {
        position: "absolute",
        top: `${dataForForm.posicion.y}px`,
        left: `${dataForForm.posicion.x}px`
    }
    return (
        <>
            <form autoComplete="off" id={dataForForm.title} style={formStyle}>
                               <div className="modalInputBox" >
                    <h1>{dataForForm.title}</h1>

                    <div>
                        {dataForForm.campos.map((ele) => {
                            return (
                                <div className="inputContaines">

                                    <label htmlFor={ele.id} >{ele.id}</label>
                                    <input id={ele.id}  name={ele.id} type="text" placeholder={ele.place} size={20} />

                                </div>
                            )
                        })}
                    </div>

                    <div className="areaTexto">
                        <p>{dataForForm.areaTexto[0].id}</p>
                        <textarea name="areaTexto" placeholder={dataForForm.areaTexto[0].place} rows={dataForForm.areaTexto[0].ancho} placeholder={dataForForm.areaTexto[0].place} ></textarea>
                    </div>
                    <div className="buttonContainer">

                        <button onClick={(e, title) => { console.log(dataForForm.title); test(e, dataForForm.title) }} type="send">Send</button>
                        <button type="reset">Clear</button>
                        <button onClick={console.log("borra")} type="button">Close</button>
                        
                        



                    </div>

                </div>
            </form>
        </>
    )
}
function test(e, title) {
    console.log(e, title)
    let titulo = "test2"
    const form = document.querySelector(`#${title}`)
    var params = '';
    Array.from(Array(2), () => new Array(4))
    const data = []
    console.log(form.elements.length)
    for (var i = 0; i < form.elements.length; i++) {
        var fieldName = form.elements[i].name;
        var fieldValue = form.elements[i].value;
        data[i]=[]


        console.log(fieldName + ":" + fieldValue)
        data[i].push(fieldName)
        data[i].push(fieldValue)
        
        
        // use the fields, put them in a array, etc.

        // or, add them to a key-value pair strings, 
        // as in regular POST

        params += fieldName + '=' + fieldValue + '&';
    }
    console.table(data)
}