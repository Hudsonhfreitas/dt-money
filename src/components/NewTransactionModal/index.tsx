import { useState } from "react";
import Modal from "react-modal";
import closeImg from '../../assets/close.svg';
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import * as S from './styles';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

Modal.setAppElement('#root')

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {

    const [type, setType] = useState('deposit');

    return (
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={closeImg} alt="fechar modal" />
            </button>
        
        <S.Container>
            <h2>Cadastrar transação</h2>

            <input type="number" placeholder="Título"/>
            <input type="number" placeholder="Valor"/>

            <S.TransactionTypeContainer>
                <S.RadioBox 
                  type="button"
                  onClick={() => setType('deposit')}
                  isActive={type === 'deposit'}
                  activeColor="green"
                >
                    <img src={incomeImg} alt="Entrada" />
                    <span>Entrada</span>
                </S.RadioBox>

                <S.RadioBox 
                  type="button"
                  onClick={() => setType('withdraw')}
                  isActive={type === 'withdraw'}
                  activeColor="red"
                >
                    <img src={outcomeImg} alt="Saída" />
                    <span>Saída</span>
                </S.RadioBox>
            </S.TransactionTypeContainer>

            <input type="text" placeholder="Categoria"/>

            <button type="submit">
                Cadastrar
            </button>
        </S.Container>
            
            
      </Modal>
    )
}