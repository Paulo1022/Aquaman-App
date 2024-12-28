import React from "react";
import Video from "../../assets/Aquaman 2_ O Reino Perdido _ Trailer.mp4";
import "./trailer.css";

function Trailer() {

    return (
        <div id="trailer_container">
            <div className="content">
                <video controls className="trailer">
                    <source src={Video}/>
                </video>
                <div id="sinopse">
                    <p className="description">
                        “Após ter falhado em derrotar o Aquaman da primeira vez, Manta Negra, ainda 
                        guiado pelo seu desejo de vingar a morte do pai, não irá parar até destruir o herói 
                        de uma vez por todas. Desta vez, ele está mais perigoso do que nunca, 
                        empunhando o poder do mítico Tridente Negro, que acaba libertando uma força 
                        antiga e malévola.

                        Para derrotá-lo, Aquaman recorrerá a seu irmão Orm, o ex-rei da Atlântida, para 
                        forjar uma aliança improvável. Juntos, eles devem deixar de lado suas 
                        diferenças para proteger seu reino, salvar sua família e o mundo de uma 
                        destruição irreversível.”
                    </p>
                    <a href="https://www.ingresso.com/filme/aquaman-2-o-reino-perdido" target="_blank" rel="noreferrer">
                        <button className="button" >Comprar Ingresso</button>
                    </a>
                </div>
            </div>
        </div>
    )
};

export default Trailer;