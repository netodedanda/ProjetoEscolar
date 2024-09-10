import React from "react";
import Navbar from "./Navbar";
import './cssGlobal.css';
import './Atividade.css';
import Professor from './img/Professor.jpg'; // Importe a imagem corretamente

function Atividade() {
    return (
        <>
            <Navbar />
            <main>
                <div className="container">
                    <a href="/aula/javascript" className="square"> {/* Link para a página da aula */}
                        <div className="image-container">
                            <img src={Professor} alt="Professor" /> {/* Imagem local importada */}
                        </div>
                        <div className="text-container">
                            <h1>JavaScript</h1>
                            <p>Sua aula de JavaScript toda terça com o Professor(a) Paulo Neto</p>
                        </div>
                    </a>
                </div>
            </main>
        </>
    );
}

export default Atividade;
