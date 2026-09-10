import React from "react";

const Header = () => {
  return (
    <header 
    style = {{padding: '15px 20px', color: '#fff', backgroundColor: '#2b1651', display: 'flex', gap: '15px', justifyContent:'center', fontSize: '25px', fontWeight: 'bold', borderBottom: '1px solid #ccc'}}>
      <strong>Dashboard</strong>
    </header>
    );
}

export default Header;