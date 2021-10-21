import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.png';
import Widget from '../Widget/Widget';

const Img = styled.img`
    height: 8rem;
    margin-left: 20px;
    margin-top: 10px;
    pointer-events: none;
`;
const Header = styled.header`
    background-color: #303030;
    min-height: 10vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    color: #807540;
`;

const H1 = styled.h1`
    font-family: 'Nunito', sans-serif;
    font-size: 3.5rem;
    fold-weight: bold;
    min-width: 300px;
`;

export default class AppHeader extends Component {
    render() {
        return (
            <Header>
                <Img src={logo} alt='Rect Logo'/>
                <H1>
                CryptoMart
                </H1>
                <br></br>
                <Widget/>
            </Header>
 
        )
    }
}


