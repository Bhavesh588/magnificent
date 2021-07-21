// Both container and nav-mobile will be in this file and this will be in Header Page
import React from 'react'

import './Sidebar.scss'
import Logo from '../../../assets/AdobeStock_375387396_Preview.png';

import Search from '../InsideComponents/Search/Search';
import Accordion from '../InsideComponents/Accordion/Accordion';

function Sidebar() {

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
                <Accordion title="CSS" list={['Color', 'Grid', 'Helpers', 'Media', 'Pulse', 'Sass', 'Shadow', 'Table', 'Transitions', 'Typography']} />
                <Accordion title="Components" list={['Badges', 'Breadcrumbs', 'Buttons', 'Cards', 'Collections', 'Floating Action Button', 'Footer', 'Icons', 'Navbar', 'Pagination', 'Preloader', 'Searchbar', 'Sidebar']} />
                <Accordion title="JavaScript" list={['Auto Init', 'Carousal', 'Collapsible', 'Dropdown', 'Feature Discovery', 'Media', 'Modals', 'Parallax', 'Pushpin', 'Scrollspy', 'Sidenav', 'Tabs', 'Toasts', 'Tooltips', 'Waves']} />
                <Accordion title="Form" list={['Autocomplete', 'Checkboxs', 'Chips', 'Pickers', 'Radio Buttons', 'Range', 'Select', 'Switches', 'Text Inputs']} />
            </li>
        </ul>
    )
}

export default Sidebar
