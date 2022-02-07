import react from "react";

export function Hoja(props) {
    console.log(props)

    return(
<div>
            <div id="nombre">Aqui deberia de ir el nombre</div>
            <div id="apellido">y aqui el apellido</div>
            {<button onClick={()=>{props.f("title2")}}>test modal</button>}
</div>

    )
}
