import { createContext, useEffect, useState, ReactNode } from "react";
import { api } from "./components/services/api";

interface Transaction {
  id: number;
  title: string;
  type: string;
  amount: number;
  category: string;
  createdAt: string;
}

// interface TransactionInput {
//     title: string;
//     type: string;
//     amount: number;
//     category: string;
//   }

//type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext<Transaction[]>([]);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);
  function createdTransaction(transaction: TransactionInput){
      api.post("/transactions", transaction);
  }

  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  );
}
