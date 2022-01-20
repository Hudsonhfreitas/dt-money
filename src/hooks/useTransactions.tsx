import { createContext, useState, useEffect, ReactNode, useContext } from "react";

interface Transactions {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

type TransactionInput = Omit<Transactions, 'id' | 'createdAt'>

interface TransactionsProviderProps {
    children: ReactNode; 
}

interface TransactionsContextData {
    transactions: Transactions[],
    createNewTransaction: (transaction: TransactionInput) => Promise<void>
    deleteTransaction: (id: number) => Promise<void>
}

const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider ({children}: TransactionsProviderProps) { 

    const [transactions, setTransactions] = useState<Transactions[]>([])

    useEffect(() => {

        const localData = localStorage.getItem('@dt-money')

        if(localData) {
            setTransactions(JSON.parse(localData))
        }

    }, []);

    async function createNewTransaction(transactionInput: TransactionInput) {
        const localData = localStorage.getItem('@dt-money')
        const localJson = localData ? JSON.parse(localData) : []

        const newTransaction = {...transactionInput, 
            id: transactions.length,
            createdAt: String(new Date()),
        };

        localJson.push(newTransaction)
        
        setTransactions(localJson);
        localStorage.setItem('@dt-money', JSON.stringify(localJson))
    }

    async function deleteTransaction(id: number) {
        const newTransactionList = transactions.filter(transaction => transaction.id !== id)
        setTransactions(newTransactionList);
        localStorage.setItem('@dt-money', JSON.stringify(newTransactionList))
    }

    return (
        <TransactionsContext.Provider value={{transactions, createNewTransaction, deleteTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
}

export function useTransaction() {
    const context = useContext(TransactionsContext)

    return context;
}