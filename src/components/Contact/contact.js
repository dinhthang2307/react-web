import React, { Component } from 'react'
import "./contact.css"
export default class Contact extends Component {
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
        return (
            <div className="container" id="contact">
                <div className="row">
                    <div className="col-md-6">
                        <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=N9%20%C4%91%C6%B0%E1%BB%9Dng%2079%20ph%C6%B0%E1%BB%9Bc%20long%20B%20qu%E1%BA%ADn%209&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                        </iframe>
                    </div>
                    <div className="col-md-6 chinhsach">
                        <h3>Chính sách hỗ trợ</h3>
                        <div>
                            <li href="#">Chính sách bảo hành</li>
                            <li href="#">Vận chuyển nhanh</li>
                            <li href="#">Tốc độ chuẩn nhanh</li>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div class="flex">
                        <div>2021 Copyright © <span>CÔNG TY TNHH VLXD ĐẠI PHÚC VINH</span></div>
                        <div>
                            <span>Đang online: 12&nbsp;&nbsp;&nbsp;&nbsp;Tổng truy cập: 20990</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
