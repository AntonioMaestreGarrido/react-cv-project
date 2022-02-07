import React from "react";
import "./InputModal.css"



export function InputModal(props) {

    console.log(props.data)
    if (props.data === 0) { console.log("antes null"); return null }
    console.log("post null")

    const { title, botones, campos, areaTexto, posicion } = props.data
    const { borrar } = props.data
    console.log("borrar en compoe")
    console.log(borrar)


    let formStyle = {
        position: "absolute",
        top: `${posicion[1]}px`,
        left: `${posicion[0]}px`


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

                        <button type="button">Send</button>
                        <button type="reset">Clear</button>
                        <button onClick={borrar} type="button">Close</button>




                    </div>

                </div>
            </form>
        </>
    )
}