import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import CaixasComentarios from "../../components/caixas_comentarios/caixas_comentarios";
import "./comentarios.css";

function Comentarios() {

    return (
        <div>
            <Header/>
            <h2 id="titulo_comentarios">Comentários:</h2>
            <CaixasComentarios/>
            <Footer/>
        </div>
    )
};

export default Comentarios;