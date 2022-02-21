
import React from 'react'
import logo from './logo.png';
const Header = (props) => {
  const sty = {
    display: "flex",
    justifyContent: "center",
   
  
  };
  const sty2 = {
    width: "300px",
    heigth: "150px",
  };
  return (
    <div style={sty}>
      <img src={logo} style={sty2} alt="img" />
    </div>
  );
}

export default Header