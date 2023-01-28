import { ReactNode, useEffect, useState, useCallback } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'

interface TransactionsType {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}

interface CreateTransactionType {
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
}

interface TransactionsContextType {
  transactions: TransactionsType[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransactions: (data: CreateTransactionType) => Promise<void>
}

interface TransactionProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<TransactionsType[]>([])

  const fetchTransactions = useCallback(
    async (query?: string) => {
      const response = await api.get('/transactions', {
        params: {
          _sort: 'createdAt',
          _order: 'desc',
          q: query,
        },
      })
  
      setTransactions(response.data)
    }, []
  )

  const createTransactions = useCallback(
    async (data: CreateTransactionType) => {
      const { description, type, price, category } = data
      const response = await api.post('/transactions', {
        description,
        type,
        price,
        category,
        createdAt: new Date(),
      })
      setTransactions((state) => [response.data, ...state])
    }, []
  )

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
        createTransactions,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
