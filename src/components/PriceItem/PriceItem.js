import React, { Component } from 'react'

export default class Priceitem extends Component {
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
    handleEvent() {}

    // Class Properties (Stage 3 Proposal)
    handler = () => { this.setState() }

    render() {
        console.log("The price");
        console.log(this.props);
        return (
            
            <tr>
                <th scope="row">{this.props.id}</th>
                <td>{this.props.title}</td>
                <td>{this.props.price}</td>
                <td>{this.props.priceWithVAT}</td>
            </tr>
        )
    }
}
