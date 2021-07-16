
import React from 'react'
import './App.css';

import Sidebar from './Components/Sidebar/sidebar'
import Activities from './Components/Activities/activities';

const App = () => { 

  const sidebar = {
    "name": "Faustão Silva",
    "course": "Engenharia da Computação",
    "dashboard": "Dashboard",
    "myarea": "Meus cursos",
    "image": "https://scontent.fsdu11-1.fna.fbcdn.net/v/t1.18169-9/16996109_145020159349997_7517591550060647831_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=973b4a&_nc_ohc=HYb2nHt3jM4AX9Y2F9B&_nc_ht=scontent.fsdu11-1.fna&oh=f51a266de8d38193a7455b888f7055c8&oe=60F71FED",
  };

  const activities = {
    "id": "1",
    "resume": "Resumo",
    "next": "Próximas Atividades",
    "subject": "Algoritmos & Programação",
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