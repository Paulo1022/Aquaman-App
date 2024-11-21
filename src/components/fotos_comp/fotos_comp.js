import React from "react";
import "./fotos_comp.css";

function FotosComp({clicouModal, clicouImage}) {

    const fotos = [
        {
            foto: 'https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2022/08/aquaman-2.jpg'
        },
        {
            foto: 'https://cdn.ome.lt/OOE7k5QHJvFvjWNuFhiIiRXbCV4=/fit-in/1070x750/smart/filer_public/fb/ad/fbadd792-2627-4a07-b6f2-1af807d93f88/ocean.jpg'
        },
        {
            foto: 'https://portalpopline.com.br/wp-content/uploads/2021/11/aquaman-e-o-reino-perdido-filmagens-finalizadas.jpg'
        },
        {
            foto: 'https://sm.ign.com/t/ign_br/photo/default/screenshot-2021-10-16-102911-1634405391447_mjw1.1080.jpg'
        },
        {
            foto: 'https://lorena.r7.com/public/assets/img/postagens/post_48324.jpg'
        },
        {
            foto: 'https://thumbs.web.sapo.io/?W=800&H=0&png=1&delay_optim=1&epic=OTQxDd247cBDbMbDaOj/oRL9IS2yKbMGM133uJABYRRXpIk33NJ2QHX6Izf+5zTUfvM4NKvckGtvP6AIBMkDk5LbV1l08xhFK9Mog3wRmoDds2A='
        },
        {
            foto: 'https://www.slashfilm.com/img/gallery/aquaman-2-has-officially-wrapped-production/l-intro-1642039353.jpg'
        },
    ];

    function clickGeral(imagem) {
        clicouImage(imagem);
        clicouModal(true);
    };

    return (
        <div id="foto_content">
            <div className="foto_container">
                {fotos.map((item) => (
                    <div
                        onClick={() => clickGeral(item.foto)}
                        className="foto"
                        style={{backgroundImage: `url(${item.foto})`}}
                    >
                    </div>
                ))}
            </div>
        </div>
    )
};

export default FotosComp;