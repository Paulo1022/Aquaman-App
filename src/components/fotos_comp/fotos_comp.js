import React from "react";
import "./fotos_comp.css";

function FotosComp({clicouModal, clicouImage}) {

    const foto1 = 'https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2022/08/aquaman-2.jpg';
    const foto2 = 'https://cdn.ome.lt/OOE7k5QHJvFvjWNuFhiIiRXbCV4=/fit-in/1070x750/smart/filer_public/fb/ad/fbadd792-2627-4a07-b6f2-1af807d93f88/ocean.jpg';
    const foto3 = 'https://portalpopline.com.br/wp-content/uploads/2021/11/aquaman-e-o-reino-perdido-filmagens-finalizadas.jpg';
    const foto4 = 'https://sm.ign.com/t/ign_br/photo/default/screenshot-2021-10-16-102911-1634405391447_mjw1.1080.jpg';
    const foto5 = 'https://lorena.r7.com/public/assets/img/postagens/post_48324.jpg';
    const foto6 = 'https://thumbs.web.sapo.io/?W=800&H=0&png=1&delay_optim=1&epic=OTQxDd247cBDbMbDaOj/oRL9IS2yKbMGM133uJABYRRXpIk33NJ2QHX6Izf+5zTUfvM4NKvckGtvP6AIBMkDk5LbV1l08xhFK9Mog3wRmoDds2A=';
    const foto7 = 'https://www.slashfilm.com/img/gallery/aquaman-2-has-officially-wrapped-production/l-intro-1642039353.jpg';

    function clickGeral(imagem) {
        clicouImage(imagem);
        clicouModal(true);
    };

    return (
        <div id="foto_content">
            <div className="foto_container">
                <div onClick={() => clickGeral(foto1)} className=" foto imagem1" id="imagem1" style={{backgroundImage: `url(${foto1})`}}></div>
                <div onClick={() => clickGeral(foto2)} className=" foto imagem2" id="imagem2" style={{backgroundImage: `url(${foto2})`}}></div>
                <div onClick={() => clickGeral(foto3)} className=" foto imagem3" id="imagem3" style={{backgroundImage: `url(${foto3})`}}></div>
                <div onClick={() => clickGeral(foto4)} className=" foto imagem4" id="imagem4" style={{backgroundImage: `url(${foto4})`}}></div>
                <div onClick={() => clickGeral(foto5)} className=" foto imagem5" id="imagem5" style={{backgroundImage: `url(${foto5})`}}></div>
                <div onClick={() => clickGeral(foto6)} className=" foto imagem6" id="imagem6" style={{backgroundImage: `url(${foto6})`}}></div>
                <div onClick={() => clickGeral(foto7)} className=" foto imagem7" id="imagem7" style={{backgroundImage: `url(${foto7})`}}></div>
            </div>
        </div>
    )
};

export default FotosComp;