// Components in this file will be Sidebar, Topnav
import React, { Component } from 'react';

import './Header.scss';

import Sidebar from '../../Components/WebsiteComponents/Sidebar/Sidebar';

class Header extends Component {
    render() {
        return(
            <Sidebar />
        )
    }
}

export default Header