import React from 'react';
import './course.css';

const Course= () => (
       
    <div className="course">
        <img src="https://i.imgur.com/aadwyfC.jpg" alt="Imagem Ilustrativa" className="card-image" />
        <div className="course-underRectangle">
            <p className="course-subject">Cursos Matriculados</p>
            <h1 className="couse-task">Enviar arquivos</h1>
            <p className="course-deadline">05/10/21</p>
        </div>
    </div>

);

export default Course;