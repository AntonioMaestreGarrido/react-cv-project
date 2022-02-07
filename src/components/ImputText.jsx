import React from "react";
import "./InputModal.css"



export function InputModal(props) {


    const { title, botones, campos, areaTexto, posicion } = props.data
let d="red"

    console.log(posicion[2],d)

    let formStyle = {
        position: "absolute",
        top: `${posicion[1]}px`,
        left:`${posicion[0]}px`
        
        
    }


    return (
        <>
            <form autoComplete="off" style={formStyle}>
                <div className="modalInputBox">
                    <h1>{title}</h1>

                    <div>
                        {campos.map((ele) => {
                            return (
                                <div className="inputContaines">

                                    <label htmlFor="name" >{ele[0]}</label>
                                    <input id="name" type="text" placeholder={ele[2]} size={20} />

                                </div>
                            )
                        })}
                    </div>

                    <div className="areaTexto">
                        <p>{areaTexto[0]}</p>
                        <textarea rows={areaTexto[1]} placeholder={areaTexto[1]} ></textarea>
                    </div>
                    <div className="buttonContainer">
                        {botones.map((ele) => {
                            return (
                                <div className="inputContainer">
                                    <button type="button">{ele[0]}</button>

                                </div>
                            )
                        })}
                    </div>

                </div>
            </form>
        </>
    )
}