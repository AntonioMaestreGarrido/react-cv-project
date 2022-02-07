import React from "react";
import "./InputModal.css"



export function InputModal(props) {

    
    if (props.data === 0) {  return null }
    

    const { title, botones, campos, areaTexto, posicion } = props.data
    const { borrar } = props.data
    


    let formStyle = {
        position: "absolute",
        top: `${posicion[1]}px`,
        left: `${posicion[0]}px`


    }


    return (
        <>
            <form autoComplete="off" id={title} style={formStyle}>
                <div className="modalInputBox">
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
                        <textarea name="areaTexto"rows={areaTexto[1]} placeholder={areaTexto[1]} ></textarea>
                    </div>
                    <div className="buttonContainer">

                        <button onChange={(e) => console.log(e)} type="send">Send</button>
                        <button type="reset">Clear</button>
                        <button onClick={borrar} type="button">Close</button>
                        <button onClick={test}>test</button>




                    </div>

                </div>
            </form>
        </>
    )
}
function test(){
    let titulo="test2"
    const form=document.querySelector("#test2")
    var params = '';
    console.log(form.elements.length)
for( var i=0; i<form.elements.length; i++ )
{
   var fieldName = form.elements[i].name;
   var fieldValue = form.elements[i].value;
   console.log(fieldName+":"+fieldValue)
   
   // use the fields, put them in a array, etc.

   // or, add them to a key-value pair strings, 
   // as in regular POST

   params += fieldName + '=' + fieldValue + '&';
}
}