import React from 'react';
import './sidebar.css';

const Sidebar = ({ sidebar }) => (

    <div className="conteiner">

        <div className="sidebar">
            <div>
                <img src={sidebar.image} alt="Foto do perfil" className="sidebar-avatar__image" />
                <h1 className="sidebar-avatar__name">{sidebar.name}</h1>
                <p className="sidebar-avatar__course">{sidebar.course}</p>
            </div>
            <div className="menu">
                <h1 className="sidebar-menu__dashboard">{sidebar.dashboard}</h1>
                <h1 className="sidebar-menu__area">{sidebar.myarea}</h1>
            </div>
        </div>
    </div>


)

export default Sidebar;