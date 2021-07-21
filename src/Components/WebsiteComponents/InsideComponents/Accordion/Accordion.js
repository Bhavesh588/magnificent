import React, { useState, useRef } from 'react'

import './Accordion.scss';

function Accordion({ title, list }) {

    const [active, setActive] = useState('')
    const [height, setHeight] = useState("0px")

    const content = useRef(null)

    const toggletoAccordion = () => {
        setActive(active === "" ? "active" : "")
        setHeight(active === "active" ? "0px" : `${content.current.scrollHeight}px`)
    }

    const changetoactive = (title, val) => {
        const main_list_len = document.getElementsByClassName('All-list').length
        for(var i=0; i<main_list_len; i++) {
            var title_text = document.getElementsByClassName('collapsible-header')[i].textContent
            if(title_text === title) {
                var list_len = document.getElementsByClassName('All-list')[i].getElementsByTagName('li').length
                for(var j=0; j<list_len; j++) {
                    if(j === val) {
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
                <a href='#!' className={`collapsible-header ${active}`} onClick={toggletoAccordion}>{title}</a>
                <div ref={content} style={{maxHeight: `${height}`}} className="collapsible-body">
                    <ul className="All-list">
                        {
                            list.map((l, i) => 
                                <li key={i} onClick={() => changetoactive(title, i)}>
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

export default Accordion
