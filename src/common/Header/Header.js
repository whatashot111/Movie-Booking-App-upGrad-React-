import React, { Component } from 'react';
import "./Header.css";
import logo from "./../../assets/logo.svg";

class  Header extends Component {
    render() { 
        return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
        </div>  
        );
    }
}
 
export default Header;