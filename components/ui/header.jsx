'use client'

import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {

  const pathName = usePathname();

  const getPageTitle = () => {
    switch (pathName) {
      case '/country-scores':
        return "Country Scores";
      case '/country-comparison':
        return "Country Comparison"
      case '/ratings':
        return "Ratings"
      case '/bank-ratio':
        return "Bank Ratio"
      default:
        return "Dashboard"
    }
  }

  return (
    <header 
      style={{
        padding: '15px 20px', 
        color: '#fff', 
        backgroundColor: '#2b1651', 
        display: 'flex', 
        gap: '15px', 
        justifyContent:'center', 
        fontSize: '30px', 
        fontWeight: 'semi-bold', 
        borderBottom: '1px solid #ccc'}}>
          {getPageTitle()}
    </header>
    );
}

export default Header;