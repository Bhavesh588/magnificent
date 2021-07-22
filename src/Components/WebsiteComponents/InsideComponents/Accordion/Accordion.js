import React, { useRef } from 'react'
import { connect } from 'react-redux'

import './Accordion.scss';

function Accordion({ title, list, ...props }) {

    const content = useRef(null)

    const { select_title, select_value, selectedTitle, selectedValue } = props

    const toggletoAccordion = (title) => {
        var title_list_len = document.getElementsByClassName('collapsible-header').length
        for(var i=0; i<title_list_len; i++) {
            var title_text = document.getElementsByClassName('collapsible-header')[i].textContent
            if(title === title_text) {
                if(document.getElementsByClassName('collapsible-header')[i].classList[1] !== 'active') {
                    document.getElementsByClassName('collapsible-header')[i].classList.add('active')
                    document.getElementsByClassName('collapsible-body')[i].style.maxHeight = `${content.current.scrollHeight}px`
                } else {
                    document.getElementsByClassName('collapsible-body')[i].style.maxHeight = '0px'
                    document.getElementsByClassName('collapsible-header')[i].classList.remove('active')
                }
            } else {
                document.getElementsByClassName('collapsible-body')[i].style.maxHeight = '0px'
                document.getElementsByClassName('collapsible-header')[i].classList.remove('active')
            }
        }
    }

    const changetoactive = (title, val) => {
        const main_list_len = document.getElementsByClassName('All-list').length
        for(var i=0; i<main_list_len; i++) {
            var title_text = document.getElementsByClassName('collapsible-header')[i].textContent
            if(title_text === title) {
                var list_len = document.getElementsByClassName('All-list')[i].getElementsByTagName('li').length
                for(var j=0; j<list_len; j++) {
                    if(j === val) {
                        select_value(j)
                        select_title(title)
                        document.getElementsByClassName('All-list')[i].getElementsByTagName('li')[j].classList.add('active')
                    } else {
                        document.getElementsByClassName('All-list')[i].getElementsByTagName('li')[j].classList.remove('active')
                    }
                }
            } else {
                var list_active_len = document.getElementsByClassName('All-list')[i].getElementsByTagName('li').length
                for(var m=0; m<list_active_len; m++) {
                    document.getElementsByClassName('All-list')[i].getElementsByTagName('li')[m].classList.remove('active')
                }
            }
        }
    }

    return (
        <ul className="collapsible">
            <li className="bold">
                <a href='#!' className={`collapsible-header`} onClick={() => toggletoAccordion(title)}>{title}</a>
                <div ref={content} style={{maxHeight: '0px'}} className="collapsible-body">
                    <ul className="All-list">
                        {
                            list.map((l, i) => 
                                i === selectedValue && title === selectedTitle
                                ? <li className="active" key={i} onClick={() => changetoactive(title, i)}>
                                    <a href="#!">{l}</a>
                                </li>
                                : <li key={i} onClick={() => changetoactive(title, i)}>
                                    <a href="#!">{l}</a>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        select_value: (val) => {
            dispatch({
                type: 'SELECTEDVALUE',
                item: val
            })
        },
        select_title: (val) => {
            dispatch({
                type: 'SELECTEDTITLE',
                item: val
            })
        }
    }
}

const mapStateToProps = (state) => {
    return {
        selectedValue: state.selectedValue,
        selectedTitle: state.selectedTitle
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Accordion)
