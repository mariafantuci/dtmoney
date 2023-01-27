import { createContext, ReactNode, useEffect, useState } from 'react';

interface TransactionsType {
    id: number,
    description: string,
    type: 'income' | 'outcome',
    category: string,
    price: number,
    createdAt: string
}

interface TransactionsContextType{
    transactions: TransactionsType[];
}

interface TransactionProviderProps {
    children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionsContextType);

export function TransactionsProvider({ children }: TransactionProviderProps){
    const [transactions, setTransactions] = useState<TransactionsType[]>([]);

    async function loadTransactions() {
        const response = await fetch('http://localhost:3000/transactions')
        const data = await response.json()
        setTransactions(data)
    }

    useEffect(() => {
        loadTransactions()
    }, [])

    return(
        <TransactionsContext.Provider value={
            {
                transactions
            }
        }>
            {children}
        </TransactionsContext.Provider>
    )
}