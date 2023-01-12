import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
import { PriceHightLight, TransactionContainer, TransactionTable } from './style';

export function Transactions(){
    return(
        <div>
            <Header />
            <Summary />

            <TransactionContainer>
                <TransactionTable>
                    <tbody>
                        <tr>
                            <td width="50%">Desenvolvimento de site</td>
                            <td><PriceHightLight variant='income'>R$ 12.000,00</PriceHightLight></td>
                            <td>Venda</td>
                            <td>13/04/2022</td>
                        </tr>
                        <tr>
                            <td width="50%">Hamburguer</td>
                            <td><PriceHightLight variant='outcome'>- R$ 59,00</PriceHightLight></td>
                            <td>Alimentação</td>
                            <td>10/04/2022</td>
                        </tr>
                        <tr>
                            <td width="50%">Aluguel do apartamento</td>
                            <td><PriceHightLight variant='outcome'>- R$ 1.200,00</PriceHightLight></td>
                            <td>Casa </td>
                            <td>27/03/2022</td>
                        </tr>
                        <tr>
                            <td width="50%">Computador</td>
                            <td><PriceHightLight variant='income'>R$ 5.400,00</PriceHightLight></td>
                            <td>Venda </td>
                            <td>15/03/2022</td>
                        </tr>
                    </tbody>
                </TransactionTable>
            </TransactionContainer>
        </div>
    );
}