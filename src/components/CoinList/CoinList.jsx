import React, { useState } from 'react';
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
const Form = styled.form`
`

const Input = styled.input`
    padding-left: 10px;
    width: 150px;
    height: 30px;
    border-radius: 4px;
    border: none;
    background-image: linear-gradient(
    -225deg,
    #78744C 0%,
    #807540 40%,
    #828152 100%

    );
 
`

const Th = styled.th`

`;

export default function CoinList(props) {
    const [search, setSearch] = useState('');
    const handleRefresh = (event) => {
      //prevent the default action of submitting the form
      event.preventDefault();
      props.handleRefresh();
    }
    
    const handleChange = e => {
      setSearch(e.target.value)
    }

    const filteredCoins = props.coinData.filter(coin => 
      coin.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <><div className='coin-search'>
      <Form>
      <Input
          className='coin-input'
          type='text'
          placeholder='Search'
          onChange={handleChange}
      />
      </Form>
      </div>
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
            <Th>History</Th>
            <Th>Balance</Th>
            <Th>Actions</Th>
          </Tr>
        </thead>
        <tbody>
          {
            filteredCoins.map( ({key, id, image, name, ticker, price, priceChange24h, balance, prices}) => 
            <Coin
              key={key}
              id={id}
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
              prices={prices}
            />)
          }
          </tbody>
      </Table></>
    )
    
}
