// Both container and nav-mobile will be in this file and this will be in Header Page
import React from 'react'
import { connect } from 'react-redux'

import './Sidebar.scss'
import Logo from '../../../assets/AdobeStock_375387396_Preview.png';

import Search from '../InsideComponents/Search/Search';
import Accordion from '../InsideComponents/Accordion/Accordion';

function Sidebar(props) {

    const { nav_list } = props
    const keys = Object.keys(nav_list)

    return (
        <ul className="sidenav">
            <li className="logo">
                <div className="logopos">
				    <img src={Logo} alt="Logo" style={{width: '80px', height: 'auto'}} />
                </div>
            </li>
            <li className="search">
                <Search />
            </li>
            <li className="no-padding">
                {
                    keys.map((key, index) =>
                        <Accordion key={index} title={key} list={nav_list[key]} />
                    )
                }
            </li>
        </ul>
    )
}

const mapStateToProps = (state) => {
    return {
        nav_list: state.nav_list
    }
}

export default connect(mapStateToProps)(Sidebar)
