import React from 'react';

import { Link } from 'react-router-dom';

import './Menu.css';

const Menu = () => {
  return (
    <div id="menu">
      <nav>
          <ul>
              <li className="menu-item"><Link to='/'>Accueil</Link></li>
              <li className="menu-item"><Link to='/nutrition'>Nutrition</Link></li>
              <li className="menu-item"><Link to='/no-equipments'>Sans matériel</Link></li>
              <li className="menu-item"><Link to='/stretching'>Étirements</Link></li>
          </ul>
      </nav>
    </div>
  );
};

export default Menu;
