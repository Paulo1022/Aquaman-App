import React from "react";
import "./texto.css";
function Texto() {

    return (
        <div className="texto_contatos">
            <span id="titulo_text_area">Mande sua mensagem!</span>
            <textarea style={{display: 'block'}} name="mensagem"> </textarea>
        </div>
    )
}

export default Texto;