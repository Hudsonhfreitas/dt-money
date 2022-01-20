import { useTransaction } from '../../hooks/useTransactions';
import { useMediaQuery } from 'react-responsive';

import closeImg from '../../assets/close.svg';

import * as S from './styles';

export function TransactionTable() { 

    const {transactions, deleteTransaction} = useTransaction();
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 650px)' })

    return (
        <S.Container>
            {isTabletOrMobile ? 
                <S.ItemMobile>
                    <header>
                        <h2>Listagem</h2>
                        <p>{transactions ? transactions.length : 0 } itens</p>
                    </header>
                    
                    {transactions.map(transaction => (
                        <div key={transaction.id}>
                            <h4>{transaction.title}</h4>
                            <span className={transaction.type}>
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(transaction.amount)}
                            </span>
                            <footer>
                                <span>{transaction.category}</span>
                                <span>
                                    {new Intl.DateTimeFormat('pt-BR').format(
                                        new Date(transaction.createdAt)
                                    )}
                                </span>
                            </footer>
                            <button style={{cursor: 'pointer'}} onClick={() => deleteTransaction(transaction.id)}>
                                <img src={closeImg}/>
                            </button>
                        </div>
                    ))}
                </S.ItemMobile>

                :

                <table>
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Valor</th>
                            <th>Categoria</th>
                            <th>Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map(transaction => (
                            <tr key={transaction.id}>
                                <td>{transaction.title}</td>
                                <td className={transaction.type}>
                                    {new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(transaction.amount)}
                                </td>
                                <td>{transaction.category}</td>
                                <td>
                                    {new Intl.DateTimeFormat('pt-BR').format(
                                        new Date(transaction.createdAt)
                                    )}
                                </td>
                                <td style={{cursor: 'pointer'}} onClick={() => deleteTransaction(transaction.id)}>
                                    <img src={closeImg}/>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>            
            }
        </S.Container>
    )
}