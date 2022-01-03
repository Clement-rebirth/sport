import React, { useRef, useState } from 'react';

import { Link } from 'react-router-dom';

import './Menu.css';

const Menu = () => {

  const [showMenu, setShowMenu] = useState(false);

  const menuNav = useRef(null);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <div id="menu">
      <div className="open-menu" onClick={toggleMenu}>
        <span className="material-icons-round">menu</span>
      </div>

      <nav className='desktop-menu'>
        <ul>
          <li className="menu-item"><Link to='/'>Accueil</Link></li>
          <li className="menu-item"><Link to='/nutrition'>Nutrition</Link></li>
          <li className="menu-item"><Link to='/no-equipments'>Sans matériel</Link></li>
          <li className="menu-item"><Link to='/stretching'>Étirements</Link></li>
        </ul>
      </nav>

      { showMenu &&
        <nav className='mobile-menu'>
          <ul>
            <li className="menu-item"><Link to='/'>Accueil</Link></li>
            <li className="menu-item"><Link to='/nutrition'>Nutrition</Link></li>
            <li className="menu-item"><Link to='/no-equipments'>Sans matériel</Link></li>
            <li className="menu-item"><Link to='/stretching'>Étirements</Link></li>
          </ul>
        </nav>
      }
    </div>
  );
};

export default Menu;
