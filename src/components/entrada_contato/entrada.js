import React from "react";
import "./entrada.css";

function Entrada() {

    return (
        <div className="informacoes_contatos">
            <label for="nome">Nome:</label>
            <input name="nome" type="text" style={{display: 'block'}} placeholder="Nome completo"/>

            <label for="email">Email:</label>
            <input name="email" type="email" style={{display: 'block'}} placeholder="Insira seu email"/>

            <label for="number">Numero:</label>
            <input name="number" type="tel" style={{display: 'block'}} placeholder="Telefone"/>

            <label for="date">Digite a Data</label>
            <input name="date" type="date" style={{display: 'block'}}/>

            <label id="arquivo" for="file">Enviar Arquivos</label>
            <input name="file" type="file" style={{display: 'none'}}/>
        </div>
    )
}

export default Entrada;