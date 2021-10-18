import React, { Component } from 'react';
import './Stone.css';
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Stone extends Component {
    constructor(props) {
        super(props)

        this.state = {
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

    render() {

        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            slidesToShow: 3,
            slidesToScroll: 3
          };
        return (
            <div className="container">
            <Slider {...settings}>
                <div>
                    <img className="img-bg" alt="" src="img/stone/da-mi-sang-8647.jpg"></img>
                    <div className="info">
                        <a className="ten-bg">Đá mi sàng</a>
                        <p className="mota-bg">Đá mi sàng là loại đá được khai thác từ các mỏ đá và xay ra từ các tảng đá lớn . ... Loại đá này dùng làm chân đế gạch bông, gạch lót sàn, phụ gia cho...</p>
                    </div>
                </div>
                <div>
                <img className="img-bg" alt="" src="img/stone/da-mi-sang-8647.jpg"></img>
                    <div className="info">
                        <a className="ten-bg">Đá mi sàng</a>
                        <p className="mota-bg">Đá mi sàng là loại đá được khai thác từ các mỏ đá và xay ra từ các tảng đá lớn . ... Loại đá này dùng làm chân đế gạch bông, gạch lót sàn, phụ gia cho...</p>
                    </div>
                </div>
              
                <div>
                <img className="img-bg" alt="" src="img/stone/da-mi-sang-8647.jpg"></img>
                    <div className="info">
                        <a className="ten-bg">Đá mi sàng</a>
                        <p className="mota-bg">Đá mi sàng là loại đá được khai thác từ các mỏ đá và xay ra từ các tảng đá lớn . ... Loại đá này dùng làm chân đế gạch bông, gạch lót sàn, phụ gia cho...</p>
                    </div>
                </div>
                <div>
                <img className="img-bg" alt="" src="img/stone/da-mi-sang-8647.jpg"></img>
                    <div className="info">
                        <a className="ten-bg">Đá mi sàng</a>
                        <p className="mota-bg">Đá mi sàng là loại đá được khai thác từ các mỏ đá và xay ra từ các tảng đá lớn . ... Loại đá này dùng làm chân đế gạch bông, gạch lót sàn, phụ gia cho...</p>
                    </div>
                </div>
                <div>
                <img className="img-bg" alt="" src="img/stone/da-mi-sang-8647.jpg"></img>
                    <div className="info">
                        <a className="ten-bg">Đá mi sàng</a>
                        <p className="mota-bg">Đá mi sàng là loại đá được khai thác từ các mỏ đá và xay ra từ các tảng đá lớn . ... Loại đá này dùng làm chân đế gạch bông, gạch lót sàn, phụ gia cho...</p>
                    </div>
                </div>
                <div>
                <img className="img-bg" alt="" src="img/stone/da-mi-sang-8647.jpg"></img>
                    <div className="info">
                        <a className="ten-bg">Đá mi sàng</a>
                        <p className="mota-bg">Đá mi sàng là loại đá được khai thác từ các mỏ đá và xay ra từ các tảng đá lớn . ... Loại đá này dùng làm chân đế gạch bông, gạch lót sàn, phụ gia cho...</p>
                    </div>
                </div>
            </Slider>
            </div>
        )
    }
}
