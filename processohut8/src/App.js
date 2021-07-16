
import React from 'react'
import './App.css';

import Sidebar from './Components/Sidebar/sidebar'
import Activities from './Components/Activities/activities';

const App = () => { 

  const sidebar = {
    "name": "Fausto Silva",
    "course": "Ciência da Computação",
    "dashboard": "Dashboard",
    "myarea": "Meus cursos",
    "image": "https://i.imgur.com/aU48TWI.jpg",
  };

  const activities = {
    "id": "1",
    "resume": "Resumo",
    "next": "Próximas Atividades",
    "subject": "Algoritmos e Programação",
    "task": "Enviar arquivo Peter Smokes",
    "image": "https://i.imgur.com/aadwyfC.jpg",
    "deadline": "10/10/20",
    "enrolledCourses": "2",
    "nextActivities": "2",
    "onlineStudents": "785",
  };

  return (
    <div className="App">
      <Sidebar sidebar={sidebar} />
      <Activities activities={activities}/>
    </div>


  );
}

export default App;