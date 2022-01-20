
import { useTransaction } from '../../hooks/useTransactions';
import Slider from 'react-slick'; 

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

import * as S from './styles';

export function Summary() {

    const {transactions} = useTransaction();

    const responsive = [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2.2,
            slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
              slidesToShow: 1.3,
              slidesToScroll: 1,
              }
          }
    ]

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
            <Slider
                dots={false}
                infinite={false}
                speed={300}
                slidesToShow={3}
                slidesToScroll={3}
                arrows={false}
                responsive={responsive}
            >

                <S.SliderItem >
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
                </S.SliderItem>

                <S.SliderItem>
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
                </S.SliderItem>

                <S.SliderItem>
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
                </S.SliderItem>
            </Slider >
        </S.Container>
    )
}