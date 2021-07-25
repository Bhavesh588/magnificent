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

import AutoInit from '../../Components/DownloadComponents/JavaScript/AutoInit/AutoInit'
import Carousal from '../../Components/DownloadComponents/JavaScript/Carousal/Carousal'
import Collapsible from '../../Components/DownloadComponents/JavaScript/Collapsible/Collapsible'
import Dropdown from '../../Components/DownloadComponents/JavaScript/Dropdown/Dropdown'
import FeatureDiscovery from '../../Components/DownloadComponents/JavaScript/FeatureDiscovery/FeatureDiscovery'
import Modals from '../../Components/DownloadComponents/JavaScript/Modals/Modals'
import Parallax from '../../Components/DownloadComponents/JavaScript/Parallax/Parallax'
import Pushpin from '../../Components/DownloadComponents/JavaScript/Pushpin/Pushpin'
import Scrollspy from '../../Components/DownloadComponents/JavaScript/Scrollspy/Scrollspy'
import Sidenav from '../../Components/DownloadComponents/JavaScript/Sidenav/Sidenav'
import Tabs from '../../Components/DownloadComponents/JavaScript/Tabs/Tabs'
import Toasts from '../../Components/DownloadComponents/JavaScript/Toasts/Toasts'
import Tooltips from '../../Components/DownloadComponents/JavaScript/Tooltips/Tooltips'
import Waves from '../../Components/DownloadComponents/JavaScript/Waves/Waves'

import Autocomplete from '../../Components/DownloadComponents/Form/Autocomplete/Autocomplete'
import Checkboxes from '../../Components/DownloadComponents/Form/Checkboxes/Checkboxes'
import Chips from '../../Components/DownloadComponents/Form/Chips/Chips'
import Pickers from '../../Components/DownloadComponents/Form/Pickers/Pickers'
import RadioButtons from '../../Components/DownloadComponents/Form/RadioButtons/RadioButtons'
import Range from '../../Components/DownloadComponents/Form/Range/Range'
import Select from '../../Components/DownloadComponents/Form/Select/Select'
import Switches from '../../Components/DownloadComponents/Form/Switches/Switches'
import TextInputs from '../../Components/DownloadComponents/Form/TextInputs/TextInputs'

import './Main.scss';

class Main extends Component {

    render() {
        const { selectedValue, selectedTitle, nav_list } = this.props
        const keys = Object.keys(nav_list)

        const nav_list_comp = {
            Components: [<Badges key='0' />, <Breadcrumbs key='1' />, <Buttons key='2' />, <Cards key='3' />, <Collections key='4' />, <FloatingActionButton key='5' />, <Footer key='6' />, <Icons key='7' />, <Navbar key='8' />, <Pagination key='9' />, <Preloader key='10' />, <Searchbar key='11' />, <Sidebar key='12' />],
            JavaScript: [<AutoInit key='0' />, <Carousal key='1' />, <Collapsible key='2' />, <Dropdown key='3' />, <FeatureDiscovery key='4' />, <Modals key='5' />, <Parallax key='6' />, <Pushpin key='7' />, <Scrollspy key='8' />, <Sidenav key='9' />, <Tabs key='10' />, <Toasts key='11' />, <Tooltips key='12' />, <Waves key='13' />],
            Form: [<Autocomplete key='0' />, <Checkboxes key='1' />, <Chips key='2' />, <Pickers key='3' />, <RadioButtons key='4' />, <Range key='5' />, <Select key='6' />, <Switches key='7' />, <TextInputs key='8' />],
            CSS: [<Color key='0' />, <Grid key='1' />, <Helpers key='2'/>, <Media key='3' />, <Pulse key='4' />, <Sass key='5' />, <Shadow key='6'/>, <Table key='7' />, <Transitions key='8' />, <Typography key='9' />],
        }

        return(
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col offset-m1">
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
                        </div>
                    </div>
                </div>
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