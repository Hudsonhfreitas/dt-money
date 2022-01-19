import { useContext } from 'react';
import { TransactionsContext } from '../../TransactionsContext';

import * as S from './styles';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';


export function Summary() {

    const {transactions} = useContext(TransactionsContext);

    const summary = transactions.reduce((acc, transactions) => {
        if(transactions.type ==='deposit') {
            acc.deposits += transactions.amount;
            acc.total += transactions.amount;       
        } else {
            acc.withdraws += transactions.amount;
            acc.total -= transactions.amount;       
        }

        return acc
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0,
    })
    
    return (
        <S.Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas"/>
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.deposits)}
                </strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Entradas"/>
                </header>
                <strong>-
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.withdraws)}
                </strong>
            </div>

            <div>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Entradas"/>
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.total)}
                </strong>
            </div>
        </S.Container>
    )
}