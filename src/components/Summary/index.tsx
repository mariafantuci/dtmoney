import { ArrowCircleUp, CurrencyDollar, ArrowCircleDown } from 'phosphor-react';
import { useContext } from 'react';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import { SummaryCard, SummaryContainer } from './style';

export function Summary(){
    const { transactions } = useContext(TransactionsContext)

    return(
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color="#00b37e"/>
                </header>
                <strong>R$ 17.400,00</strong>
            </SummaryCard>
            <SummaryCard>
                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} color="#F75A68"/>
                </header>
                <strong>R$ 1.259,00</strong>
            </SummaryCard>
            <SummaryCard variant='green'>
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color="#FFFFFF"/>
                </header>
                <strong>R$ 16.141,000</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}