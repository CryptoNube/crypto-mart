import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';
import React, { useEffect, useState } from 'react';
import AppHeader from './components/AppHeader/AppHeader';
import styled from 'styled-components';
import axios from 'axios';
import 'bootswatch/dist/darkly/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/all';



const Div = styled.div`
    text-align: center;
    background-color: #303030;
    color: #cccccc;
`;

const COIN_COUNT = 25;
const formatPrice = price => parseFloat(Number(price).toFixed(4));

function App(props) {

  const [balance, setBalance] = useState(10000);
  const [showBalance, setShowBalance] = useState(false);
  const [coinData, setCoinData] = useState([]);


  const componentDidMount = async () => {
    let response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
      params: {
        vs_currency: 'cad',
        ids: ''
      }
    });
    let coinData = response.data.slice(0, COIN_COUNT).map( function(token) {
      return {
        key: token.id,
        id: token.id,
        image: token.image,
        name: token.name,
        ticker: token.symbol,
        balance: 0,
        price: formatPrice(token.current_price),
        priceChange24h: parseFloat(Number(token.price_change_percentage_24h).toFixed(2)),
      };
    });
    setCoinData(coinData);
  }


  useEffect(function() {
    if (coinData.length === 0) {
      componentDidMount();
    } 
  })

  const loadWallet = () => {
    if (showBalance === true)
    setBalance(oldBalance => oldBalance + 1000);
  }

  const transaction = (isBuy, valueChangeId) => {
    var balanceChange = isBuy ? 1 : -1;
    const newCoinData = coinData.map( function(values) {
      let newValues = {...values};
      if (valueChangeId === values.key) {
        if (balance > newValues.price && showBalance === true) {
          newValues.balance += balanceChange;
          setBalance( oldBalance => oldBalance - balanceChange * newValues.price );
        } else if (!isBuy) {
          newValues.balance += balanceChange;
          setBalance( oldBalance => oldBalance - balanceChange * newValues.price );
        }
      }
      return newValues;
    });
    setCoinData(newCoinData);
  }

  const setBalanceDisplay = () => {
    setShowBalance(oldValue => !oldValue )
  }
  const handleRefresh = async (valueChangeId) => {
    let response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
      params: {
        vs_currency: 'cad',
        ids: ''
      }
    });
  
    let coinData = response.data.slice(0, COIN_COUNT).map( function(token) {
      return {
        key: token.id,
        image: token.image,
        name: token.name,
        ticker: token.symbol,
        balance: 0,
        price: formatPrice(token.current_price),
        priceChange24h: parseFloat(Number(token.price_change_percentage_24h).toFixed(2)),
      };
    });
    setCoinData(coinData);
  }
      return (
        <Div className="App">
          <AppHeader/>
          <AccountBalance 
            amount={balance} 
            showBalance={showBalance} 
            loadWallet={loadWallet}
            setBalanceDisplay={setBalanceDisplay}/>
          <CoinList 
            coinData={coinData} 
            showBalance={showBalance}
            transaction={transaction}
            handleRefresh={handleRefresh}/>
        </Div>
      );
    

}

export default App;
