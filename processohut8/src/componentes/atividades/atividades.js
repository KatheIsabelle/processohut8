import React from 'react';
import Rectangle from './Rectangle/rectangle';
import Card from './Card/card'
import './activities.css';

const Activities = ({activities}) => (

    <div className="activities-conteiner">
        <div>
            <h1 className="activities-resume">{activities.resume}</h1>
            <div>
                <Rectangle />
            </div>
            <h1 className="activities-next">{activities.next}</h1>
            <div>
                <Card />
            </div>
        </div>
    </div>
);

export default Activities;