import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Tr = styled.tr`
    justify-content: center;
    flex-direction: row;
`;

const Td = styled.td`
    width: 23vw;
`;

const TdSearch = styled(Td)`
`

const TdActions = styled(Td)`
    width: 63vw;
`;


const I = styled.i`
    font-size: 3rem;
    color: #807540;
`;

const I2 = styled.i`
    font-size: 2.6rem;
    color: #807540;
`
const I3 = styled.i`
    margin-right: 20px;
    color: #807540;
`

const Balance = styled.div`
    min-width: 250px;
    font-size: 1.5rem;
    verticle-align: middle;
`

const Button = styled.button`
    margin: 0 8px;
`;

const HideShowBalance = styled(Button)`
    justify-content: center;
`;

var formatter = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'CAD'
});


export default function AccountBalance(props) {
    const [search, setSearch] = useState(''); 

    //const buttonText = props.showBalance ? 'fas fa-wallet ' : 'fas fa-user-secret';
    let content = '\u00a0';
    if ( props.showBalance ) {
        content = <>{formatter.format(props.amount)}</> 
    } else {
        content = <div><I3 className="fas fa-eye-slash"></I3></div>
    }

    const buttonClass = 'btn ' + (props.showBalance ? 'btn-warning' : 'btn-info');

    const handleChange = e => {
        setSearch(e.target.value)
      }

    return (
        <>
        <Balance>{content}</Balance>
        <Tr>
        <Td>
        </Td>
        <TdActions>
        <HideShowBalance 
        onClick={props.setBalanceDisplay}
        className = 'btn'>
            <I2 className='fas fa-wallet'></I2>
        </HideShowBalance>
        <Button 
        className = 'btn'
        onClick = {props.loadWallet}>
            <I className="fas fa-money-bill-alt"></I>
        </Button>
        </TdActions>
        <Td></Td>
        </Tr>
        </>
    );
}





AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired,
}