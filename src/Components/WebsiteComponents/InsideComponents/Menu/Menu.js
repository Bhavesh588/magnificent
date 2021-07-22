import React from 'react'

import './Menu.scss'
import MenuIcon from '@material-ui/icons/Menu';

function Menu() {

    const showNav = () => {
        document.getElementsByClassName('sidenav-overlay')[0].style.display = 'block'
        document.getElementsByClassName('sidenav-overlay')[0].style.opacity = '1'
        document.getElementsByClassName('sidenav')[0].style.transform = 'translateX(0%)'
    }

    window.onresize = () => {
        document.getElementsByClassName('sidenav-overlay')[0].style.display = 'none'
        document.getElementsByClassName('sidenav-overlay')[0].style.opacity = '0'
        if(window.innerWidth >= 900) {
            document.getElementsByClassName('sidenav')[0].style.transform = 'translateX(0%)'
        } else {
            document.getElementsByClassName('sidenav')[0].style.transform = 'translateX(-105%)'
        }
    }

    return (
        <div className="container">
            <a href='#!' onClick={showNav} className="mobile-menu">
                <MenuIcon id="menu-icon" />
            </a>
        </div>
    )
}

export default Menu
