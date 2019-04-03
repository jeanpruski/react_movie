import React from 'react';
import { NavLink } from "react-router-dom";

const Nav = () => {
    return(
      <div>
        <NavLink to="/">Discover</NavLink>
        <NavLink to="/popular">Popular</NavLink>
        <NavLink to="/my-list">My List</NavLink>
      </div>
    );
};

export default Nav;