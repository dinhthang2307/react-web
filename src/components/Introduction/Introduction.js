/* eslint-disable */
import React, { Component } from 'react';
import Button from '../Button';
import './Introduction.css';

export default class Intruduction extends Component {
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
            <div class="container" id="intro">
                <div class="row">
                    <div class="col-sm-5 image">
                        <img src="img/introduction/introduction1.jpg"></img>
                    </div>
                    <div class="col-sm-7 text">
                        <h3>CÔNG TY TNHH VLXD ĐẠI PHÚC VINH</h3>
                        <h4>Giới thiệu</h4>
                        <p>ông ty TNHH VLXD Đại Phúc Vinh được thành lập
                            vào thời kỳ ngành xây dựng Việt Nam có nhiều
                            biến động, ngành vật liệu xây dựng cũng gặp
                            rất nhiều khó khăn. Đại Phúc Vinh luôn là nhà
                            phân phối sắt thép xây dựng hàng đầu ở khu
                            vực thành phố Hồ Chí Minh và khu vực lân cận.
                            Như ông cha đã có câu lửa thử vàng gian nan
                            thử sức, tập thể công nhân viênCông ty TNHH
                            VLXD Đại Phúc Vinh đã sát cánh cùng nhau. Với
                            phương châm lấy khách hàng là trọng tâm, sản
                            phẩm và dịch vụ của công ty được đông đảo
                            khách hàng gần xa biết tới và tin dùng. Chính
                            trong những thời kỳ khó khăn nhất tập thể công
                            nhân viên Công ty TNHH VLXD Đại Phúc Vinh cùng
                            khách hàng vượt qua và phát triển như hiện nay.</p>
                        <h5>Tag</h5>
                        <p>Đá xây dựng, Cát đá làm đường, Cát san lấp, San Lấp mặt bằng, Cát bê tông, Cát bê tông vàng, Cát xây tô, Cát Tân châu, Đá 1x2, Đá 1x2 xanh, Đá 0x4, Đá 0x4 Xanh, Đá mi, Đá 4x6,</p>
                        <button>Xem thêm</button>
                    </div>
                </div>
            </div>
        )
    }
}
