// Components in this file will be Sidebar, Topnav
import React, { Component } from 'react';

import './Header.scss';

import Sidebar from '../../Components/WebsiteComponents/Sidebar/Sidebar';
import Topnav from '../../Components/WebsiteComponents/Topnav/Topnav';
import Menu from '../../Components/WebsiteComponents/InsideComponents/Menu/Menu';

class Header extends Component {
    render() {
        return(
            <header>
                <Menu />
                <Topnav />
                <Sidebar />
            </header>
        )
    }
}

export default Header