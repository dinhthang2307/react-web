import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import { ButtonContainer } from './Button';
class Navbar extends Component {
    render() {
        return (
            <NavWraper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to='/'>
                    <img src={logo} alt="store" className="navbar-brand" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">Trang chủ</Link>
                    </li>
                    <li className="nav-item ml-5">
                        <a href="/#intro" className="nav-link">Giới thiệu</a>
                    </li>
                    <li className="nav-item ml-5">
                        <a href="/#product" className="nav-link">Sản phẩm</a>
                    </li>
                    <li className="nav-item ml-5">
                        <a href="/#price" className="nav-link">Bảng giá</a>
                    </li>
                    <li className="nav-item ml-5">
                        <a href="/#video" className="nav-link">Video</a>
                    </li>
                    <li className="nav-item ml-5">
                        <a href="/#contact" className="nav-link">Liên hệ</a>
                    </li>
                </ul>
                <Link to='/cart' className="ml-auto" >
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fas fa-cart-plus"> my cart</i>
                        </span>
                    </ButtonContainer>
                </Link>
            </NavWraper>
        );
    }
}

const NavWraper = styled.nav`
    background: var(--mainBlue);
    .nav-link{
        color: var(--mainWhite)!important;
        font-size: 1.3rem;
        text-transform: capitalize !important;
    }
`
export default Navbar;