import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import { storeProducts } from '../data';
import { ProductConsumer } from '../context';
import Slider from './Slider/Slider';
import Introduction from './Introduction/Introduction';
import Price from './Price/Price';
import Stone from './Stone/Stone';
import Video from './Videos/Videos';
import Contact from './Contact/contact'
class ProductList extends Component {
    state = {
        products: storeProducts
    }

    render() {
        console.log(this.state.products);
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Slider />
                        <Introduction />
                        <Title name="Sản phẩm " title="chính"></Title>
                        <div className="row">
                            <ProductConsumer>
                                {(value) => {
                                    return value.products.map(product => {
                                        return <Product key={product.id} product={product}
                                            handleDetail />
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <a href="#">
                        <img alt="" src="img/background/background2.jpg"></img>
                    </a>
                </div>

                <Price />
                <Stone />
                <Video />
                <Contact />
            </React.Fragment>
        );
    }
}

export default ProductList;