import React, { Component } from 'react';
// imrc => imorter la class components in react
import { MenuItems } from "./MenuItems";
import './Navbar.css';
import { Button } from '../Button';
import logo from '../../logo.png';

class Navbar extends Component{
    state ={clicked:false}

    handleClick= () => {
        this.setState({ clicked: !this.state.clicked})
    }

    render(){
        return(
            <nav className="NavbarItems">
        <div className="menu-icon" onClick={this.handleClick}>
            <i className={this.state.clicked ? 'fa fa-times' : 'fas fa-bars'}></i>
        </div> 
        <img src={logo} alt="image" />
                <ul className={this.state.clicked? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item,index)=>{
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    }
                    )}
                   
                </ul>
           <Button>Sign Up</Button>
            </nav>
        )
    }
}
 
export default Navbar;