import React, { useState } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import FotosComp from "../../components/fotos_comp/fotos_comp";
import "./fotos.css";

function Fotos() {

    const [modal, setModal] = useState(false); 

    const [image, setImage] = useState("");

    return (
        <div>
            <Header/>
            <h1 id="titulo_fotos">FOTOS</h1>
            <div style={{visibility:(modal ? 'visible' : 'hidden')}} onClick={() => setModal(false)} id="foto_modal">
                <div id="foto_bg" style={{backgroundImage: `url(${image})`}}></div>
            </div>
            <FotosComp clicouModal={setModal} clicouImage={setImage}/>
            <Footer/>
        </div>
    )
};

export default Fotos;