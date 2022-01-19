import React, { FormEvent, useState } from "react";
import Modal from "react-modal";
import { api } from "../../assets/api";
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

    const [title, setTitle] = useState('')
    const [value, setValue] = useState(0)
    const [category, setCategory] = useState('')
    const [type, setType] = useState('deposit');

    function handleCreateNewTransaction(e: FormEvent) {
        e.preventDefault()

        const data = {
            title,
            value,
            category,
            type
        }

        api.post('/transactions', data)
    }

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
        
        <S.Container onSubmit={handleCreateNewTransaction}>
            <h2>Cadastrar transação</h2>

            <input 
                type="text" 
                placeholder="Título" 
                value={title}
                onChange={e => setTitle(e.target.value)}
            />

            <input 
                type="number" 
                placeholder="Valor" 
                value={value}
                onChange={e => setValue(Number(e.target.value))}
            />

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

            <input 
                type="text" 
                placeholder="Categoria" 
                value={category}
                onChange={e => setCategory(e.target.value)}
            />

            <button type="submit">
                Cadastrar
            </button>
        </S.Container>
            
            
      </Modal>
    )
}