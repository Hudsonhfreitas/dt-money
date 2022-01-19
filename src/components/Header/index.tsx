import logoImg from '../../assets/logo.svg';

import * as S from './styles';

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header ({onOpenNewTransactionModal}: HeaderProps) {

    return (
        <S.Container>
            <S.Content>
                <img src={logoImg} alt="dt money"/>
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova transação
                </button>
            </S.Content>
        </S.Container>
    )
}
