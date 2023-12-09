import React from "react";
import Header from "../../components/header/header";
import Button from "../../components/button/button";
import Entrada from "../../components/entrada_contato/entrada";
import Texto from "../../components/texto_contato/texto";
import "./contato.css";
import Footer from "../../components/footer/footer";

function Contato() {

    return (
        <div>
            <Header/>
            <form action="???">
                <div className="contatos_container">
                    <Entrada/>
                    <Texto/>
                </div>
                <Button/>
            </form>
            <Footer/>
        </div>
    )
};

export default Contato;