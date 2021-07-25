import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import CloseIcon from '@material-ui/icons/Close';

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import './Badges.scss'

function Badges(props) {

    const { Badges } = props
    const keys = Object.keys(Badges)
    const [show, setShow] = useState(true)
    const [title, setTitle] = useState('')
    const [html, setHtml] = useState('')
    const [css, setCss] = useState('')

    useEffect(() => {
        for(var i=0; i<keys.length; i++) {
            var dom = document.getElementsByClassName('display'+i)[0];
            if(dom !== undefined) {
                dom.innerHTML = Badges[keys[i]].html;
                var styles = Badges[keys[i]].css
                // console.log(Badges[keys[i]].css.split(' ')[0])
                // var sty = Badges[keys[i]].css.split('\n').slice(1, Badges[keys[i]].css.split('\n').length - 1)
                // for(var j=0; j<sty.length; j++) {
                //     console.log(sty[j].trim())
                // }
                var styleSheet = document.createElement("style")
                styleSheet.type = "text/css"
                styleSheet.innerText = styles
                document.head.appendChild(styleSheet)
                // dom.classList.add('badges')
            }
        }
    }, [Badges, keys])

    const showpopup = (val) => {
        if(val !== undefined) {
            setTitle(val)
            setHtml(Badges[val].html)
            setCss(Badges[val].css)
        }
        setShow(!show)

        let popup = document.getElementsByClassName('popup_modal')[0]
        let popup_con = document.getElementsByClassName('popup_container')[0]

        if(popup.classList.contains('hidden')) {
            popup.classList.remove('hidden')
            setTimeout(() => {
                popup.classList.remove('visualhidden')
            }, 20)
        } else {
            popup.classList.add('visualhidden')
            popup.addEventListener('transitionend', function(e) {
                popup.classList.add('hidden');
                popup_con.style.marginTop = '0px'
            }, {
                capture: false,
                once: true,
                passive: false
            });
        }
    }

    // var support = (function () {
    //     if (!window.DOMParser) return false;
    //     var parser = new DOMParser();
    //     try {
    //         parser.parseFromString('x', 'text/html');
    //     } catch(err) {
    //         return false;
    //     }
    //     return true;
    // })();

    const stringToHTML = function (str, i) {

        // If DOMParser is supported, use it
        // if (support) {
        //     var parser = new DOMParser();
        //     var doc = parser.parseFromString(str, 'text/html');
        //     console.log(support)
        //     return doc.body;
        // }
    
        // Otherwise, fallback to old-school method
        // var dom = document.getElementsByClassName('display'+i)[0];
        // if(dom !== undefined) {
        //     dom.innerHTML = str;
        // }
        // return dom;
    
    };

    return (
        <div className="arrange_grid">
            <h2 className="inside_header">Design</h2>
            <ul>
                {/* Convert JSX to HTML because className is not supported in innerHTML */}
                {
                    keys.map((badge, i) => <li key={i} className={`display${i}`} onClick={() => showpopup(badge)}>{stringToHTML(Badges[badge].html, i)}</li>)
                }
            </ul>
            <div className='popup_modal hidden visualhidden'>
                <div className="popup_container container">
                    <div className="title_container">
                        <h3>{title}</h3>
                        <button className="close_btn"><CloseIcon onClick={() => showpopup()} /></button>
                    </div>
                    <hr/>
                    <div className="popup_body">
                        <h4>HTML</h4>
                        <SyntaxHighlighter language="html" style={darcula}>
                            {html}
                        </SyntaxHighlighter>
                        <h4>CSS</h4>
                        <SyntaxHighlighter language="css" style={darcula}>
                            {css}
                        </SyntaxHighlighter>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        Badges: state.Badges
    }
}

export default connect(mapStateToProps)(Badges)
