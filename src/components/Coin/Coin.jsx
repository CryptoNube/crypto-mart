import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ChartData from '../MiniChart/ChartData';

const Td = styled.td`
    width: 14vw;
`;

const I = styled.i`
    color: #807540;
`

const TdControls = styled(Td)`
    width: 20vw;
`;

const TdSymbol = styled(Td)`
    text-transform: uppercase;
`

const Button = styled.button`
    font-size: 11px;
    width: 55px;
    margin: 3px 5px 0;
`;

const Img = styled.img`
    max-width: 33px;

`;

export default function Coin(props) {



    const handleBuy = (event) => {
        //prevent the default action of submitting the form
        event.preventDefault();
        props.transaction(true, props.tickerId);
     }    

     const handleSell = (event) => {
        if (props.balance > 0 && props.showBalance === true) {
            event.preventDefault();
        props.transaction(false, props.tickerId);
        } else {
            event.preventDefault();
        }
     } 

    return (
        <tr>
            <Td><Img src={props.image} alt='#'/></Td>
            <Td>{props.name}</Td> 
            <TdSymbol>{props.ticker}</TdSymbol> 
            <Td>
                ${props.price}
            </Td> 
            <Td 
            className={props.priceChange24h < 0 
            ? 'text-danger mr-2' 
            : 'text-success'}>
            {props.priceChange24h < 0 
            ? (<i className='fas fa-sort-down align-top mr-1'></i>)
            : (<i className='fas fa-sort-up align-bottom mr-1'></i>)}
            {props.priceChange24h}%</Td>
            <Td><ChartData 
                key={props.key}
                name={props.name}
                id={props.id}
                priceChange24h={props.priceChange24h}
                /></Td>
            <Td>{props.showBalance ? props.balance : <div><I className="fas fa-eye-slash"></I></div>}</Td>
            <TdControls>
                <form action='#' method='POST'>
                <Button 
                    className='btn btn-secondary'
                    onClick={handleBuy}>
                    Buy
                </Button>
                <Button 
                    className='btn btn-secondary'
                    onClick={handleSell}>
                    Sell
                </Button>
                </form>
            </TdControls>
        </tr>
    );

}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
}


