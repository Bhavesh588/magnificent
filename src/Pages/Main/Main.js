// In this file, there will be all Download Component
import React, { Component } from 'react';
import { connect } from 'react-redux'

import './Main.scss';

class Main extends Component {

    render() {
        const { selectedValue, selectedTitle } = this.props
        return(
            <main>
            </main>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedValue: state.selectedValue,
        selectedTitle: state.selectedTitle
    }
}

export default connect(mapStateToProps)(Main)