import React from 'react';
import { NavLink } from "react-router-dom";

const Nav = () => {
    return(
    
        <nav 
          style={{
            position: 'fixed',
            width: '100%',
            top : 0,
            opacity : 0.9,
            zIndex: 1000,
          }}
          className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink 
            style={{
              fontWeight: 900,
              color: '#2d2d2d',
              letterSpacing: -0.5,
              fontSize: '1.6rem',
            }}
            className="navbar-brand"
            id='main-title' 
            to="/home">
            
          <div id='main-logo'></div>
          COUCOUCINÉ
          </NavLink>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">

               <li className="nav-item">
                <NavLink className="nav-link" to="/popular">Populaire</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/home">Découvrir</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/my-list">Ma Liste</NavLink>
              </li>
          
            </ul>
          </div>
        </nav>
    );
};

export default Nav;