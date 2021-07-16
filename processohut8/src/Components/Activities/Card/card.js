import React from 'react';
import './card.css';

const Card = () => (
   
    <div className="card">
        <img src="https://i.imgur.com/aadwyfC.jpg" alt="Imagem Ilustrativa" className="card-image" />
        <div className="card-underRectangle">
            <p className="card-subject">Algoritmos e Programação</p>
            <h1 className="card-task">Enviar arquivos</h1>
            <p className="card-deadline">05/10/21</p>
        </div>
    </div>

);

export default Card;