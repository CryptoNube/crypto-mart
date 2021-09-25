import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
    font-size: 2rem;
    text-align: center;
    margin-bottom: .5rem; 
    line-height: 3rem;
    display: inline-block;

`;

const I = styled.i`
    font-size: 3rem;
    color: #807540;
`;

const I2 = styled.i`
    font-size: 2.6rem;
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
    width: 0 8px;
`;

var formatter = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'CAD'
});


export default function AccountBalance(props) {

    //const buttonText = props.showBalance ? 'fas fa-wallet ' : 'fas fa-user-secret';
    let content = '\u00a0';
    if ( props.showBalance ) {
        content = <>{formatter.format(props.amount)}</> 
    }
    const buttonClass = 'btn ' + (props.showBalance ? 'btn-warning' : 'btn-info');
    return (
        <>
        <Balance>{content}</Balance>
        <Section>
            <HideShowBalance 
            onClick={props.setBalanceDisplay}
            className = 'btn'>
              <I2 className='fas fa-wallet'></I2>
            </HideShowBalance>
            <Button 
            className = 'btn'
            onClick = {props.depositOneThousand}>
              <I className="fas fa-money-bill-alt"></I>
            </Button>
        </Section>
        </>
    );
}





AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired,
}