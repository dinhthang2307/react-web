import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Detail from './components/Detail';
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import ProductList from './components/ProductList';
import Modal from './components/Modal';
class App extends Component {
  render() {
    return (
    <React.Fragment>
     <Navbar></Navbar>
     <Switch>
     <Route exact path="/" component={ProductList} ></Route> 
       <Route path="/detail" component={Detail} ></Route> 
       <Route path="/cart" component={Cart} ></Route> 
       <Route component={Default}></Route> 
     </Switch>
     <Modal />
    </React.Fragment>
    );
  }
}

export default App;
