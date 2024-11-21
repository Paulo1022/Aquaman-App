import React from "react";
import Avatar1 from "../../assets/como-ter-fotos-mais-nitidas-scaled.jpg";
import Avatar2 from "../../assets/dicas-para-fotos-melhores-no-android.jpg";
import Avatar3 from "../../assets/images (1).jpg";
import Avatar4 from "../../assets/photo-1606893995103-a431bce9c219.jpg";
import './caixas_comentarios.css';

let comentarios = [
    {
        avatar: Avatar1,
        nome: "Roberto Almeida",
        comentario: '"Acho que isso não tem nada a ver com a Mera, porque ela quase não aparece no filme.”'
    },
    {
        avatar: Avatar2,
        nome: "Juliana Tavares",
        comentario: '“Não tenho nenhum prazer em revelar que os testes de audiência de Aquaman 2 não foram positivos. Espero que o James Wan consiga consertar esse filme até dezembro. Ouvi dizer que algo que quase nunca acontece durante testes de exibição aconteceu com esse filme,”'
    },
    {
        avatar: Avatar3,
        nome: "Paulo Oliveira",
        comentario: '"Estou ansioso pelo filme!"'
    },
    {
        avatar: Avatar4,
        nome: "Amanda Gomes",
        comentario: '“Há uma razão pela qual tenho evitado qualquer pergunta sobre AQUAMAN E O REINO PERDIDO, mas desde que o ViewerAnon divulgou, não me traz alegria apoiá-lo e dizer que as exibições de teste para este filme não foram boas. Realmente esperando que Wan corrija este filme antes de dezembro.”'
    }
];

function CaixasComentarios() {

    return (
        <main id="main_comentarios">
            {comentarios.map((item) => (
                <div className="caixa_comentarios">
                    <div className="avatar">
                        <img src={item.avatar} alt="A imagem não pode ser carregada" className="retrato"/>
                        <span className="nome">{item.nome}</span>
                    </div>
                    <div className="comentario">
                        <p>
                            {item.comentario}
                        </p>
                    </div>
                </div>
            ))}
        </main>
    )
};

export default CaixasComentarios;