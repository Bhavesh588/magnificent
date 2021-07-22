// In this file, there will be all Download Component
import React, { Component } from 'react';
import { connect } from 'react-redux'

import Color from '../../Components/DownloadComponents/CSS/Color/Color'
import Grid from '../../Components/DownloadComponents/CSS/Grid/Grid'
import Helpers from '../../Components/DownloadComponents/CSS/Helpers/Helpers'
import Media from '../../Components/DownloadComponents/CSS/Media/Media'
import Pulse from '../../Components/DownloadComponents/CSS/Pulse/Pulse'
import Sass from '../../Components/DownloadComponents/CSS/Sass/Sass'
import Shadow from '../../Components/DownloadComponents/CSS/Shadow/Shadow'
import Table from '../../Components/DownloadComponents/CSS/Table/Table'
import Transitions from '../../Components/DownloadComponents/CSS/Transitions/Transitions'
import Typography from '../../Components/DownloadComponents/CSS/Typography/Typography'

import Badges from '../../Components/DownloadComponents/Components/Badges/Badges'
import Breadcrumbs from '../../Components/DownloadComponents/Components/Breadcrumbs/Breadcrumbs'
import Buttons from '../../Components/DownloadComponents/Components/Buttons/Buttons'
import Cards from '../../Components/DownloadComponents/Components/Cards/Cards'
import Collections from '../../Components/DownloadComponents/Components/Collections/Collections'
import FloatingActionButton from '../../Components/DownloadComponents/Components/FloatingActionButton/FloatingActionButton'
import Footer from '../../Components/DownloadComponents/Components/Footer/Footer'
import Icons from '../../Components/DownloadComponents/Components/Icons/Icons'
import Navbar from '../../Components/DownloadComponents/Components/Navbar/Navbar'
import Pagination from '../../Components/DownloadComponents/Components/Pagination/Pagination'
import Preloader from '../../Components/DownloadComponents/Components/Preloader/Preloader'
import Searchbar from '../../Components/DownloadComponents/Components/Searchbar/Searchbar'
import Sidebar from '../../Components/DownloadComponents/Components/Sidebar/Sidebar'

import './Main.scss';

class Main extends Component {

    constructor() {
        super()
        this.state = {
            val: 1
        }
    }

    render() {
        const { selectedValue, selectedTitle, nav_list } = this.props
        const keys = Object.keys(nav_list)

        const nav_list_comp = {
            CSS: [<Color key='0' />, <Grid key='1' />, <Helpers key='2'/>, <Media key='3' />, <Pulse key='4' />, <Sass key='5' />, <Shadow key='6'/>, <Table key='7' />, <Transitions key='8' />, <Typography key='9' />],
            Components: [<Badges key='0' />, <Breadcrumbs key='1' />, <Buttons key='2' />, <Cards key='3' />, <Collections key='4' />, <FloatingActionButton key='5' />, <Footer key='6' />, <Icons key='7' />, <Navbar key='8' />, <Pagination key='9' />, <Preloader key='10' />, <Searchbar key='11' />, <Sidebar key='12' />],
            // JavaScript: [<AutoInit/>, <Carousal/>, <Collapsible/>, <Dropdown/>, <FeatureDiscovery/>, <Media/>, <Modals/>, <Parallax/>, <Pushpin/>, <Scrollspy/>, <Sidenav/>, <Tabs/>, <Toasts/>, <Tooltips/>, <Waves/>],
            // Form: [<Autocomplete/>, <Checkboxs/>, <Chips/>, <Pickers/>, <RadioButtons/>, <Range/>, <Select/>, <Switches/>, <TextInputs/>]
        }

        return(
            <main>
                {
                    keys.map(key => 
                        selectedTitle === key
                        ? nav_list[key].map(list => 
                            list === nav_list[selectedTitle][selectedValue]
                            ? nav_list_comp[selectedTitle][selectedValue]
                            : null
                        )
                        : null
                    )
                }
            </main>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        nav_list: state.nav_list,
        selectedValue: state.selectedValue,
        selectedTitle: state.selectedTitle
    }
}

export default connect(mapStateToProps)(Main)