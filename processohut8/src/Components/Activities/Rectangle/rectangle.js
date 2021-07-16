import React from 'react';
import './rectangle.css';
import {FaGraduationCap} from 'react-icons/fa';

const Rectangle = ({activities}) => (

    <div className="rectangle"> 
        <h1 className="activities-rectangle__quantity">{activities.enrolledCourses}</h1>
        <p className="activities-rectangle__enrolledCourses">Cursos Matriculados</p>
        <FaGraduationCap className="activities-rectangle__icon"/>
    </div>
)

export default Rectangle;