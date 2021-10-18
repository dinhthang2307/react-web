import React, { Component } from 'react';
import './Price.css';
import Title from '../Title';
import { priceList } from "../../dataPrice";
import PriceItem from "../PriceItem/PriceItem";
export default class Price extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: priceList
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
        const { data } = this.state;
        console.log(data);
        return (
            <div className="container" id="price">
                <Title name="Bảng " title="giá"></Title>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Vật liệu</th>
                            <th scope="col">Giá chưa có VAT</th>
                            <th scope="col">Giá có VAT</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item) => {
                                return <PriceItem id={item.id}
                                    title={item.title}
                                    price={item.price}
                                    priceWithVAT={item.priceWithVAT} />
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
