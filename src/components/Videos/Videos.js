import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import "./Videos.css"

export default class Videos extends Component {
    constructor(props) {
        super(props)

        this.state = {
            link: "https://www.youtube.com/embed/e5TQxSyIt30?rel=0&amp;autoplay=0"
        }

        this.handleEvent = this.handleEvent.bind(this)
    }



    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

    componentWillUnmount() {

    }

    // Prototype methods, Bind in Constructor (ES2015)
    handleEvent() { }

    // Class Properties (Stage 3 Proposal)
    handler = () => { this.setState() }
    click = (e) => {
        let link = e.target.outerHTML;
        let link1 = link.substring(link.indexOf('"') + 1)
        let link2 = link1.substring(0, link1.indexOf('"'))
        this.setState({ link: link2 })
    }

    render() {
        const { link } = this.state
        return (

            <div className="container" id="video">
                <div className="row">
                    <div className="row">VIDEO CLIP</div>
                </div>
                <div className="row">
                    <div className="col-6 videoarea" >
                        <iframe width="100%" height="320" src={link}
                            frameborder="0"
                            allowfullscreen>
                        </iframe>
                    </div>
                    <div id="playlist">
                        <ul>
                            <li movieurl="http://html5videoformatconverter.com/data/images/happyfit2.mp4" onClick={(event) => { this.click(event) }}>Happy Fit</li>
                            <li movieurl="http://grochtdreis.de/fuer-jsfiddle/video/sintel_trailer-480.mp4" onClick={(event) => { this.click(event) }}>Sintel</li>
                            <li movieurl="http://html5example.net/static/video/html5_Video_VP8.webm" onClick={(event) => { this.click(event) }}>Resident Evil</li>
                            <li movieurl="http://www.ioncannon.net/examples/vp8-webm/big_buck_bunny_480p.webm" onClick={(event) => { this.click(event) }}>Big Buck Bunny</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

}
