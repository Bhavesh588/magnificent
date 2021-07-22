// Top-nav will be in this file and this will be in Header Page
import React from 'react'
import { connect } from 'react-redux'

import './Topnav.scss'

function Topnav(props) {

    const { nav_list, selectedTitle, selectedValue } = props

    return (
        <nav className="top-nav">
            <div className="container h-100">
                <div className="nav-wrapper">
                    <div className="row h-100">
                        <div className="col offset-m1 d-flex align-items-center">
                            {
                                selectedTitle === ''
                                ? null
                                : <h1 className="head">{nav_list[selectedTitle][selectedValue]}</h1>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        nav_list: state.nav_list,
        selectedValue: state.selectedValue,
        selectedTitle: state.selectedTitle
    }
}

export default connect(mapStateToProps)(Topnav)
