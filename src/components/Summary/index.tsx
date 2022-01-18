import * as S from './styles';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

export function Summary() {
    return (
        <S.Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas"/>
                </header>
                <strong>R$1000,00</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Entradas"/>
                </header>
                <strong>R$1000,00</strong>
            </div>

            <div>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Entradas"/>
                </header>
                <strong>R$1000,00</strong>
            </div>
        </S.Container>
    )
}