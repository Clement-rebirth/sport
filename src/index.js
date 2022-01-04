import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './pages/home/App';
import Menu from './components/Menu/Menu';
import Nutrition from './pages/nutrition/Nutrition';
import NoEquipments from './pages/NoEquipments/NoEquipments';
import Stretching from './pages/Stretching/Stretching';
import Footer from './components/Footer/Footer';
import UserProvider from './providers/UserProvider';
import Login from './pages/Login/Login';
import AddExercise from './pages/AddExercise/AddExercise';
import EditExercise from './pages/EditExercise/EditExercise';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <Router>
        <Menu />

        <Routes>
          <Route exact path='/' element={<App />} />
          <Route path='/nutrition' element={<Nutrition />} />
          <Route path='/no-equipments' element={<NoEquipments />} />
          <Route path='/stretching' element={<Stretching />} />
          <Route path='/admin' element={<Login />} />
          <Route path='/add-exercise' element={<AddExercise />} />
          <Route path='/edit/:id' element={<EditExercise />} />
        </Routes>
        
        <Footer />
      </Router>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
