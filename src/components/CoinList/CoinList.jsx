import React from 'react';
import styled from 'styled-components';
import Coin from '../Coin/Coin';

const Table = styled.table`
    font-size: 1rem;
    color: #E2DED7;
`;

const Button = styled.button`
  height: 30px;
`
const I = styled.i`
  font-size: 1.12rem;
  color: #807540;
`
const Tr = styled.tr`
  font-size: 1rem; 
  font-family: 'Nunito', sans-serif;
  color: #807540;
  
`

const Th = styled.th`

`;

export default function CoinList(props) {

    const handleRefresh = (event) => {
      //prevent the default action of submitting the form
      event.preventDefault();
      props.handleRefresh();
    }

    return (
        <Table className='table table-dark'>
        <thead>
          <Tr>
            <Th>Token</Th>
            <Th>Name</Th>
            <Th>Symbol</Th>
            <Th>
              <Button className='btn' onClick={handleRefresh}>
                <I className="fas fa-redo-alt"></I>
              </Button>
            </Th>
            <Th>24h</Th>
            <Th>Balance</Th>
            <Th>Actions</Th>
          </Tr>
        </thead>
        <tbody>
          {
            props.coinData.map( ({key, image, name, ticker, price, priceChange24h, balance}) => 
            <Coin
              key={key}
              handleRefresh={props.handleRefresh}
              transaction={props.transaction}
              image={image}
              name={name} 
              ticker={ticker} 
              showBalance={props.showBalance}
              balance={balance}
              price={price}
              priceChange24h={priceChange24h}
              tickerId={key}
            />)
          }
          </tbody>
      </Table>
    )
    
}
