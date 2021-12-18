import { Container } from "./style";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import sumImg from "../../assets/total.svg";
import { TransactionsContext } from "../../TransactionsContext";
import React, { useContext } from "react";

export function Summary() {
  const transactions = useContext(TransactionsContext);
  console.log(transactions);
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>R$:1000,00</strong>
      </div>
      <div>
        <header>
          <p>Sidas</p>
          <img src={outcomeImg} alt="Saidas" />
        </header>
        <strong>-R$:500,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={sumImg} alt="Total" />
        </header>
        <strong>R$:500,00</strong>
      </div>
    </Container>
  );
}
