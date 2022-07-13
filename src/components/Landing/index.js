import React from 'react';
import {NavLink} from 'react-router-dom';

function Landing(){
  return (
    <div>
      <NavLink 
      style={({ isActive }) => 
            ({ color: isActive ? 'green' : 'blue' })}
      to="/Home">Home
      </NavLink>
      <h1>Moogle Shop</h1>
    </div>
  );
}


export default Landing;