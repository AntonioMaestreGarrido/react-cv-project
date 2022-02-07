import React, { useState } from "react";
import "./InputModal.css"



export function InputModal(props) {

    const [x, setX] = useState(160)
    const [y, setY] = useState(160)


    let temporalX
    let temporalY
    if (props.data === 0) { return null }


    const { title, botones, campos, areaTexto, posicion } = props.data
    const { borrar } = props.data

    const mueve = (e) => {


        setX(x + (e.clientX - temporalX))
        setY(y + (e.clientY - temporalY))

    }
    const coge = (e) => {

        temporalX = e.clientX
        temporalY = e.clientY

    }
    const suelta = (e) => {


        setX(x + (e.clientX - temporalX))
        setY(y + (e.clientY - temporalY))

    }
    let formStyle = {
        position: "absolute",
        top: `${y}px`,
        left: `${x}px`
    }
    return (
        <>
            <form autoComplete="off" id={title} style={formStyle} onDrag={mueve}
                onDragStart={coge}
                onDragEnd={suelta} draggable="true">
                <div className="modalInputBox" >
                    <h1>{title}</h1>

                    <div>
                        {campos.map((ele) => {
                            return (
                                <div className="inputContaines">

                                    <label htmlFor={ele[0]} >{ele[0]}</label>
                                    <input id={ele[0]} name={ele[0]} type="text" placeholder={ele[2]} size={20} />

                                </div>
                            )
                        })}
                    </div>

                    <div className="areaTexto">
                        <p>{areaTexto[0]}</p>
                        <textarea name="areaTexto" rows={areaTexto[1]} placeholder={areaTexto[1]} ></textarea>
                    </div>
                    <div className="buttonContainer">

                        <button onClick={(e, title) => { console.log(props.data.title); test(e, props.data.title) }} type="send">Send</button>
                        <button type="reset">Clear</button>
                        <button onClick={borrar} type="button">Close</button>
                        <button onClick={test}>test</button>
                        <button type="button" onClick={console.log(x)}>tewst</button>



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